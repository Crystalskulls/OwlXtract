<template>
  <SetupButton @setup-provider="setupProvider"></SetupButton>
</template>

<script setup lang="ts">
import SetupButton from '@/components/setup/SetupButton.vue'

function setupProvider(): void {
    alert("setupProvider");
}
</script>
