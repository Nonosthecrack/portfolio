<script setup>
import { skills } from '../data.js'
</script>

<template>
  <section id="competences">
    <h2 class="section-title">compétences</h2>
    <div v-for="group in skills" :key="group.category" class="group reveal">
      <p class="category">{{ group.category }}</p>
      <div class="tags">
        <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group {
  margin-bottom: 1.4rem;
}

.category {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-dim);
  margin-bottom: 0.6rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  color: var(--text);
  transition: border-color 0.2s, color 0.2s;
}

.tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
