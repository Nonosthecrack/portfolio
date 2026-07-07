# Portfolio — Noa Férault

Site vitrine one-page (Vue 3 + Vite), design terminal dark/ambre.

## Développement

```bash
npm install
npm run dev      # serveur local
npm run build    # build de production → dist/
```

## Contenu

Tout le contenu (expériences, projets, compétences, contact) est centralisé dans `src/data.js` — pas besoin de toucher aux composants pour mettre à jour le site.

## Déploiement — GitHub Pages

1. Créer un repo GitHub et pousser : `git remote add origin <url>` puis `git push -u origin main`
2. Dans le repo : **Settings → Pages → Source : GitHub Actions**
3. Chaque push sur `main` déploie automatiquement (workflow `.github/workflows/deploy.yml`)
