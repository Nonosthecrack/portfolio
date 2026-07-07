<script setup>
import { education } from '../data.js'
</script>

<template>
  <section id="formation">
    <h2 class="section-title">formation</h2>
    <ol>
      <li v-for="step in education" :key="step.title" class="reveal">
        <p class="period">
          {{ step.period }}
          <span v-if="step.badge" class="badge">· {{ step.badge }}</span>
        </p>
        <h3>{{ step.title }}</h3>
        <p v-if="step.subtitle" class="subtitle">{{ step.subtitle }}</p>
        <p class="school">{{ step.school }}</p>
        <div v-if="step.tags" class="tags">
          <span v-for="tag in step.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
ol {
  list-style: none;
}

li {
  padding: 1.4rem 0;
  border-top: 1px solid var(--border-soft);
}

li:first-child {
  border-top: none;
  padding-top: 0.25rem;
}

.period {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
  margin-bottom: 0.35rem;
}

.badge {
  color: var(--green);
}

h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-style: italic;
  margin-bottom: 0.15rem;
}

.school {
  color: var(--text-muted);
  font-size: 0.88rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.7rem;
}
</style>
