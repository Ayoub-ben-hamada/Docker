import { motion } from "framer-motion";
import AnimatedSchema from "../visuals/AnimatedSchema.jsx";
import DockerVisualization from "../visuals/DockerVisualization.jsx";

export default function Fonctionnement() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-2xl"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ⚙️ Fonctionnement de Docker
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Comprenez le cycle de vie complet d'une application Docker, 
          du développement au déploiement, grâce à nos visualisations interactives.
        </motion.p>
      </motion.div>

      {/* Workflow Docker Animé */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🔄 Workflow Docker Complet
        </h2>
        <AnimatedSchema />
      </motion.div>

      {/* Concepts Fondamentaux */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🧠 Concepts Fondamentaux
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-blue-50 p-6 rounded-xl border border-blue-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">📄</div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Dockerfile</h3>
            <p className="text-blue-700 text-sm mb-3">
              Fichier de configuration qui décrit comment construire une image Docker.
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-xs">
              <div>FROM node:16</div>
              <div>WORKDIR /app</div>
              <div>COPY . .</div>
              <div>RUN npm install</div>
              <div>CMD ["npm", "start"]</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-green-50 p-6 rounded-xl border border-green-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">💿</div>
            <h3 className="text-xl font-bold mb-3 text-green-800">Image Docker</h3>
            <p className="text-green-700 text-sm mb-3">
              Template en lecture seule utilisé pour créer des conteneurs.
            </p>
            <div className="space-y-2 text-xs">
              <div className="bg-gray-200 p-2 rounded">Layer 1: OS de base</div>
              <div className="bg-gray-300 p-2 rounded">Layer 2: Runtime</div>
              <div className="bg-gray-400 p-2 rounded">Layer 3: Dependencies</div>
              <div className="bg-green-400 p-2 rounded text-white">Layer 4: Application</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-purple-50 p-6 rounded-xl border border-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">📦</div>
            <h3 className="text-xl font-bold mb-3 text-purple-800">Conteneur</h3>
            <p className="text-purple-700 text-sm mb-3">
              Instance en cours d'exécution d'une image Docker.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between bg-purple-200 p-2 rounded">
                <span>État:</span>
                <span className="text-green-600 font-bold">Running</span>
              </div>
              <div className="flex justify-between bg-purple-200 p-2 rounded">
                <span>Port:</span>
                <span>3000:3000</span>
              </div>
              <div className="flex justify-between bg-purple-200 p-2 rounded">
                <span>Mémoire:</span>
                <span>256MB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Architecture Docker */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🏗️ Architecture Docker
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
              💻
            </div>
            <h3 className="text-xl font-bold mb-2">Docker Client</h3>
            <p className="text-gray-600 text-sm">
              Interface en ligne de commande pour interagir avec Docker Engine
            </p>
            <div className="mt-3 bg-black text-green-400 p-2 rounded font-mono text-xs">
              docker build<br/>
              docker run<br/>
              docker push
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
              ⚙️
            </div>
            <h3 className="text-xl font-bold mb-2">Docker Engine</h3>
            <p className="text-gray-600 text-sm">
              Cœur de Docker qui gère les conteneurs, images et réseaux
            </p>
            <div className="mt-3 space-y-1 text-xs">
              <div className="bg-green-100 p-2 rounded">API REST</div>
              <div className="bg-green-200 p-2 rounded">Docker Daemon</div>
              <div className="bg-green-300 p-2 rounded">containerd</div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
              🏪
            </div>
            <h3 className="text-xl font-bold mb-2">Docker Registry</h3>
            <p className="text-gray-600 text-sm">
              Dépôt centralisé pour stocker et partager les images Docker
            </p>
            <div className="mt-3 space-y-1 text-xs">
              <div className="bg-purple-100 p-2 rounded">Docker Hub</div>
              <div className="bg-purple-200 p-2 rounded">AWS ECR</div>
              <div className="bg-purple-300 p-2 rounded">Registry privé</div>
            </div>
          </motion.div>
        </div>

        {/* Flèches de connexion */}
        <div className="flex justify-center items-center space-x-8 text-gray-400">
          <span className="text-2xl">🔄</span>
          <span className="text-sm">Communication via API REST</span>
          <span className="text-2xl">🔄</span>
        </div>
      </motion.div>

      {/* Visualisations Interactives */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <DockerVisualization />
      </motion.div>

      {/* Commandes essentielles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="bg-gray-900 text-white p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          ⌨️ Commandes Docker Essentielles
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Images</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-blue-400">docker build</span> -t myapp .
                <div className="text-gray-400 text-xs mt-1">Construire une image</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-blue-400">docker images</span>
                <div className="text-gray-400 text-xs mt-1">Lister les images</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-blue-400">docker rmi</span> image_id
                <div className="text-gray-400 text-xs mt-1">Supprimer une image</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Conteneurs</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-blue-400">docker run</span> -p 3000:3000 myapp
                <div className="text-gray-400 text-xs mt-1">Créer et démarrer un conteneur</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-blue-400">docker ps</span>
                <div className="text-gray-400 text-xs mt-1">Lister les conteneurs actifs</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-blue-400">docker stop</span> container_id
                <div className="text-gray-400 text-xs mt-1">Arrêter un conteneur</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
