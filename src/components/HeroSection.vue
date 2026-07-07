<script setup>
import { profile } from '../data.js'
import TerminalWindow from './TerminalWindow.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-grid">
      <div class="hero-text">
        <span class="badge">
          <span class="dot" aria-hidden="true"></span>
          {{ profile.availability }}
        </span>
        <h1>{{ profile.name }}</h1>
        <p class="tagline">{{ profile.tagline }}</p>
        <p class="intro">{{ profile.intro }}</p>
        <div class="cta">
          <a class="btn-primary" href="#contact">Me contacter</a>
          <a class="btn-ghost" :href="profile.github" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
      <TerminalWindow />
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 4.5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  margin-bottom: 1.75rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 6px var(--green);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  50% { opacity: 0.4; }
}

h1 {
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.tagline {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
}

.intro {
  color: var(--text-muted);
  max-width: 42ch;
  margin-bottom: 2rem;
}

.cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-ghost {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  transition: transform 0.15s, background 0.2s, border-color 0.2s;
}

.btn-primary {
  background: var(--accent);
  color: #221e1a;
}

.btn-primary:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.btn-ghost {
  border: 1px solid var(--border);
  color: var(--text);
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 860px) {
  .hero {
    padding: 3rem 0 2.5rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
