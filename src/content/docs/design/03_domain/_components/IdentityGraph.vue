<template>
  <div class="identity-graph">

    <div class="node canonical">
      <h3>Canonical Player</h3>
      <p>Persistent identity</p>
    </div>

    <div class="arrow">
      claims
      ↓
    </div>

    <div class="node edge">
      <h3>Claim Edge</h3>
      <p>Approved relationship</p>
    </div>

    <div class="arrow">
      links
      ↓
    </div>

    <div class="node ghost">
      <h3>Ghost Player</h3>
      <p>Observed player</p>
    </div>

    <div class="arrow">
      referenced by
      ↑
    </div>

    <div class="node match">
      <h3>Match</h3>
      <p>Historical record</p>
    </div>

  </div>
</template>

<style scoped>

.identity-graph{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  margin:2rem 0;
}

.node{
  width:260px;
  border:1px solid var(--sl-color-gray-4);
  border-radius:12px;
  padding:1rem;
  text-align:center;
  background:var(--sl-color-bg);
}

.canonical{
  border-color:var(--stx-success, #0F766E);
}

.edge{
  border-color:var(--color-primary);
}

.ghost{
  border-color:var(--stx-accent, #F97360);
}

.match{
  border-color:var(--color-muted);
}

.arrow{
  opacity:.7;
  font-size:.9rem;
}

</style>