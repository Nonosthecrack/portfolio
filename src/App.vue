<script setup>
import { onMounted } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <div class="container two-col">
      <EducationSection />
      <SkillsSection />
    </div>
  </main>
  <ContactSection />
</template>

<style scoped>
.two-col {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 860px) {
  .two-col {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
