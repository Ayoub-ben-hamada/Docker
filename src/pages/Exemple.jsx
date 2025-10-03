import { motion } from "framer-motion";
import InteractiveExamples from "../visuals/InteractiveExamples.jsx";

export default function Exemple() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-12 rounded-2xl"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          🛠️ Exemples Pratiques Docker
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Apprenez Docker à travers des exemples concrets et interactifs. 
          De l'application simple aux architectures complexes, maîtrisez tous les aspects de Docker.
        </motion.p>
      </motion.div>

      {/* Guide rapide */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🚀 Guide de démarrage rapide
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              1
            </div>
            <h3 className="font-bold mb-2">Installer Docker</h3>
            <p className="text-gray-600 text-sm">
              Téléchargez et installez Docker Desktop pour votre OS
            </p>
            <div className="mt-2 bg-black text-green-400 p-2 rounded font-mono text-xs">
              docker --version
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              2
            </div>
            <h3 className="font-bold mb-2">Premier test</h3>
            <p className="text-gray-600 text-sm">
              Testez votre installation avec Hello World
            </p>
            <div className="mt-2 bg-black text-green-400 p-2 rounded font-mono text-xs">
              docker run hello-world
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              3
            </div>
            <h3 className="font-bold mb-2">Créer Dockerfile</h3>
            <p className="text-gray-600 text-sm">
              Écrivez votre premier Dockerfile
            </p>
            <div className="mt-2 bg-black text-green-400 p-2 rounded font-mono text-xs">
              touch Dockerfile
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
              4
            </div>
            <h3 className="font-bold mb-2">Build & Run</h3>
            <p className="text-gray-600 text-sm">
              Construisez et lancez votre conteneur
            </p>
            <div className="mt-2 bg-black text-green-400 p-2 rounded font-mono text-xs">
              docker build -t app .
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Exemples interactifs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <InteractiveExamples />
      </motion.div>

      {/* Tips et bonnes pratiques */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          💡 Tips pour bien commencer
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-800">Do's ✅</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                <div className="font-semibold text-green-800">Utilisez des images officielles</div>
                <div className="text-green-600 text-sm">FROM node:16-alpine au lieu d'images custom</div>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                <div className="font-semibold text-green-800">Optimisez l'ordre des layers</div>
                <div className="text-green-600 text-sm">Copiez package.json avant le code source</div>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                <div className="font-semibold text-green-800">Utilisez .dockerignore</div>
                <div className="text-green-600 text-sm">Excluez node_modules, .git, logs, etc.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-red-800">Don'ts ❌</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                <div className="font-semibold text-red-800">Ne pas utiliser le tag 'latest'</div>
                <div className="text-red-600 text-sm">Préférez des versions spécifiques</div>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                <div className="font-semibold text-red-800">Éviter les gros conteneurs</div>
                <div className="text-red-600 text-sm">Une application par conteneur</div>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                <div className="font-semibold text-red-800">Ne pas stocker de données sensibles</div>
                <div className="text-red-600 text-sm">Utilisez des variables d'environnement</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ressources supplémentaires */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          📚 Ressources pour aller plus loin
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4">📖</div>
            <h3 className="font-bold mb-2">Documentation officielle</h3>
            <p className="text-blue-100 text-sm mb-3">
              La documentation complète de Docker avec tous les détails
            </p>
            <div className="text-xs text-blue-200">
              docs.docker.com
            </div>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4">🎮</div>
            <h3 className="font-bold mb-2">Docker Labs</h3>
            <p className="text-blue-100 text-sm mb-3">
              Tutoriels interactifs pour pratiquer Docker
            </p>
            <div className="text-xs text-blue-200">
              play-with-docker.com
            </div>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4">🏪</div>
            <h3 className="font-bold mb-2">Docker Hub</h3>
            <p className="text-blue-100 text-sm mb-3">
              Repository d'images Docker prêtes à l'emploi
            </p>
            <div className="text-xs text-blue-200">
              hub.docker.com
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
