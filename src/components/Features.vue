<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="features" class="features-section">
    <div class="container">
      <header class="features-header">
        <p class="features-badge">Features</p>
        <h2 class="features-title">
          Built around connected player data.
        </h2>
        <p class="features-description">
          Instead of isolated score sheets, Stratastax creates a living network of players, sessions, and games.
        </p>
      </header>

      <ul class="features-grid" role="list">
        <li v-for="feature in features" :key="feature.title" class="feature-card group">
          <div class="feature-accent"></div>
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <h3 class="feature-name">{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 6rem 1rem;
}

.container {
  margin: 0 auto;
  max-width: 64rem;
}

.features-header {
  margin-bottom: 3.5rem;
  max-width: 32rem;
}

.features-badge {
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
}

.features-title {
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: -0.025em;
  color: var(--color-text);
}

@media (min-width: 768px) {
  .features-title {
    font-size: 2.25rem;
  }
}

.features-description {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: var(--color-muted);
}

.features-grid {
  display: grid;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.feature-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  padding: 1.5rem;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-0.25rem);
  border-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
  box-shadow: 0 10px 15px -3px color-mix(in srgb, var(--color-primary) 5%, transparent);
}

.feature-accent {
  position: absolute;
  inset: 0 0 auto 0;
  height: 1px;
  background: var(--gradient-brand-h);
  opacity: 0;
  transition: opacity 0.2s;
}

.feature-card:hover .feature-accent {
  opacity: 1;
}

.feature-icon {
  margin-bottom: 1rem;
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface-high);
  font-size: 1.25rem;
}

.feature-name {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
}

.feature-text {
  font-size: 0.875rem;
  line-height: 1.625;
  color: var(--color-muted);
}
</style>
