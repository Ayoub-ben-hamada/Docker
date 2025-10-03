import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section>
      <motion.h2
        className="text-3xl font-bold mb-6 text-blue-700 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >Résumé</motion.h2>
      <motion.ul
        className="bg-blue-50 rounded-xl shadow p-8 space-y-3 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <li>🚀 Docker facilite le déploiement et l’isolation des applications.</li>
        <li>⚡️ Les conteneurs sont plus légers et rapides que les VMs.</li>
        <li>🛠️ L’écosystème Docker (Hub, Engine, images) simplifie la gestion logicielle.</li>
        <li>👨‍💻 Simple à utiliser, idéal pour le développement moderne.</li>
      </motion.ul>
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            💡 Application développée par
          </h3>
          <p className="text-gray-600 mb-4">
            Cette application éducative a été créée pour rendre l'apprentissage de Docker interactif et visuel.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Découvrir le développeur
          </Link>
        </div>
        
        <div className="text-gray-600">
          <span>Pour aller plus loin : <a href="https://docs.docker.com/" className="text-blue-700 underline">Documentation officielle Docker</a></span>
        </div>
      </motion.div>
    </section>
  );
}