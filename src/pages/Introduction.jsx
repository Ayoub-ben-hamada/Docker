import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 p-12 rounded-2xl"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          🐳 Introduction à Docker
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Découvrez la technologie de conteneurisation qui révolutionne le développement 
          et le déploiement d'applications. Docker simplifie la gestion des environnements 
          et garantit la portabilité de vos applications.
        </motion.p>
      </motion.div>

      {/* Qu'est-ce que Docker ? */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
          <span className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
            🤔
          </span>
          Qu'est-ce que Docker ?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Docker est une plateforme de conteneurisation qui permet d'empaqueter une application 
              et ses dépendances dans un conteneur léger et portable. Cette technologie révolutionne 
              la façon dont nous développons, testons et déployons nos applications.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-2">💡 Concept clé</h3>
              <p className="text-blue-700 text-sm">
                "Build once, run anywhere" - Construisez une fois, exécutez partout. 
                C'est la promesse de Docker qui résout le problème classique 
                "ça marche sur ma machine".
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
            <h3 className="font-bold mb-4 text-gray-800">Analogie simple :</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📦</span>
                <div>
                  <div className="font-semibold">Container = Boîte de transport</div>
                  <div className="text-gray-600">Standardisée, empilable, transportable</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚢</span>
                <div>
                  <div className="font-semibold">Docker Engine = Cargo</div>
                  <div className="text-gray-600">Transport les conteneurs efficacement</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏭</span>
                <div>
                  <div className="font-semibold">Host = Port de destination</div>
                  <div className="text-gray-600">Peut recevoir n'importe quel conteneur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Problèmes résolus */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🎯 Problèmes résolus par Docker
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="bg-red-50 p-6 rounded-xl border border-red-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4 text-center">😱</div>
            <h3 className="font-bold text-red-800 mb-3">Avant Docker</h3>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• "Ça marche sur ma machine"</li>
              <li>• Environnements incohérents</li>
              <li>• Déploiements complexes</li>
              <li>• Conflits de dépendances</li>
              <li>• Configuration manuelle</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="bg-blue-50 p-6 rounded-xl border border-blue-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4 text-center">🔄</div>
            <h3 className="font-bold text-blue-800 mb-3">Transition</h3>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Conteneurisation progressive</li>
              <li>• Migration étape par étape</li>
              <li>• Formation des équipes</li>
              <li>• Adaptation des workflows</li>
              <li>• Tests et validation</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="bg-green-50 p-6 rounded-xl border border-green-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4 text-center">🚀</div>
            <h3 className="font-bold text-green-800 mb-3">Avec Docker</h3>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Environnements identiques</li>
              <li>• Déploiements automatisés</li>
              <li>• Isolation complète</li>
              <li>• Scalabilité simplifiée</li>
              <li>• DevOps facilité</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Cas d'usage */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🔧 Cas d'usage principaux
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="font-bold mb-2 text-center">Développement</h3>
            <p className="text-sm text-gray-600 text-center">
              Environnements de dev identiques pour toute l'équipe
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">🧪</div>
            <h3 className="font-bold mb-2 text-center">Tests</h3>
            <p className="text-sm text-gray-600 text-center">
              Isolation parfaite pour les tests automatisés
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="font-bold mb-2 text-center">Déploiement</h3>
            <p className="text-sm text-gray-600 text-center">
              Déploiements rapides et fiables en production
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-4 text-center">📈</div>
            <h3 className="font-bold mb-2 text-center">Scalabilité</h3>
            <p className="text-sm text-gray-600 text-center">
              Montée en charge automatique et efficace
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
