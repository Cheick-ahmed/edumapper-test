<script setup lang="ts">
import type { SpecialtyData } from "~/composables/UseSections";
import Button from "~/components/ui/Button.vue";

interface Props {
  data: Record<string, unknown>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  update: [data: Record<string, unknown>];
}>();

const castedData = computed(() => props.data as unknown as SpecialtyData);

const selectedSpecialties = ref(castedData.value.selected || []);

const toggleSpecialty = (specialtyId: string) => {
  const isCurrentlySelected = selectedSpecialties.value.includes(specialtyId);

  if (isCurrentlySelected) {
    selectedSpecialties.value = selectedSpecialties.value.filter(
      (id) => id !== specialtyId
    );
  } else {
    if (
      selectedSpecialties.value.length < (castedData.value.maxSelections || 2)
    ) {
      selectedSpecialties.value.push(specialtyId);
    }
  }

  emit("update", { selected: [...selectedSpecialties.value] });
};

onMounted(() => {
  selectedSpecialties.value = [...castedData.value.selected];
});

watch(
  () => castedData.value.selected,
  (newSelected) => {
    selectedSpecialties.value = [...newSelected];
  },
  { deep: true }
);
</script>

<template>
  <div>
    <div>
      <div class="pt-6 flex flex-wrap gap-2 items-center">
        <Button
          v-for="specialty in castedData.available"
          :key="specialty.id"
          :variant="
            selectedSpecialties.includes(specialty.id) ? 'secondary' : 'ghost'
          "
          @click="toggleSpecialty(specialty.id)"
        >
          {{ specialty.name }}
        </Button>
      </div>
    </div>
  </div>
</template>
