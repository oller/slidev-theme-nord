<template>
  <div class="nord-badge" :class="variant">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}>()
</script>

<style scoped>
.nord-badge {
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875em;
  white-space: nowrap;
  background-color: var(--dark1);
  color: var(--frost1);
}

.nord-badge.default {
  background-color: var(--dark3);
  color: var(--light0);
}

.nord-badge.primary {
  background-color: var(--frost1);
  color: var(--dark0);
}

.nord-badge.success {
  background-color: var(--green);
  color: var(--dark0);
}

.nord-badge.warning {
  background-color: var(--orange);
  color: var(--dark0);
}

.nord-badge.danger {
  background-color: var(--red);
  color: var(--light2);
}
</style>
