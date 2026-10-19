<template>
  <div class="impact">
    <div
        v-for="group in groups"
        :key="group.action"
        class="impact__group"
    >
      <p class="impact__action">{{ group.action }}</p>
      <ul class="impact__list">
        <li v-for="item in group.entities" :key="item" class="impact__item">
          <span class="impact__check" aria-hidden="true">✓</span>
          <code class="impact__entity">{{ item }}</code>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ImpactGroup {
  action: 'Creates' | 'Updates' | 'Deletes' | 'Reads'
  entities: string[]
}

defineProps<{
  groups: ImpactGroup[]
}>()
</script>

<style scoped>
.impact {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2rem;
  margin: 1rem 0;
}

.impact__group {
  min-width: 160px;
}

.impact__action {
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--sl-color-text-accent);
}

.impact__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.impact__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.impact__check {
  color: var(--sl-color-green, #3fb950);
  font-size: 0.8rem;
  flex-shrink: 0;
}

.impact__entity {
  font-size: 0.8125rem;
  color: var(--sl-color-text);
}
</style>