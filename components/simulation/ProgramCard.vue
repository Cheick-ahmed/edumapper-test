<script setup lang="ts">
import { ref } from "vue";

type ChanceLevel = "très élevées" | "élevées" | "moyennes" | "faibles";

interface Props {
  school: string;
  location: string;
  program: string;
  chanceLevel: ChanceLevel;
  progressValue: number;
  confidenceIndex?: number;
  hasAdditionalInfo?: boolean;
  additionalInfo?: string;
}

const props = withDefaults(defineProps<Props>(), {
  confidenceIndex: 0,
  hasAdditionalInfo: false,
  additionalInfo: "",
});

const emit = defineEmits<{
  remove: [];
}>();

const expanded = ref(false);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};

const getChanceLevelInfo = (level: ChanceLevel) => {
  const progressColors = {
    "très élevées": "bg-[#2BD398]",
    élevées: "bg-[#3890FA]",
    moyennes: "bg-[#D95AFF]",
    faibles: "bg-[#FAAD14]",
  };

  return progressColors[level] || "bg-[#3890FA]";
};

const chanceLevelInfo = computed(() => getChanceLevelInfo(props.chanceLevel));
</script>

<template>
  <div
    class="bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-400 transform hover:shadow-md"
    :class="{ 'scale-[1.01]': expanded }"
  >
    <div class="p-px">
      <div
        class="p-4 flex rounded-t-3xl justify-between items-start bg-[#F7F3F0]"
      >
        <div class="space-y-1">
          <div
            class="flex items-center gap-[2px] divide-x divide-[#646A81] text-[#646A81] text-sm"
          >
            <span class="font-medium uppercase pr-2">{{ school }}</span>
            <div class="flex items-center">
              <MapPin class="w-3 h-3 mr-1" />
              {{ location }}
            </div>
          </div>
          <h3 class="mt-2 text-xl font-semibold">{{ program }}</h3>
        </div>

        <button
          class="text-gray-400 hover:text-gray-600 transition-transform duration-200 transform hover:scale-110 active:scale-90"
          @click="emit('remove')"
        >
          <XMark class="w-4 h-4 text-[#1B1B1B] stroke-4" />
        </button>
      </div>

      <div class="space-y-2 p-4">
        <div class="flex justify-between items-center">
          <span class="font-medium">Mes chances</span>
          <ChanceBadge :level="chanceLevel" />
        </div>

        <div class="mt-4">
          <ProgressBars :value="progressValue" :color="chanceLevelInfo" />
        </div>

        <div class="mt-4">
          <button
            class="flex items-center text-[#1B1B1B] text-sm font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            @click="toggleExpanded"
          >
            {{ expanded ? "Voir moins" : "Voir plus" }}
            <ChevronIcon :is-up="expanded" class="ml-1" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[200px]"
        leave-from-class="opacity-100 max-h-[200px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="expanded" class="overflow-hidden p-4 pt-0">
          <div class="">
            <p v-if="hasAdditionalInfo" class="text-[#646A81] text-sm mb-4">
              {{ additionalInfo }}
            </p>

            <div v-if="confidenceIndex > 0" class="flex items-center gap-2">
              <span class="text-[#1B1B1B] text-sm font-semibold"
                >Indice de confiance</span
              >
              <ConfidenceStars :confidence-index="confidenceIndex" />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
