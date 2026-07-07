// Smoke test : vérifie que l'app se monte sans erreur et que
// chaque section et son contenu clé sont présents.
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

// IntersectionObserver n'existe pas dans jsdom
globalThis.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.matchMedia = vi.fn(() => ({ matches: true }))

describe('Portfolio', () => {
  const wrapper = mount(App, { attachTo: document.body })

  it('se monte sans erreur', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('affiche le hero', () => {
    expect(wrapper.find('h1').text()).toBe('Noa Férault')
    expect(wrapper.text()).toContain('alternance rentrée 2026')
  })

  it('contient les 5 sections ancrées', () => {
    for (const id of ['experience', 'realisations', 'formation', 'competences', 'contact']) {
      expect(wrapper.find(`#${id}`).exists()).toBe(true)
    }
  })

  it('affiche les expériences', () => {
    expect(wrapper.text()).toContain('Mecachrome')
    expect(wrapper.text()).toContain('HME BRASS France')
    expect(wrapper.text()).toContain('Ville de Rugles')
  })

  it('affiche les 4 réalisations', () => {
    expect(wrapper.text()).toContain('Migration Windows 10 → 11')
    expect(wrapper.text()).toContain('Segmentation réseau en VLAN')
  })

  it('affiche le contact', () => {
    const mail = wrapper.find('a[href="mailto:ferault.noa@gmail.com"]')
    expect(mail.exists()).toBe(true)
  })
})
