<script setup lang="ts">
import { saveClassData, saveSpecialtiesData } from "~/composables/UseSections";
import type { ClassData, SpecialtyData } from "~/composables/UseSections";

type FormData = Record<string, unknown>;

interface Props {
  title: string;
  expandedTitle?: string;
  modelValue: FormData;
  emptyMessage?: string;
  validator?: (data: FormData) => boolean;
  formatter?: (data: FormData) => string;
  defaultData?: FormData;
  locked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  expandedTitle: "",
  emptyMessage: "À compléter",
  validator: () => true,
  formatter: (data: FormData) => JSON.stringify(data),
  defaultData: () => ({}),
  locked: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: FormData];
  change: [value: FormData];
  expand: [];
  collapse: [];
}>();

const isExpanded = ref(false);
const tempData = ref({ ...props.modelValue });

const isComplete = computed(() => {
  return props.validator(props.modelValue);
});

const displayValue = computed(() => {
  if (!isComplete.value) {
    return props.emptyMessage;
  }
  return props.formatter(props.modelValue);
});

const getStatusTextClass = computed(() => {
  if (!isComplete.value) {
    return "text-gray-400 italic";
  }
  return "text-gray-900";
});

const isSelectionValid = computed(() => {
  return props.validator(tempData.value);
});

const canConfirm = computed(() => {
  return isSelectionValid.value;
});

// Vérifier si l'édition est autorisée
const canEdit = computed(() => {
  return !props.locked;
});

// Méthodes
const toggleExpansion = () => {
  // Si la section est verrouillée, ne rien faire
  if (props.locked) return;

  if (isExpanded.value) {
    cancelEdit();
  } else {
    openEdit();
  }
};

const openEdit = () => {
  if (props.locked) return; // Protection supplémentaire

  isExpanded.value = true;
  tempData.value = { ...props.modelValue };
  emit("expand");
};

const confirmChanges = () => {
  if (props.locked) return; // Protection supplémentaire

  if (isSelectionValid.value) {
    emit("update:modelValue", { ...tempData.value });

    if (
      props.title === "Classe" ||
      props.expandedTitle === "En quelle classe es-tu ?"
    ) {
      const classData = tempData.value as unknown as ClassData;
      saveClassData(classData);
    } else if (
      props.title === "Spécialités" ||
      props.expandedTitle === "Quelles spécialités as-tu choisies ?"
    ) {
      const specialtiesData = tempData.value as unknown as SpecialtyData;
      saveSpecialtiesData(specialtiesData);
    }

    isExpanded.value = false;

    nextTick(() => {
      emit("change", { ...tempData.value });
      emit("collapse");
    });
  }
};

const cancelEdit = () => {
  tempData.value = { ...props.modelValue };
  isExpanded.value = false;
  emit("collapse");
};

const updateTempData = (newData: Partial<FormData>) => {
  if (props.locked) return;

  tempData.value = { ...tempData.value, ...newData };
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isExpanded.value) {
    cancelEdit();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (!isExpanded.value) {
      tempData.value = { ...newValue };
    }
  }
);
</script>

<template>
  <Card>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <h3
          class="transition-all duration-300"
          :class="
            isExpanded
              ? 'font-bold text-[#1B1B1B] text-xl '
              : 'text-sm text-[#646A81] font-light'
          "
        >
          {{ isExpanded && expandedTitle ? expandedTitle : title }}
        </h3>
      </div>

      <button v-if="canEdit" @click="toggleExpansion">
        <template v-if="isExpanded">
          <XMark class="w-4 h-4" />
        </template>
        <template v-else>
          <Pencil class="w-4 h-4" />
        </template>
      </button>
      <span v-else>
        <LockClosed class="w-4 h-4" />
      </span>
    </div>

    <div v-if="!isExpanded" class="mt-2">
      <p
        class="text-sm text-[#646A81] font-thin transition-colors duration-300"
        :class="getStatusTextClass"
      >
        {{ displayValue }}
      </p>
    </div>

    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-400 ease-out"
      enter-from-class="max-h-0 opacity-0 transform scale-95"
      enter-to-class="max-h-screen opacity-100 transform scale-100"
      leave-from-class="max-h-screen opacity-100 transform scale-100"
      leave-to-class="max-h-0 opacity-0 transform scale-95"
    >
      <div v-if="isExpanded" class="overflow-hidden">
        <div>
          <slot
            :data="tempData"
            :update-data="updateTempData"
            :is-valid="isSelectionValid"
          />

          <div class="flex gap-3 mt-6">
            <Button
              :variant="canConfirm ? 'dark' : 'secondary'"
              class="w-full transition-all duration-300"
              :disabled="!canConfirm"
              @click="confirmChanges"
            >
              Confirmer
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </Card>
</template>
