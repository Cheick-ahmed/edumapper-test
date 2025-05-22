<script setup lang="ts">
type ChanceLevel = "très élevées" | "élevées" | "moyennes" | "faibles";

interface Props {
  level: ChanceLevel;
}

const props = defineProps<Props>();

// Déterminer la couleur et l'emoji en fonction du niveau de chance
const getChanceLevelInfo = (level: ChanceLevel) => {
  switch (level) {
    case "très élevées":
      return {
        emoji: "⚡",
        bgColor: "bg-[#2BD398]/10",
        textColor: "text-[#2BD398]",
      };
    case "élevées":
      return {
        emoji: "👍",
        bgColor: "bg-[#3890FA]/10",
        textColor: "text-[#3890FA]",
      };
    case "moyennes":
      return {
        emoji: "🫤",
        bgColor: "bg-[#D95AFF]/10",
        textColor: "text-[#D95AFF]",
      };
    case "faibles":
      return {
        emoji: "🫣",
        bgColor: "bg-[#FAAD14]/10",
        textColor: "text-[#FAAD14]",
      };
    default:
      return {
        emoji: "",
        bgColor: "bg-[#3890FA]/10",
        textColor: "text-[#3890FA]",
      };
  }
};

const levelInfo = computed(() => getChanceLevelInfo(props.level));

// Formater le texte avec première lettre en majuscule
const formattedLevel = computed(() => {
  return props.level.charAt(0).toUpperCase() + props.level.slice(1);
});
</script>

<template>
  <div
    class="inline-flex items-center rounded-full px-2 py-1 text-sm font-semibold"
    :class="[levelInfo.bgColor, levelInfo.textColor]"
  >
    {{ formattedLevel }} {{ levelInfo.emoji }}
  </div>
</template>
