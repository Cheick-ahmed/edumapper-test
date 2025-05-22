<script setup lang="ts">
import type { ClassData } from "~/composables/UseSections";

interface Props {
  data: Record<string, unknown>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  update: [data: Record<string, unknown>];
}>();

const castedData = computed(() => props.data as unknown as ClassData);

const handleGradeClick = (grade: string) => {
  emit("update", { grade });
};

const handleBacTypeClick = (bacType: string) => {
  emit("update", { bacType });
};
</script>

<template>
  <div>
    <div class="mb-6 border-b border-[#646A81] pb-6">
      <div class="pt-6 flex flex-wrap gap-2 items-center">
        <Button
          v-for="grade in castedData.gradeOptions"
          :key="grade"
          :variant="castedData.grade === grade ? 'secondary' : 'ghost'"
          @click="handleGradeClick(grade)"
        >
          {{ grade }}
        </Button>
      </div>
    </div>

    <div>
      <h4 class="text-sm text-[#1B1B1B] mb-4">Type de bac</h4>
      <div class="flex flex-wrap gap-2 items-center">
        <Button
          v-for="bacType in castedData.bacTypeOptions"
          :key="bacType"
          :variant="castedData.bacType === bacType ? 'secondary' : 'ghost'"
          @click="handleBacTypeClick(bacType)"
        >
          {{ bacType }}
        </Button>
      </div>
    </div>
  </div>
</template>
