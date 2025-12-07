<script setup lang="ts">
// No explicit props needed here; Vue handles attribute fallthrough
// (e.g. @click, disabled, class) automatically to the root <button>.
</script>

<template>
  <button>
    <slot />
  </button>
</template>
