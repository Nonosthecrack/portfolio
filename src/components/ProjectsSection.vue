<script setup>
import { projects, profile } from '../data.js'
</script>

<template>
  <section id="realisations">
    <div class="container">
      <h2 class="section-title">réalisations</h2>
      <div class="grid">
        <article v-for="project in projects" :key="project.title" class="card reveal">
          <h3>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener">
              {{ project.title }} <span class="ext">↗</span>
            </a>
            <template v-else>{{ project.title }}</template>
          </h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
      <a class="more reveal" :href="profile.github" target="_blank" rel="noopener">
        + mes projets sur GitHub — {{ profile.githubLabel }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border-soft);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--border);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
}

h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

h3 a {
  color: inherit;
  text-decoration: none;
}

h3 a:hover {
  color: var(--accent);
}

.ext {
  color: var(--accent);
  font-size: 0.85em;
}

p {
  color: var(--text-muted);
  font-size: 0.9rem;
  flex: 1;
  margin-bottom: 1.1rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.more {
  display: block;
  margin-top: 1.25rem;
  padding: 1rem 1.5rem;
  border: 1px dashed var(--border);
  border-radius: 12px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-dim);
  text-decoration: none;
  text-align: center;
  transition: color 0.2s, border-color 0.2s;
}

.more:hover {
  color: var(--accent);
  border-color: var(--accent);
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
