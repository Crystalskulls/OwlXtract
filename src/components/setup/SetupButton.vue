<template>
  <v-btn variant="outlined" append-icon="mdi-home" @click="setupProvider"> Setup Provider </v-btn>
</template>

<script setup lang="ts">
const emit = defineEmits(['setupProvider'])
function setupProvider(): void {
  emit('setupProvider')
}
</script>
