<script setup lang="ts">
interface Props {
  confidenceIndex: number;
  maxStars?: number;
}

const props = withDefaults(defineProps<Props>(), {
  maxStars: 5,
});

const confidenceStars = computed(() => {
  return Array(props.maxStars)
    .fill(0)
    .map((_, index) => index < props.confidenceIndex);
});
</script>

<template>
  <div class="text-lg flex items-center gap-1">
    <Star
      v-for="(isActive, index) in confidenceStars"
      :key="index"
      class="text-[#3890FA] h-3 w-3"
      :class="isActive ? '' : 'opacity-30'"
    />
  </div>
</template>
