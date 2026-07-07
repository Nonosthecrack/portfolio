<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data.js'

const active = ref('')
const menuOpen = ref(false)

let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = '#' + entry.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  navLinks.forEach(({ href }) => {
    const el = document.querySelector(href)
    if (el) observer.observe(el)
  })
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand">noa@caen:~$</a>
      <button
        class="burger"
        :aria-expanded="menuOpen"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? '[x]' : '[≡]' }}
      </button>
      <nav :class="{ open: menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :class="{ active: active === link.href }"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-soft);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
}

.brand {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.95rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

nav a:hover,
nav a.active {
  color: var(--accent);
}

.burger {
  display: none;
  background: none;
  border: none;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
}

@media (max-width: 720px) {
  .burger {
    display: block;
  }

  nav {
    display: none;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border-soft);
    padding: 0.5rem 1.5rem 1rem;
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 0.6rem 0;
  }
}
</style>
