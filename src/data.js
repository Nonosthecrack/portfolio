// Toutes les données du site — modifie ce fichier pour mettre à jour le contenu.

export const profile = {
  name: 'Noa Férault',
  tagline: 'administration systèmes · réseaux · cybersécurité - devops',
  intro:
    "3ᵉ année de BUT Informatique, admis au mastère ERIS. Je suis à la recherhce d'une alternance pour la rentrée prochaine.",
  availability: 'disponible — alternance rentrée 2026',
  email: 'ferault.noa@gmail.com',
  phone: '06 10 82 02 99',
  github: 'https://github.com/Nonosthecrack',
  githubLabel: 'github.com/Nonosthecrack',
  location: 'Caen / Ifs · Permis B',
}

export const terminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'noa.ferault — admin sys & réseaux (junior)' },
  { type: 'cmd', text: 'cat objectif.txt' },
  { type: 'out', text: 'alternance · rentrée 2026 · mastère ERIS' },
  { type: 'cmd', text: 'ls competences/' },
  { type: 'out', text: 'systemes/ reseaux/ cyber/ devops/' },
]

export const experiences = [
  {
    role: 'Alternant systèmes & SI',
    company: 'Mecachrome',
    period: '2025 → 2026 · 11 mois',
    points: [
      'Migration du parc Windows 10 → Windows 11 · gestion GLPI & dashboards',
      'Segmentation réseau en VLAN (switchs, routeurs) · AD & GPO',
      'Virtualisation VMware / Proxmox · bonnes pratiques cybersécurité',
      'Assistance utilisateurs N1/N2',
    ],
  },
  {
    role: 'Stagiaire informatique',
    company: 'HME BRASS France',
    period: 'avr → juin 2025',
    points: [
      'Support utilisateurs & matériel, configuration de postes',
      "Développement d'une application interne (PowerShell, .NET Framework)",
    ],
  },
]

export const projects = [
  {
    title: 'Migration Windows 10 → 11',
    description:
      "Préparation, déploiement et accompagnement des utilisateurs sur l'ensemble du parc Mecachrome.",
    tags: ['Windows 11'],
  },
  {
    title: 'Segmentation réseau en VLAN',
    description:
      "Découpage du réseau d'entreprise, configuration des switchs et routeurs.",
    tags: ['VLAN', 'Switching', 'Routage'],
  },
  {
    title: "Développement d'outil interne en PowerShell",
    description:
      'Application développée pour le service informatique de HME BRASS France.',
    tags: ['PowerShell'],
  },
  {
    title: 'Durcissement cybersécurité',
    description:
      "Déploiement d'un gestionnaire de mots de passe et de politiques de sécurité.",
    tags: ['Cybersécurité', 'Vaultwarden'],
  },
  {
    title: 'Administration',
    description:
      "Administration d'un parc informatique complet et de ses utilisateurs",
    tags: ['AD / GPO', 'GLPI'],
  },
  {
    title: 'API Flashcards — API & déploiement',
    description:
      "API de révision (Node.js / Express) avec mise en production complète : tests automatisés (Vitest, Supertest), conteneurisation Docker avec healthcheck, et CI/CD GitHub Actions et déployée automatiquement sur un serveur Ubuntu auto-hébergé.",
    tags: ['Node.js / Express', 'Docker', 'CI/CD', 'Vitest'],
    link: 'https://github.com/Nonosthecrack/API-Flashcards',
  },
]

export const education = [
  {
    period: '2026 →',
    badge: 'admis',
    title: 'Mastère ERIS',
    school: 'CaenSup Saint-Ursule — en alternance',
  },
  {
    period: '2023 → 2026',
    title: 'BUT Informatique — parcours A',
    subtitle: "Parcours réalisation d'applications : conception, développement, validation",
    school: 'IUT Grand Ouest Normandie, Caen / Ifs',
    tags: ['C', 'Java', 'Modèle de base de données', 'Réseaux', 'DevOps'],
  },
  {
    period: '2020 → 2023',
    title: 'Bac STI2D',
    school: "Lycée Napoléon, L'Aigle",
    tags: ['Programmation Arduino', 'Conception 3D', 'Ingénierie et développement durable'],
  },
]

export const skills = [
  {
    category: 'systemes/',
    items: ['Windows 10/11', 'Active Directory', 'GPO', 'Proxmox', 'GLPI', 'Virtualisation', 'Linux'],
  },
  {
    category: 'reseaux+cyber/',
    items: ['VLAN', 'Switching / routage', 'Cisco', 'Aruba', 'Politiques de sécurité', 'Gestion des mots de passe'],
  },
  {
    category: 'devops/',
    items: ['Git', 'Docker', 'Kubernetes', 'Administration Serveur'],
  },
  {
    category: 'dev+data/',
    items: ['PowerShell', 'Java · C · C# (bases)', 'Back-end · API REST', 'Base de données · SQL/NoSQL'],
  },
]

export const extras = {
  langues: 'Français — natif · Anglais — B1+ · Espagnol — A2',
  hobbies: 'Handball · cinéma · musique · jeux vidéo · voyage',
}

export const navLinks = [
  { href: '#experience', label: './experience' },
  { href: '#realisations', label: './realisations' },
  { href: '#formation', label: './formation' },
  { href: '#competences', label: './competences' },
  { href: '#contact', label: './contact' },
]
