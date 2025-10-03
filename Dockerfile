# Stage 1: Build de l'application
FROM node:18-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer toutes les dépendances (prod + dev nécessaires pour build)
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application pour la production (vite build)
RUN npm run build

# Stage 2: Serveur de production avec Nginx
FROM nginx:alpine AS production

# Copier les fichiers buildés depuis le builder (dossier dist généré par Vite)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la config nginx personnalisée si tu en as une
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Version développement (optionnelle)
FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
