<script setup>
import { profile, extras } from '../data.js'
</script>

<template>
  <section id="contact">
    <div class="container">
      <p class="prompt-line reveal">$ contact --now</p>
      <h2 class="reveal">Discutons d'une alternance.</h2>
      <a class="email reveal" :href="`mailto:${profile.email}`">{{ profile.email }}</a>

      <div class="meta reveal">
        <div>
          <p class="label">coordonnees/</p>
          <p>
            {{ profile.phone }} ·
            <a :href="profile.github" target="_blank" rel="noopener">{{ profile.githubLabel }}</a>
            · {{ profile.location }}
          </p>
        </div>
        <div>
          <p class="label">langues/</p>
          <p>{{ extras.langues }}</p>
        </div>
        <div>
          <p class="label">hobbies/</p>
          <p>{{ extras.hobbies }}</p>
        </div>
      </div>

      <footer>
        <p>© {{ new Date().getFullYear() }} Noa Férault — fait avec Vue.js</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg-light);
  border-top: 1px solid var(--border-soft);
  padding: 4.5rem 0 2rem;
  margin-top: 2rem;
}

.prompt-line {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.9rem, 4.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.email {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 6px;
  margin-bottom: 3rem;
  transition: color 0.2s;
}

.email:hover {
  color: var(--text);
}

.meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-soft);
}

.label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.meta p {
  color: var(--text-muted);
  font-size: 0.88rem;
}

.meta a {
  color: var(--text-muted);
}

.meta a:hover {
  color: var(--accent);
}

footer {
  margin-top: 3.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-soft);
}

footer p {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-dim);
}

@media (max-width: 720px) {
  .meta {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
