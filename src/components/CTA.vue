<template>
  <section class="cta-section">
    <div class="cta-outer">
      <div class="cta-inner">
        <h2 class="cta-title">
          Want to be the first to know when we launch?
        </h2>
        <p class="cta-description">
          Stratastax is currently in heavy development. Explore our design docs to see where we're headed, reach out with feedback, or suggest new features.
        </p>
        <div class="cta-actions">
          <a href="mailto:buijsdev@gmail.com" class="btn btn-primary">
            Get in touch
          </a>
          <a href="https://stratastax.featurebase.app/" class="btn btn-outline">
            Feedback & Features ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 0 1rem 6rem;
}

.cta-outer {
  margin: 0 auto;
  max-width: 42rem;
  overflow: hidden;
  border-radius: var(--radius-card);
  background: var(--gradient-brand);
  padding: 1px;
}

.cta-inner {
  border-radius: calc(var(--radius-card) - 1px);
  background-color: var(--color-bg);
  padding: 3.5rem 2rem;
  text-align: center;
}

.cta-title {
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--color-text);
}

.cta-description {
  margin: 1rem auto 0;
  max-width: 28rem;
  font-size: 1rem;
  color: var(--color-muted);
}

.cta-actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
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

.btn-outline {
  border: 2px solid var(--color-primary);
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-primary) 5%, transparent);
}

.btn-outline:hover {
  background: color-mix(in srgb, var(--color-primary) 15%, transparent);
  border-color: var(--color-accent);
  color: white;
}
</style>
