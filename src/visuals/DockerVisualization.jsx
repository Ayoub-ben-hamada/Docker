import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DockerVisualization() {
  const [selectedConcept, setSelectedConcept] = useState("containers");

  const concepts = {
    containers: {
      title: "Conteneurs vs Machines Virtuelles",
      description: "Comprendre la différence entre conteneurs et VMs",
      visual: <ContainerVsVM />
    },
    layers: {
      title: "Système de couches Docker",
      description: "Comment Docker utilise les couches pour optimiser les images",
      visual: <DockerLayers />
    },
    lifecycle: {
      title: "Cycle de vie d'un conteneur",
      description: "De la création à la destruction d'un conteneur",
      visual: <ContainerLifecycle />
    },
    networking: {
      title: "Réseau Docker",
      description: "Comment les conteneurs communiquent entre eux",
      visual: <DockerNetworking />
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Navigation des concepts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Visualisations Docker Interactives
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(concepts).map(([key, concept]) => (
            <button
              key={key}
              onClick={() => setSelectedConcept(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedConcept === key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {concept.title}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu du concept sélectionné */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedConcept}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {concepts[selectedConcept].title}
            </h3>
            <p className="text-gray-600">
              {concepts[selectedConcept].description}
            </p>
          </div>
          
          {concepts[selectedConcept].visual}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Composant: Conteneurs vs VMs
function ContainerVsVM() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Machine Virtuelle */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-red-50 p-6 rounded-xl border-2 border-red-200"
      >
        <h4 className="text-lg font-bold text-red-800 mb-4 text-center">
          🖥️ Machine Virtuelle
        </h4>
        <div className="space-y-2">
          <div className="bg-gray-300 p-3 rounded text-center font-semibold">
            Hardware Physique
          </div>
          <div className="bg-blue-300 p-3 rounded text-center">
            Hyperviseur (VMware, VirtualBox)
          </div>
          <div className="bg-yellow-200 p-2 rounded text-center text-sm">
            OS Invité #1 (Ubuntu)
          </div>
          <div className="bg-green-200 p-2 rounded text-center text-sm">
            App 1
          </div>
          <div className="bg-yellow-200 p-2 rounded text-center text-sm">
            OS Invité #2 (Windows)
          </div>
          <div className="bg-green-200 p-2 rounded text-center text-sm">
            App 2
          </div>
        </div>
        <div className="mt-4 text-sm text-red-700">
          ❌ Lourd: Chaque VM a son OS complet<br/>
          ❌ Lent à démarrer<br/>
          ❌ Consomme beaucoup de RAM
        </div>
      </motion.div>

      {/* Conteneurs Docker */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-green-50 p-6 rounded-xl border-2 border-green-200"
      >
        <h4 className="text-lg font-bold text-green-800 mb-4 text-center">
          📦 Conteneurs Docker
        </h4>
        <div className="space-y-2">
          <div className="bg-gray-300 p-3 rounded text-center font-semibold">
            Hardware Physique
          </div>
          <div className="bg-blue-300 p-3 rounded text-center">
            OS Host (Linux/Windows)
          </div>
          <div className="bg-purple-300 p-3 rounded text-center">
            Docker Engine
          </div>
          <div className="flex space-x-2">
            <div className="bg-green-200 p-2 rounded text-center text-sm flex-1">
              Conteneur 1<br/>App A
            </div>
            <div className="bg-green-200 p-2 rounded text-center text-sm flex-1">
              Conteneur 2<br/>App B
            </div>
            <div className="bg-green-200 p-2 rounded text-center text-sm flex-1">
              Conteneur 3<br/>App C
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-green-700">
          ✅ Léger: Partage le noyau de l'OS<br/>
          ✅ Démarrage rapide (secondes)<br/>
          ✅ Faible consommation mémoire
        </div>
      </motion.div>
    </div>
  );
}

// Composant: Couches Docker
function DockerLayers() {
  const [selectedLayer, setSelectedLayer] = useState(0);
  
  const layers = [
    { name: "Base Image", description: "ubuntu:20.04", color: "bg-gray-200", commands: [] },
    { name: "Layer 1", description: "RUN apt-get update", color: "bg-blue-200", commands: ["apt-get update"] },
    { name: "Layer 2", description: "RUN apt-get install -y nodejs", color: "bg-green-200", commands: ["apt-get install nodejs"] },
    { name: "Layer 3", description: "COPY package.json .", color: "bg-yellow-200", commands: ["COPY package.json"] },
    { name: "Layer 4", description: "RUN npm install", color: "bg-orange-200", commands: ["npm install"] },
    { name: "Layer 5", description: "COPY . .", color: "bg-purple-200", commands: ["COPY source code"] }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Visualisation des couches */}
      <div className="space-y-2">
        <h4 className="text-lg font-bold text-center mb-4">Structure en couches</h4>
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            className={`p-3 rounded cursor-pointer border-2 transition-all ${layer.color} ${
              selectedLayer === index ? 'border-blue-500 scale-105' : 'border-transparent'
            }`}
            onClick={() => setSelectedLayer(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="font-semibold">{layer.name}</div>
            <div className="text-sm text-gray-600">{layer.description}</div>
          </motion.div>
        ))}
      </div>

      {/* Détails de la couche sélectionnée */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="text-lg font-bold mb-4">
          Détails: {layers[selectedLayer].name}
        </h4>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="mb-4">
              <strong>Description:</strong>
              <p className="text-gray-600">{layers[selectedLayer].description}</p>
            </div>
            
            <div className="mb-4">
              <strong>Avantages des couches:</strong>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Réutilisation: les couches identiques sont partagées</li>
                <li>Cache: reconstruction rapide lors de modifications</li>
                <li>Optimisation: seules les couches modifiées sont reconstruites</li>
              </ul>
            </div>

            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              <div>$ docker build -t myapp .</div>
              {layers.slice(0, selectedLayer + 1).map((layer, idx) => (
                <div key={idx} className="text-gray-300">
                  Step {idx + 1}: {layer.description}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Composant: Cycle de vie du conteneur
function ContainerLifecycle() {
  const [currentState, setCurrentState] = useState(0);
  
  const states = [
    { name: "Created", color: "bg-gray-300", description: "Conteneur créé mais pas démarré" },
    { name: "Running", color: "bg-green-300", description: "Conteneur en cours d'exécution" },
    { name: "Paused", color: "bg-yellow-300", description: "Conteneur mis en pause" },
    { name: "Stopped", color: "bg-red-300", description: "Conteneur arrêté" },
    { name: "Deleted", color: "bg-gray-500", description: "Conteneur supprimé" }
  ];

  const commands = [
    "docker create myapp",
    "docker start container_id",
    "docker pause container_id", 
    "docker stop container_id",
    "docker rm container_id"
  ];

  return (
    <div className="space-y-8">
      {/* Diagramme d'état */}
      <div className="flex justify-center items-center space-x-4">
        {states.map((state, index) => (
          <motion.div
            key={index}
            className={`relative p-4 rounded-lg cursor-pointer transition-all ${state.color} ${
              currentState === index ? 'scale-110 shadow-lg' : ''
            }`}
            onClick={() => setCurrentState(index)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-bold text-center">{state.name}</div>
            {index < states.length - 1 && (
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Détails de l'état actuel */}
      <motion.div
        key={currentState}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-50 p-6 rounded-xl text-center"
      >
        <h4 className="text-xl font-bold mb-2">{states[currentState].name}</h4>
        <p className="text-gray-600 mb-4">{states[currentState].description}</p>
        
        <div className="bg-black text-green-400 p-3 rounded font-mono text-sm inline-block">
          {commands[currentState]}
        </div>
      </motion.div>

      {/* Contrôles */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCurrentState(Math.max(0, currentState - 1))}
          disabled={currentState === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          ← Précédent
        </button>
        <button
          onClick={() => setCurrentState(Math.min(states.length - 1, currentState + 1))}
          disabled={currentState === states.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

// Composant: Réseau Docker
function DockerNetworking() {
  const [networkType, setNetworkType] = useState("bridge");
  
  const networks = {
    bridge: {
      title: "Bridge Network (défaut)",
      description: "Réseau isolé avec NAT vers l'host",
      visual: <BridgeNetwork />
    },
    host: {
      title: "Host Network",
      description: "Partage direct du réseau de l'hôte",
      visual: <HostNetwork />
    },
    overlay: {
      title: "Overlay Network",
      description: "Réseau multi-hôtes pour Docker Swarm",
      visual: <OverlayNetwork />
    }
  };

  return (
    <div className="space-y-6">
      {/* Sélecteur de type de réseau */}
      <div className="flex justify-center space-x-4">
        {Object.entries(networks).map(([key, network]) => (
          <button
            key={key}
            onClick={() => setNetworkType(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              networkType === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {network.title}
          </button>
        ))}
      </div>

      {/* Visualisation du réseau sélectionné */}
      <AnimatePresence mode="wait">
        <motion.div
          key={networkType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gray-50 p-6 rounded-xl"
        >
          <h4 className="text-lg font-bold text-center mb-2">
            {networks[networkType].title}
          </h4>
          <p className="text-center text-gray-600 mb-6">
            {networks[networkType].description}
          </p>
          
          {networks[networkType].visual}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BridgeNetwork() {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white">
          🌐
        </div>
        <div className="text-sm">Internet</div>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
          🖥️
        </div>
        <div className="text-sm">Host Docker</div>
        <div className="text-xs text-gray-500">IP: 192.168.1.100</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-green-400 rounded mx-auto flex items-center justify-center text-white text-xs">
          📦
        </div>
        <div className="text-xs">Container A</div>
        <div className="text-xs text-gray-500">172.17.0.2</div>
        
        <div className="w-12 h-12 bg-green-400 rounded mx-auto flex items-center justify-center text-white text-xs">
          📦
        </div>
        <div className="text-xs">Container B</div>
        <div className="text-xs text-gray-500">172.17.0.3</div>
      </div>
    </div>
  );
}

function HostNetwork() {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
          🖥️
        </div>
        <div className="text-sm">Host Docker</div>
        <div className="text-xs text-gray-500">IP: 192.168.1.100</div>
      </div>
      
      <div className="text-4xl">🔗</div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-green-400 rounded mx-auto mb-2 flex items-center justify-center text-white">
          📦
        </div>
        <div className="text-sm">Container</div>
        <div className="text-xs text-gray-500">Même IP que l'host</div>
        <div className="text-xs text-red-500">Partage tous les ports</div>
      </div>
    </div>
  );
}

function OverlayNetwork() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
          🖥️
        </div>
        <div className="text-sm">Host 1</div>
        <div className="space-y-1 mt-2">
          <div className="w-12 h-12 bg-green-400 rounded mx-auto flex items-center justify-center text-white text-xs">
            📦
          </div>
          <div className="text-xs">App A</div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
          🖥️
        </div>
        <div className="text-sm">Host 2</div>
        <div className="space-y-1 mt-2">
          <div className="w-12 h-12 bg-green-400 rounded mx-auto flex items-center justify-center text-white text-xs">
            📦
          </div>
          <div className="text-xs">App B</div>
        </div>
      </div>
      
      <div className="col-span-2 text-center mt-4">
        <div className="text-sm text-blue-600 font-semibold">
          🔗 Réseau Overlay: 10.0.0.0/24
        </div>
        <div className="text-xs text-gray-500">
          Communication transparente entre conteneurs sur différents hôtes
        </div>
      </div>
    </div>
  );
}
