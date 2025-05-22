<script setup lang="ts">
interface Props {
  gradient?: boolean;
  delay?: number;
  animationType?: "card-fade-in" | "school-card-enter" | "layout-shift";
}

const props = withDefaults(defineProps<Props>(), {
  gradient: false,
  delay: 0,
  animationType: "card-fade-in",
});

const animationType = computed(() => {
  if (props.gradient) {
    return "school-card-enter";
  }

  return props.animationType;
});

const baseStyles = "rounded-2xl p-4 shadow-sm";

const backgroundStyles = computed(() => {
  return props.gradient
    ? "bg-gradient-to-r from-[#ff7342] to-[#ffbbe1] text-white"
    : "bg-white";
});

const attrs = useAttrs();

const cardClasses = computed(() => {
  return [baseStyles, backgroundStyles.value, attrs.class]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <div
    v-motion="animationType"
    :class="cardClasses"
    v-bind="$attrs"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>
