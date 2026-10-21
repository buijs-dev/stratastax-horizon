<template>
  <section class="hero">
    <div class="hero-mesh" aria-hidden="true"></div>

    <div class="hero-content">
      <p class="hero-badge">
        <span class="badge-status">Coming Soon</span> · Open-source · Free
      </p>

      <h1 class="hero-title">
        Board game night,<br />
        <span class="text-gradient">properly tracked.</span>
      </h1>

      <p class="hero-description">
        Stratastax creates a living network of players, matches, and games —
        so the stats you care about are always one tap away.
      </p>

      <div class="hero-actions">
        <a v-if="appLive" :href="appUrl" class="btn btn-primary">
          Open the app
        </a>
        <span v-else class="btn btn-primary btn-soon" aria-disabled="true">
          App coming soon
        </span>
        <a :href="docsUrl" class="btn btn-outline">
          Documentation
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  appUrl: { type: String, required: true },
  appLive: { type: Boolean, default: false },
  docsUrl: { type: String, required: true },
});
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 6rem 1rem;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  max-width: 48rem;
}

.hero-badge {
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
}

.badge-status {
  background: var(--gradient-brand);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 4px;
  font-weight: 800;
}

.hero-title {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: var(--color-text);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.hero-description {
  margin: 1.5rem auto 0;
  max-width: 36rem;
  font-size: 1.125rem;
  color: var(--color-muted);
}

.hero-actions {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
  transition: all 0.2s;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--gradient-brand);
  color: white;
  box-shadow: 0 4px 14px 0 color-mix(in srgb, var(--color-primary) 39%, transparent);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px color-mix(in srgb, var(--color-primary) 45%, transparent);
  filter: brightness(1.1);
}

.btn-soon {
  cursor: default;
  opacity: 0.75;
}

.btn-soon:hover {
  transform: none;
  filter: none;
}

.btn-outline {
  border: 2px solid var(--color-primary);
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-primary) 5%, transparent);
}

.btn-outline:hover {
  background: color-mix(in srgb, var(--color-primary) 15%, transparent);
  border-color: var(--color-accent);
  color: var(--color-text);
}

.text-gradient {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
