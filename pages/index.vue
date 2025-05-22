<script setup lang="ts">
import { useSections } from "~/composables/UseSections";
import SchoolCard from "~/components/sections/SchoolCard.vue";
import ExpandableCard from "~/components/sections/ExpandableCard.vue";
import ClassForm from "~/components/sections/ClassForm.vue";
import SpecialtiesForm from "~/components/sections/SpecialtiesForm.vue";

interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  isRequired: boolean;
  locked: boolean;
  data: any;
  validation: {
    isComplete: (data: any) => boolean;
    getMessage: (data: any) => string;
  };
}

const sections = ref<Section[]>([]);

const studentProfile = ref({
  school: {
    name: "Lycée de la Plage",
    location: "Bordeaux",
    type: "Lycée",
  },
});

const handleSectionChange = (
  sectionId: string,
  newData: Record<string, unknown>
) => {
  console.log(`Section ${sectionId} mise à jour:`, newData);

  sections.value = useSections().allSections as Section[];
};

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      sections.value = useSections().allSections as Section[];
    });
  }
});
</script>

<template>
  <div class="min-h-screen">
    <div class="space-y-4">
      <SchoolCard
        :name="studentProfile.school.name"
        :location="studentProfile.school.location"
        :type="studentProfile.school.type"
      />

      <ClientOnly>
        <ExpandableCard
          v-for="section in sections"
          :key="section.id + Math.random()"
          :title="section.title"
          :model-value="section.data"
          :expanded-title="section.subtitle"
          :validator="(data) => section.validation.isComplete(data as any)"
          :formatter="(data) => section.validation.getMessage(data as any)"
          :default-data="section.data"
          :locked="section.locked"
          @change="handleSectionChange(section.id, $event)"
        >
          <template #default="{ data, updateData }">
            <ClassForm
              v-if="section.id === 'class'"
              :data="data"
              @update="(newData) => updateData(newData)"
            />
            <SpecialtiesForm
              v-else-if="section.id === 'specialties'"
              :data="data"
              @update="(newData) => updateData(newData)"
            />
          </template>
        </ExpandableCard>
      </ClientOnly>

      <div class="flex justify-center mt-8 pt-4">
        <NuxtLink
          to="/simulation"
          class="bg-black text-white px-8 py-3 rounded-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Voir mes résultats &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
