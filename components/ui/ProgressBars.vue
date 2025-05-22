<script setup lang="ts">
interface Props {
  value: number;
  color: string;
  segments?: number;
}

const props = withDefaults(defineProps<Props>(), {
  segments: 5,
});

const progressBars = computed(() => {
  const filledSegments = Math.floor((props.value / 100) * props.segments);

  return Array(props.segments)
    .fill(0)
    .map((_, index) => {
      return index < filledSegments ? 100 : 0;
    });
});
</script>

<template>
  <div class="flex gap-1">
    <div
      v-for="(item, index) in progressBars"
      :key="index"
      class="flex-1 h-2 rounded-full overflow-hidden relative"
    >
      <div
        class="absolute inset-0 h-full w-full rounded-full"
        :class="`${color}/10`"
      />

      <div
        v-if="item === 100"
        class="absolute inset-0 h-full w-full rounded-full transition-all duration-300"
        :class="color"
      />
    </div>
  </div>
</template>
