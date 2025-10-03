import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedSchema() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      title: "1. Développeur écrit le code",
      description: "Le développeur crée une application avec son Dockerfile",
      highlight: "developer"
    },
    {
      title: "2. Construction de l'image",
      description: "Docker build crée une image à partir du Dockerfile",
      highlight: "build"
    },
    {
      title: "3. Stockage dans le Registry",
      description: "L'image est poussée vers Docker Hub ou un registry privé",
      highlight: "registry"
    },
    {
      title: "4. Déploiement en production",
      description: "L'image est téléchargée et exécutée comme conteneur",
      highlight: "container"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, steps.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    highlighted: { opacity: 1, scale: 1.1, boxShadow: "0 0 20px #3b82f6" }
  };

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contrôles */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          {isPlaying ? "⏸️ Pause" : "▶️ Démarrer l'animation"}
        </button>
      </div>

      {/* Titre et description du step actuel */}
      <div className="text-center mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-blue-50 p-4 rounded-lg"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-blue-600">
              {steps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Schéma principal */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg min-h-80">
        {/* Développeur */}
        <motion.div
          className="absolute top-4 left-4 flex flex-col items-center"
          variants={itemVariants}
          animate={steps[currentStep].highlight === "developer" ? "highlighted" : "visible"}
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
            👨‍💻
          </div>
          <span className="text-sm font-semibold text-gray-700">Développeur</span>
          <div className="bg-white p-2 rounded mt-2 text-xs border">
            <div className="font-mono text-green-600">FROM node:16</div>
            <div className="font-mono text-green-600">COPY . .</div>
            <div className="font-mono text-green-600">RUN npm install</div>
          </div>
        </motion.div>

        {/* Build Process */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          variants={itemVariants}
          animate={steps[currentStep].highlight === "build" ? "highlighted" : "visible"}
        >
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
            🔨
          </div>
          <span className="text-sm font-semibold text-gray-700">Docker Build</span>
          <div className="bg-white p-2 rounded mt-2 text-xs border">
            <div className="font-mono text-yellow-600">docker build -t myapp .</div>
          </div>
        </motion.div>

        {/* Registry */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col items-center"
          variants={itemVariants}
          animate={steps[currentStep].highlight === "registry" ? "highlighted" : "visible"}
        >
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
            🏪
          </div>
          <span className="text-sm font-semibold text-gray-700">Docker Registry</span>
          <div className="bg-white p-2 rounded mt-2 text-xs border">
            <div className="font-mono text-blue-600">docker push myapp</div>
          </div>
        </motion.div>

        {/* Container en production */}
        <motion.div
          className="absolute bottom-4 right-1/2 transform translate-x-1/2 flex flex-col items-center"
          variants={itemVariants}
          animate={steps[currentStep].highlight === "container" ? "highlighted" : "visible"}
        >
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
            📦
          </div>
          <span className="text-sm font-semibold text-gray-700">Conteneur</span>
          <div className="bg-white p-2 rounded mt-2 text-xs border">
            <div className="font-mono text-purple-600">docker run myapp</div>
          </div>
        </motion.div>
      </div>

      {/* Indicateurs de progression */}
      <div className="flex justify-center mt-6 space-x-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentStep 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}