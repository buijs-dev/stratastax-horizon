<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="stats-bar">
    <ul class="stats-list" role="list">
      <li v-for="stat in stats" :key="stat.label" class="stats-item">
        <div class="stat-value text-gradient">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.stats-bar {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface);
  padding: 1.5rem 1rem;
  backdrop-filter: blur(4px);
}

.stats-list {
  margin: 0 auto;
  display: flex;
  max-width: 42rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 4rem;
  list-style: none;
  padding: 0;
}

.stats-item {
  text-align: center;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
}

.stat-label {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted);
}

.text-gradient {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
