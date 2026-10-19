<template>
  <div class="profile-card">
    <div class="card-header">
      <div class="avatar">
        <span class="avatar-initials">{{ initials }}</span>
        <div class="avatar-glow" />
      </div>
      <div class="header-info">
        <h3 class="player-name">{{ name }}</h3>
        <span class="playing-since">Playing since {{ playingSince }}</span>
      </div>
      <div class="stratastax-badge">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="10" width="3" height="4" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="6.5" y="6" width="3" height="8" rx="1" fill="currentColor" opacity="0.75"/>
          <rect x="11" y="2" width="3" height="12" rx="1" fill="currentColor"/>
        </svg>
        Stratastax
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-block stat-primary">
        <span class="stat-value">{{ lifetimeMatches.toLocaleString() }}</span>
        <span class="stat-label">Lifetime Matches</span>
      </div>
      <div class="stat-block stat-accent">
        <span class="stat-value">{{ winRate }}%</span>
        <span class="stat-label">Win Rate</span>
        <div class="win-bar">
          <div class="win-bar-fill" :style="{ width: winRate + '%' }" />
        </div>
      </div>
    </div>

    <div class="detail-rows">
      <div class="detail-row">
        <span class="detail-icon">🎲</span>
        <span class="detail-label">Favourite Game</span>
        <span class="detail-value">{{ favouriteGame }}</span>
      </div>
      <div class="detail-row highlight">
        <span class="detail-icon">🏆</span>
        <span class="detail-label">Best Faction</span>
        <span class="detail-value">
          {{ bestFaction.name }}
          <span class="faction-wr">{{ bestFaction.winRate }}% WR</span>
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-icon">⚔️</span>
        <span class="detail-label">Top Rival</span>
        <span class="detail-value">
          {{ topRival.name }}
          <span class="rival-count">{{ topRival.matches }} matches</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Peter Jansen'
  },
  playingSince: {
    type: [String, Number],
    default: 2023
  },
  lifetimeMatches: {
    type: Number,
    default: 847
  },
  winRate: {
    type: Number,
    default: 58.3
  },
  favouriteGame: {
    type: String,
    default: 'Terraforming Mars'
  },
  bestFaction: {
    type: Object,
    default: () => ({ name: 'Eyrie Dynasties', winRate: 67 })
  },
  topRival: {
    type: Object,
    default: () => ({ name: 'Sarah', matches: 42 })
  }
})

const initials = computed(() =>
  props.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
)
</script>

<style scoped>
.profile-card {
  font-family: var(--font-body);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 24px;
  max-width: 400px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.06),
    0 4px 16px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-brand-h);
}

/* Header */
.card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.avatar {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.avatar-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--gradient-brand);
  color: var(--color-on-primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
}

.avatar-glow {
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  background: var(--gradient-brand);
  opacity: 0.2;
  filter: blur(6px);
  z-index: 0;
}

.header-info {
  flex: 1;
  min-width: 0;
}

.player-name {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 2px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Override Starlight heading styles */
  border: none;
  padding: 0;
  line-height: 1.3;
}

.playing-since {
  font-size: 12px;
  color: var(--color-muted);
  font-weight: 500;
}

.stratastax-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  background: var(--color-surface-high);
  color: var(--color-primary);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
  letter-spacing: 0.3px;
  flex-shrink: 0;
}

/* Stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 16px;
}

.stat-block {
  padding: 14px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.stat-primary {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
}

.stat-accent {
  background: var(--color-surface-high);
  border: 1px solid var(--color-border);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
  color: var(--color-text);
}

.stat-accent .stat-value {
  color: var(--color-primary);
}

.stat-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.win-bar {
  margin-top: 6px;
  height: 3px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
}

.win-bar-fill {
  height: 100%;
  background: var(--gradient-brand-h);
  border-radius: 2px;
  transition: width 0.6s ease;
}

/* Detail rows */
.detail-rows {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 8px;
  transition: background 0.15s;
}

.detail-row:hover {
  background: var(--color-surface-high);
}

.detail-row.highlight {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
}

.detail-row.highlight:hover {
  background: var(--color-surface-high);
}

.detail-icon {
  font-size: 14px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.detail-label {
  font-size: 12px;
  color: var(--color-muted);
  font-weight: 500;
  width: 100px;
  flex-shrink: 0;
}

.detail-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  justify-content: flex-end;
  text-align: right;
}

.faction-wr {
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 10px;
  letter-spacing: 0.3px;
}

.rival-count {
  color: var(--color-muted);
  font-weight: 400;
  font-size: 12px;
}
</style>