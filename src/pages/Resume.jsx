import { motion } from "framer-motion";

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
        className="mt-8 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span>Pour aller plus loin : <a href="https://docs.docker.com/" className="text-blue-700 underline">Documentation officielle Docker</a></span>
      </motion.div>
    </section>
  );
}