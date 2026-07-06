<template>
  <div class="journey" role="list">
    <template v-for="(step, index) in steps" :key="index">
      <div
          class="step-card"
          :class="[
            { 'is-last': index === steps.length - 1 },
            index === steps.length - 1 && step.status ? `is-${step.status}` : ''
          ]"
          role="listitem"
      >
        <div class="step-num" aria-hidden="true">{{ index + 1 }}</div>
        <div class="step-body">
          <p class="step-label">{{ step.label }}</p>
          <p v-if="step.actor" class="step-actor">{{ step.actor }}</p>
          <p v-if="step.note" class="step-note">{{ step.note }}</p>
        </div>
      </div>
      <div v-if="index < steps.length - 1" class="arrow-gap" aria-hidden="true">
        <div class="arrow-line">
          <div class="arrow-shaft" />
          <div class="arrow-head" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Step {
  label: string
  actor?: string
  note?: string,
  status?: 'normal' | 'success' | 'danger'
}

defineProps<{
  steps: Step[]
}>()
</script>

<style scoped>
.journey {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 1rem 0;
  max-width: 460px;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: var(--sl-color-bg);
  border: 1px solid var(--sl-color-hairline);
  border-radius: 12px;
}

.step-card.is-last {
  border-color: var(--sl-color-accent);
  background: var(--sl-color-accent-low);
}

.step-card.is-last.is-success {
  border-color: var(--sl-color-green);
  background: var(--sl-color-green-low, color-mix(in srgb, var(--sl-color-green), transparent 85%));
}

.step-card.is-last.is-danger {
  border-color: var(--sl-color-red);
  background: var(--sl-color-red-low, color-mix(in srgb, var(--sl-color-red), transparent 85%));
}

.step-num {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--sl-color-bg-sidebar);
  border: 1px solid var(--sl-color-hairline-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--sl-color-text-accent);
}

.is-last .step-num {
  background: var(--sl-color-accent);
  border-color: var(--sl-color-accent);
  color: var(--sl-color-white);
}

.is-last.is-success .step-num {
  background: var(--sl-color-green);
  border-color: var(--sl-color-green);
}

.is-last.is-danger .step-num {
  background: var(--sl-color-red);
  border-color: var(--sl-color-red);
}

.step-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.step-label {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--sl-color-text);
  margin: 0;
  line-height: 1.35;
}

.is-last .step-label {
  color: var(--sl-color-text-accent);
}

.is-last.is-success .step-label {
  color: var(--sl-color-green);
}

.is-last.is-danger .step-label {
  color: var(--sl-color-red);
}

.step-actor {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--sl-color-text-accent);
  margin: 0;
}

.step-note {
  font-size: 0.8125rem;
  color: var(--sl-color-gray-3);
  margin: 0;
  line-height: 1.5;
}

.arrow-gap {
  display: flex;
  align-items: center;
  padding-left: 29px;
  height: 24px;
}

.arrow-line {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow-shaft {
  width: 2px;
  height: 12px;
  background: var(--sl-color-hairline);
}

.arrow-head {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid var(--sl-color-hairline);
}
</style>