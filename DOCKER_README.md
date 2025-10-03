# Docker React App

Application React dockerisée avec support pour le développement et la production.

## 🐳 Docker

### Prérequis
- Docker installé sur votre machine
- Docker Compose (inclus avec Docker Desktop)

### 🚀 Démarrage rapide

#### Option 1: Docker simple

```bash
# 1. Construire l'image pour la production
docker build -t docker-app .

# 2. Lancer le conteneur
docker run -p 8080:80 docker-app
```

Votre application sera accessible sur `http://localhost:8080`

#### Option 2: Docker Compose (recommandé)

```bash
# Développement
docker-compose --profile dev up

# Production
docker-compose --profile prod up -d
```

### 📋 Commandes Docker disponibles

#### Construction des images

```bash
# Image complète (production par défaut)
docker build -t docker-app .

# Image de développement uniquement
docker build --target development -t docker-app:dev .

# Image de production uniquement  
docker build --target production -t docker-app:prod .
```

#### Lancement des conteneurs

```bash
# Mode développement avec hot reload
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules docker-app:dev

# Mode production
docker run -p 8080:80 docker-app:prod

# En arrière-plan
docker run -d -p 8080:80 --name my-react-app docker-app:prod
```

#### Docker Compose

```bash
# Développement
docker-compose --profile dev up          # Démarrer
docker-compose --profile dev down        # Arrêter

# Production
docker-compose --profile prod up -d      # Démarrer en arrière-plan
docker-compose --profile prod down       # Arrêter

# Voir les logs
docker-compose logs -f
```

#### Scripts npm disponibles

```bash
# Construction
npm run docker:build          # Image complète
npm run docker:build-dev      # Image développement
npm run docker:build-prod     # Image production

# Lancement
npm run docker:run-dev        # Conteneur développement
npm run docker:run-prod       # Conteneur production

# Docker Compose
npm run docker:compose-dev    # Démarrer développement
npm run docker:compose-prod   # Démarrer production
npm run docker:compose-down   # Arrêter tous les services
```

### 🔧 Configuration

#### Variables d'environnement

Créez un fichier `.env` pour vos variables d'environnement :

```bash
# .env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Docker React App
```

#### Ports utilisés

- **Développement**: `5173` (Vite dev server)
- **Production**: `8080` (Nginx)
- **Nginx proxy**: `80` (optionnel)

### 🗂️ Structure des fichiers Docker

```
├── Dockerfile              # Multi-stage build
├── docker-compose.yml      # Orchestration des services
├── .dockerignore           # Fichiers à exclure
├── nginx.conf              # Configuration Nginx
└── package.json            # Scripts Docker ajoutés
```

### 🎯 Optimisations incluses

#### Dockerfile
- **Multi-stage build** pour réduire la taille
- **Layer caching** pour des builds plus rapides
- **Images Alpine** pour la légèreté
- **Nginx** optimisé pour la production

#### Nginx
- **SPA routing** configuré
- **Cache headers** pour les assets
- **Compression gzip** activée
- **Headers de sécurité** ajoutés

#### Docker Compose
- **Profiles** pour dev/prod
- **Volumes** pour le hot reload
- **Networks** isolés
- **Health checks** (à ajouter si besoin)

### 🚨 Résolution de problèmes

#### Port déjà utilisé
```bash
# Voir les conteneurs en cours
docker ps

# Arrêter un conteneur
docker stop <container_id>

# Utiliser un autre port
docker run -p 3000:80 docker-app:prod
```

#### Problème de cache
```bash
# Reconstruire sans cache
docker build --no-cache -t docker-app .

# Nettoyer les images inutilisées
docker image prune
```

#### Problème de permissions (Linux/Mac)
```bash
# Ajouter votre utilisateur au groupe docker
sudo usermod -aG docker $USER
```

### 📈 Monitoring et logs

```bash
# Voir les logs en temps réel
docker logs -f <container_name>

# Statistiques d'utilisation
docker stats

# Inspecter un conteneur
docker inspect <container_name>

# Entrer dans un conteneur
docker exec -it <container_name> sh
```

### 🔄 Mise à jour

```bash
# Reconstruire et relancer
docker-compose down
docker-compose build --no-cache
docker-compose --profile prod up -d
```
