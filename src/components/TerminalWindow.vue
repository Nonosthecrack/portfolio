<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { terminalLines } from '../data.js'

// Animation "machine à écrire" : les lignes apparaissent une à une,
// les commandes sont tapées caractère par caractère.
const displayed = ref([])
const typing = ref('')
const done = ref(false)

let timers = []
const wait = (ms) => new Promise((r) => timers.push(setTimeout(r, ms)))

async function play() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    displayed.value = terminalLines
    done.value = true
    return
  }
  await wait(500)
  for (const line of terminalLines) {
    if (line.type === 'cmd') {
      typing.value = ''
      for (const char of line.text) {
        typing.value += char
        await wait(45)
      }
      await wait(200)
      typing.value = null
      displayed.value = [...displayed.value, line]
    } else {
      await wait(250)
      displayed.value = [...displayed.value, line]
    }
  }
  done.value = true
}

onMounted(play)
onUnmounted(() => timers.forEach(clearTimeout))
</script>

<template>
  <div class="terminal" aria-label="Terminal de présentation">
    <div class="titlebar">
      <span class="light red"></span>
      <span class="light yellow"></span>
      <span class="light green"></span>
    </div>
    <div class="body">
      <template v-for="(line, i) in displayed" :key="i">
        <p v-if="line.type === 'cmd'" class="cmd"><span class="prompt">$</span> {{ line.text }}</p>
        <p v-else class="out">{{ line.text }}</p>
      </template>
      <p v-if="typing !== null && !done" class="cmd">
        <span class="prompt">$</span> {{ typing }}<span class="cursor"></span>
      </p>
      <p v-if="done" class="cmd"><span class="prompt">$</span> <span class="cursor"></span></p>
    </div>
  </div>
</template>

<style scoped>
.terminal {
  background: #1b1815;
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.titlebar {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-soft);
}

.light {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.red { background: #e0705f; }
.yellow { background: #e8a75a; }
.green { background: #8fb573; }

.body {
  padding: 1.25rem 1.4rem 1.5rem;
  min-height: 200px;
}

.body p {
  margin: 0 0 0.35rem;
  line-height: 1.7;
}

.cmd {
  color: var(--text);
}

.cmd + .out {
  margin-top: -0.1rem;
}

.prompt {
  color: var(--accent);
  font-weight: 700;
}

.out {
  color: var(--text-muted);
  margin-bottom: 0.9rem !important;
}

.cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--accent);
  vertical-align: text-bottom;
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
