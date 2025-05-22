<script setup lang="ts">
import { getProfileCompletion } from "~/composables/UseSections";
import ProgramCard from "~/components/simulation/ProgramCard.vue";

type ChanceLevel = "très élevées" | "élevées" | "moyennes" | "faibles";

const completion = ref(getProfileCompletion());

onMounted(() => {
  if (import.meta.client) {
    completion.value = getProfileCompletion();
  }
});

const programs = ref([
  {
    id: 1,
    school: "SKEMA",
    location: "Lille",
    program: "BBA - Global Management",
    chanceLevel: "élevées" as ChanceLevel,
    progressValue: 80,
    confidenceIndex: 3,
    hasAdditionalInfo: true,
    additionalInfo:
      "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
  },
  {
    id: 2,
    school: "IPAG Business School",
    location: "Grenoble",
    program: "International BBA - Parcours Business Management",
    chanceLevel: "faibles" as ChanceLevel,
    progressValue: 40,
    confidenceIndex: 2,
    hasAdditionalInfo: true,
    additionalInfo:
      "Programme orienté commerce et économie. Votre profil académique convient mais des activités extra-scolaires complémentaires seraient un plus.",
  },
  {
    id: 3,
    school: "Sciences Po",
    location: "Paris",
    program: "Science Politique",
    chanceLevel: "très élevées" as ChanceLevel,
    progressValue: 95,
    confidenceIndex: 4,
    hasAdditionalInfo: true,
    additionalInfo:
      "Vos spécialités et votre profil académique correspondent parfaitement aux attentes de cette formation.",
  },
  {
    id: 4,
    school: "ICN Business School",
    location: "Puteaux",
    program: "IBBA - Manager international",
    chanceLevel: "moyennes" as ChanceLevel,
    progressValue: 60,
    confidenceIndex: 3,
    hasAdditionalInfo: true,
    additionalInfo:
      "Cette formation demande une expertise en mathématiques et statistiques plus approfondie que votre profil actuel.",
  },
]);

const removeProgram = (id: number) => {
  programs.value = programs.value.filter((prog) => prog.id !== id);
};
</script>

<template>
  <div class="mx-auto sm:px-2 lg:px-0 lg:max-w-[720px]">
    <div>
      <h2 class="text-[32px] font-semibold leading-[130%] text-[#1B1B1B]">
        Tes chances d’admission aux formations
      </h2>
      <p
        class="mt-2 text-sm leading-[140%] font-light text-pretty text-[#646A81]"
      >
        Cette estimation provient de calculs rigoureux fondés sur les
        caractéristiques de ton profil et les statistiques passées de cette
        formation. Elle est fournie à titre indicatif et ne garantit en aucun
        cas la décision d’admission de l’établissement.
      </p>

      <Button variant="secondary" class="mt-6">
        <Pencil class="w-4 h-4" />
        Modifier mon profil
      </Button>
    </div>

    <div class="mt-8">
      <div class="space-y-5">
        <ProgramCard
          v-for="program in programs"
          :key="program.id"
          :school="program.school"
          :location="program.location"
          :program="program.program"
          :chance-level="program.chanceLevel"
          :progress-value="program.progressValue"
          :confidence-index="program.confidenceIndex"
          :has-additional-info="program.hasAdditionalInfo"
          :additional-info="program.additionalInfo"
          @remove="removeProgram(program.id)"
        />
      </div>

      <div class="mt-8 max-w-[282px] mx-auto">
        <Button variant="dark" class="w-full">
          <Plus class="w-2 h-2" />
          Ajouter une formation
        </Button>
      </div>
    </div>
  </div>
</template>
