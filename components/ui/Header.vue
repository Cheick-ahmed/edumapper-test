<script setup lang="ts">
import { getProfileCompletion } from "~/composables/UseSections";

// Créer une ref réactive pour la progression
const completion = ref(0);
let updateInterval: NodeJS.Timeout | null = null;

// Récupérer la route courante
const route = useRoute();

// Calculer la valeur de la barre de progression
const progressValue = computed(() => {
  // Si on est sur la page de simulation, retourner 100%
  if (route.path === "/simulation") {
    return 100;
  }
  // Sinon retourner la valeur calculée
  return completion.value;
});

onMounted(() => {
  completion.value = getProfileCompletion();

  if (import.meta.client) {
    updateInterval = setInterval(() => {
      // Ne mettre à jour que si nous ne sommes pas sur la page de simulation
      if (route.path !== "/simulation") {
        completion.value = getProfileCompletion();
      }
    }, 1000);
  }
});

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
});
</script>

<template>
  <header class="">
    <div class="border-b relative">
      <div
        class="absolute -bottom-1 left-0 h-1 bg-[#1B1B1B] transition-all duration-500"
        :style="{ width: `${progressValue}%` }"
      />

      <div class="p-4 px-4 sm:px-6 lg:px-10 flex justify-between items-center">
        <NuxtLink to="/">
          <Logo alt="Logo" class="w-[146px] h-12" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
