# 🐳 Application Éducative Docker - Guide Complet

Une application web interactive pour apprendre Docker de manière visuelle et pratique. Cette application React moderne utilise des visualisations animées et des exemples concrets pour enseigner les concepts de conteneurisation.

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Docker](#docker)
- [Développement](#développement)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Contribution](#contribution)

## 🎯 Aperçu

Cette application éducative permet d'apprendre Docker à travers :
- **Visualisations interactives** du workflow Docker
- **Exemples pratiques** avec code réel
- **Comparaisons visuelles** (conteneurs vs VMs)
- **Architecture Docker** expliquée simplement
- **Bonnes pratiques** et optimisations

### Captures d'écran

L'application comprend 4 sections principales :
1. **Introduction** - Concepts de base et problèmes résolus
2. **Fonctionnement** - Architecture et workflow complet
3. **Exemples** - Cas pratiques interactifs
4. **Résumé** - Récapitulatif des points clés

## ✨ Fonctionnalités

### 🎨 Visualisations Interactives
- **Workflow animé** : Du code au déploiement
- **Architecture Docker** : Client, Engine, Registry
- **Comparaison conteneurs/VMs** : Différences visuelles
- **Système de couches** : Optimisation des images
- **Cycle de vie** : États des conteneurs
- **Réseaux Docker** : Bridge, Host, Overlay

### 🛠️ Exemples Pratiques
- **Application Node.js** : Guide étape par étape
- **Multi-stage builds** : Optimisation avancée
- **Docker Compose** : Architecture multi-services
- **Bonnes pratiques** : Sécurité et performance

### 🎭 Interface Moderne
- **Design responsive** : Compatible mobile/desktop
- **Animations fluides** : Framer Motion
- **Navigation intuitive** : React Router
- **Thème professionnel** : Tailwind CSS

## 🚀 Installation

### Prérequis
- **Node.js** 18+ 
- **npm** ou **yarn**
- **Docker** (optionnel, pour la conteneurisation)

### Installation locale

```bash
# 1. Cloner le repository
git clone https://github.com/Ayoub-ben-hamada/Docker.git
cd Docker

# 2. Installer les dépendances
npm install

# 3. Démarrer en mode développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:5173
```

## 🎮 Utilisation

### Mode Développement

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la build de production
npm run lint         # Vérifier le code
```

### Navigation dans l'application

1. **Page d'accueil** (`/`) : Introduction aux concepts Docker
2. **Fonctionnement** (`/fonctionnement`) : Architecture et visualisations
3. **Exemples** (`/exemple`) : Cas pratiques interactifs
4. **Résumé** (`/resume`) : Points clés et récapitulatif

### Fonctionnalités interactives

- **Cliquez** sur les éléments pour voir les détails
- **Naviguez** entre les étapes avec les boutons
- **Ajustez** la vitesse des animations
- **Explorez** les différents concepts à votre rythme

## 🐳 Docker

### Démarrage rapide avec Docker

```bash
# 1. Construire l'image
docker build -t docker-learning-app .

# 2. Lancer le conteneur
docker run -p 8080:80 docker-learning-app

# 3. Accéder à l'application
# http://localhost:8080
```

### Avec Docker Compose

```bash
# Mode développement
docker-compose --profile dev up

# Mode production
docker-compose --profile prod up -d

# Arrêter les services
docker-compose down
```

### Scripts Docker disponibles

```bash
npm run docker:build-dev      # Build image développement
npm run docker:build-prod     # Build image production
npm run docker:run-dev        # Lancer conteneur dev
npm run docker:run-prod       # Lancer conteneur prod
npm run docker:compose-dev    # Docker Compose dev
npm run docker:compose-prod   # Docker Compose prod
```

## 🛠️ Développement

### Structure des composants

```
src/
├── components/           # Composants réutilisables
│   └── Navbar.jsx       # Navigation principale
├── pages/               # Pages de l'application
│   ├── Introduction.jsx # Page d'introduction
│   ├── Fonctionnement.jsx # Architecture Docker
│   ├── Exemple.jsx      # Exemples pratiques
│   └── Resume.jsx       # Résumé
├── visuals/             # Composants de visualisation
│   ├── AnimatedSchema.jsx    # Workflow animé
│   ├── DockerVisualization.jsx # Concepts interactifs
│   └── InteractiveExamples.jsx # Exemples pratiques
└── App.jsx              # Composant principal
```

### Ajouter de nouvelles visualisations

1. Créer un nouveau composant dans `src/visuals/`
2. Utiliser Framer Motion pour les animations
3. Implémenter l'interactivité avec useState
4. Respecter le design system Tailwind

### Technologies de développement

- **React 19** : Framework frontend
- **Vite** : Build tool rapide
- **Tailwind CSS 4** : Framework CSS
- **Framer Motion** : Animations
- **React Router** : Navigation
- **React Icons** : Icônes

## 📁 Structure du projet

```
Docker/
├── public/              # Assets statiques
├── src/                 # Code source
│   ├── components/      # Composants React
│   ├── pages/          # Pages de l'application
│   ├── visuals/        # Visualisations interactives
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── Dockerfile          # Configuration Docker
├── docker-compose.yml  # Orchestration
├── nginx.conf          # Configuration Nginx
├── .dockerignore       # Exclusions Docker
├── tailwind.config.js  # Configuration Tailwind
├── vite.config.js      # Configuration Vite
└── package.json        # Dépendances et scripts
```

## 🎨 Technologies utilisées

### Frontend
- **React 19** - Framework UI moderne
- **Vite** - Build tool ultra-rapide
- **React Router** - Navigation SPA
- **Framer Motion** - Animations fluides

### Styling
- **Tailwind CSS 4** - Framework CSS utility-first
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Compatibilité navigateurs

### Docker
- **Multi-stage builds** - Optimisation des images
- **Nginx Alpine** - Serveur web léger
- **Docker Compose** - Orchestration

### Développement
- **ESLint** - Linting JavaScript
- **Vite HMR** - Hot Module Replacement
- **Node.js 18** - Runtime JavaScript

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

### Processus de contribution

1. **Fork** le repository
2. **Créer** une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commiter** les changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. **Pousser** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrir** une Pull Request

### Guidelines

- Respecter la structure de code existante
- Ajouter des tests si nécessaire
- Documenter les nouvelles fonctionnalités
- Suivre les conventions de nommage

### Types de contributions recherchées

- 🐛 **Bug fixes** - Corrections de bugs
- ✨ **Nouvelles fonctionnalités** - Visualisations additionnelles
- 📚 **Documentation** - Améliorations de la doc
- 🎨 **Design** - Améliorations UI/UX
- 🔧 **Optimisations** - Performance et accessibilité

## 📞 Support

Pour toute question ou problème :

1. **Issues GitHub** : [Créer une issue](https://github.com/Ayoub-ben-hamada/Docker/issues)
2. **Discussions** : [GitHub Discussions](https://github.com/Ayoub-ben-hamada/Docker/discussions)
3. **Email** : Contactez le mainteneur du projet

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- **React Team** pour le framework
- **Tailwind Labs** pour le framework CSS
- **Framer** pour Motion
- **Docker Inc** pour la technologie
- **Communauté open source** pour l'inspiration

---

**Fait avec ❤️ pour apprendre Docker de manière interactive**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
