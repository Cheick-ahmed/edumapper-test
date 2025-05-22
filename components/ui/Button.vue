<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "base" | "dark";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
  class: "",
});

const isHovered = ref(false);
const isTapped = ref(false);

const currentAnimation = computed(() => {
  if (props.disabled) return "";
  if (isTapped.value) return "button-tap";
  if (isHovered.value) return "button-hover";
  return "";
});

const baseStyles =
  "font-medium rounded-full transition-colors focus:outline-none";

const variantStyles = {
  primary:
    "bg-black text-white hover:bg-gray-800 focus:ring-gray-500 disabled:bg-gray-300",
  secondary:
    "bg-transparent text-[#1B1B1B]  border border-[#646A81] disabled:bg-gray-50",
  outline:
    "border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-600 disabled:border-gray-200 disabled:text-gray-300",
  ghost: "bg-[#f7f3f0] text-black  disabled:bg-gray-100 disabled:text-gray-400",

  base: "bg-white text-black hover:bg-gray-100",
  dark: `bg-black hover:bg-black/90 text-white ${
    props.disabled ? "opacity-10" : ""
  }`,
};

const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-6 py-4",
  lg: "px-8 py-3 text-lg",
};

const buttonClasses = computed(() => {
  const classes = [
    baseStyles,
    variantStyles[props.variant],
    sizeStyles[props.size],
    props.class,
  ];

  if (props.disabled) {
    classes.push("cursor-not-allowed opacity-60");
  } else {
    classes.push("cursor-pointer");
  }

  return classes.join(" ");
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <button
    :class="buttonClasses"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
    @mouseenter="!disabled && (isHovered = true)"
    @mouseleave="isHovered = false"
    @mousedown="!disabled && (isTapped = true)"
    @mouseup="isTapped = false"
  >
    <div
      v-motion="currentAnimation"
      class="flex items-center justify-center gap-2 w-full h-full"
    >
      <span v-if="$slots.icon">
        <slot name="icon" />
      </span>

      <slot />
    </div>
  </button>
</template>
