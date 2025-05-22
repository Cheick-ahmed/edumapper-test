<script setup lang="ts">
import MapPin from "~/components/icons/MapPin.vue";
import Building from "~/components/icons/Building.vue";
import Card from "~/components/ui/Card.vue";
import Button from "~/components/ui/Button.vue";

interface Props {
  name: string;
  location: string;
  type: string;
}

defineProps<Props>();

const emit = defineEmits<{
  edit: [];
}>();

const handleEdit = () => {
  emit("edit");
};
</script>

<template>
  <Card gradient>
    <div class="sm:flex sm:items-start sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold mb-2">{{ name }}</h2>

        <div class="flex items-center gap-2 mb-6 sm:mb-0">
          <div class="flex items-center gap-1">
            <MapPin class="w-4 h-4" />
            <span>{{ location }}</span>
          </div>

          <div class="flex items-center gap-1">
            <Building class="w-4 h-4" />
            <span>{{ type }}</span>
          </div>
        </div>
      </div>
      <Button variant="base" size="sm" @click="handleEdit"> Modifier </Button>
    </div>
  </Card>
</template>
