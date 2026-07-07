<script setup>
import { experiences } from '../data.js'
</script>

<template>
  <section id="experience">
    <div class="container">
      <h2 class="section-title">expérience</h2>
      <article v-for="exp in experiences" :key="exp.company" class="card reveal">
        <header>
          <h3>
            {{ exp.role }} — <span class="company">{{ exp.company }}</span>
          </h3>
          <span class="period">{{ exp.period }}</span>
        </header>
        <ul>
          <li v-for="point in exp.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-soft);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.25rem;
  transition: border-color 0.2s, background 0.2s;
}

.card:hover {
  border-color: var(--border);
  background: var(--bg-card-hover);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1.1rem;
  font-weight: 700;
}

.company {
  color: var(--accent);
}

.period {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
  white-space: nowrap;
}

ul {
  list-style: none;
}

li {
  color: var(--text-muted);
  font-size: 0.92rem;
  padding-left: 1.1rem;
  position: relative;
  margin-bottom: 0.3rem;
}

li::before {
  content: '*';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-family: var(--font-mono);
}
</style>
