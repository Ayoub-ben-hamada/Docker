import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveExamples() {
  const [selectedExample, setSelectedExample] = useState("simple-app");

  const examples = {
    "simple-app": {
      title: "Application Node.js Simple",
      description: "Conteneuriser une application web basique",
      component: <SimpleAppExample />
    },
    "multi-stage": {
      title: "Build Multi-Stage",
      description: "Optimiser la taille des images avec le multi-stage build",
      component: <MultiStageExample />
    },
    "docker-compose": {
      title: "Application Multi-Services",
      description: "Orchestrer plusieurs services avec Docker Compose",
      component: <DockerComposeExample />
    },
    "best-practices": {
      title: "Bonnes Pratiques",
      description: "Sécurité et optimisation des conteneurs",
      component: <BestPracticesExample />
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Exemples Pratiques Docker
        </h2>
        <p className="text-gray-600">
          Apprenez Docker avec des exemples concrets et interactifs
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(examples).map(([key, example]) => (
          <button
            key={key}
            onClick={() => setSelectedExample(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedExample === key
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {example.title}
          </button>
        ))}
      </div>

      {/* Contenu de l'exemple */}
      <motion.div
        key={selectedExample}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {examples[selectedExample].title}
          </h3>
          <p className="text-gray-600">
            {examples[selectedExample].description}
          </p>
        </div>
        
        {examples[selectedExample].component}
      </motion.div>
    </div>
  );
}

function SimpleAppExample() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "1. Structure du projet",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">Structure des fichiers:</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <div>📁 my-node-app/</div>
              <div className="ml-4">📄 app.js</div>
              <div className="ml-4">📄 package.json</div>
              <div className="ml-4">📄 Dockerfile</div>
              <div className="ml-4">📄 .dockerignore</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">app.js:</h4>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="text-blue-400">const</div> express = <div className="text-yellow-400">require</div>(<div className="text-red-400">'express'</div>);
              <div className="text-blue-400">const</div> app = <div className="text-yellow-400">express</div>();<br/>
              <br/>
              app.<div className="text-yellow-400">get</div>(<div className="text-red-400">'/'</div>, (req, res) => {"{"}
              <div className="ml-4">res.<div className="text-yellow-400">send</div>(<div className="text-red-400">'Hello Docker!'</div>);</div>
              {"}"});<br/>
              <br/>
              app.<div className="text-yellow-400">listen</div>(<div className="text-purple-400">3000</div>);
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Création du Dockerfile",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-bold mb-3">Dockerfile expliqué ligne par ligne:</h4>
            <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
              <div className="flex">
                <span className="text-blue-400 w-24">FROM</span>
                <span className="text-yellow-400">node:16-alpine</span>
                <span className="text-gray-400 ml-4"># Image de base légère</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 w-24">WORKDIR</span>
                <span className="text-yellow-400">/app</span>
                <span className="text-gray-400 ml-4"># Répertoire de travail</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 w-24">COPY</span>
                <span className="text-yellow-400">package*.json ./</span>
                <span className="text-gray-400 ml-4"># Copie package.json</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 w-24">RUN</span>
                <span className="text-yellow-400">npm install</span>
                <span className="text-gray-400 ml-4"># Installe les dépendances</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 w-24">COPY</span>
                <span className="text-yellow-400">. .</span>
                <span className="text-gray-400 ml-4"># Copie le code source</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 w-24">EXPOSE</span>
                <span className="text-yellow-400">3000</span>
                <span className="text-gray-400 ml-4"># Port exposé</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 w-24">CMD</span>
                <span className="text-yellow-400">["node", "app.js"]</span>
                <span className="text-gray-400 ml-4"># Commande de démarrage</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-bold text-blue-800 mb-2">💡 Pourquoi dans cet ordre ?</h5>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Copier package.json en premier permet de mettre en cache l'installation des dépendances</li>
              <li>• Si seul le code change, npm install ne sera pas ré-exécuté</li>
              <li>• Cela accélère considérablement les builds suivants</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "3. Construction et exécution",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3">Construction de l'image:</h4>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>$ docker build -t my-node-app .</div>
                <div className="text-gray-400 mt-2">
                  Sending build context to Docker daemon...<br/>
                  Step 1/6 : FROM node:16-alpine<br/>
                  Step 2/6 : WORKDIR /app<br/>
                  Step 3/6 : COPY package*.json ./<br/>
                  Step 4/6 : RUN npm install<br/>
                  Step 5/6 : COPY . .<br/>
                  Step 6/6 : CMD ["node", "app.js"]<br/>
                  Successfully built abc123def456
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Lancement du conteneur:</h4>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>$ docker run -p 3000:3000 my-node-app</div>
                <div className="text-gray-400 mt-2">
                  Server running on port 3000...
                </div>
                <br/>
                <div>$ curl http://localhost:3000</div>
                <div className="text-yellow-400">Hello Docker!</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-bold text-green-800 mb-2">✅ Résultat</h5>
            <p className="text-green-700 text-sm">
              Votre application Node.js est maintenant conteneurisée et accessible sur localhost:3000.
              Elle peut être déployée sur n'importe quel système supportant Docker !
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Indicateurs de progression */}
      <div className="flex justify-center space-x-4 mb-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-10 h-10 rounded-full font-bold transition-all ${
              index === currentStep
                ? 'bg-blue-600 text-white scale-110'
                : index < currentStep
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Contenu du step */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-center text-blue-800">
          {steps[currentStep].title}
        </h3>
        {steps[currentStep].content}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 transition-colors"
        >
          ← Précédent
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 transition-colors"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

function MultiStageExample() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
        <h4 className="font-bold text-yellow-800 mb-2">🎯 Objectif</h4>
        <p className="text-yellow-700">
          Réduire la taille de l'image finale en utilisant un build multi-stage pour séparer 
          la compilation du runtime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold mb-3 text-red-600">❌ Dockerfile simple (lourd):</h4>
          <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
            <div><span className="text-blue-400">FROM</span> node:16</div>
            <div><span className="text-blue-400">WORKDIR</span> /app</div>
            <div><span className="text-blue-400">COPY</span> . .</div>
            <div><span className="text-blue-400">RUN</span> npm install</div>
            <div><span className="text-blue-400">RUN</span> npm run build</div>
            <div><span className="text-blue-400">CMD</span> ["npm", "start"]</div>
          </div>
          <div className="mt-2 text-sm text-red-600">
            📏 Taille finale: ~900MB (avec tous les outils de build)
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-green-600">✅ Dockerfile multi-stage (optimisé):</h4>
          <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
            <div><span className="text-purple-400"># Stage 1: Build</span></div>
            <div><span className="text-blue-400">FROM</span> node:16 <span className="text-yellow-400">AS builder</span></div>
            <div><span className="text-blue-400">WORKDIR</span> /app</div>
            <div><span className="text-blue-400">COPY</span> . .</div>
            <div><span className="text-blue-400">RUN</span> npm install</div>
            <div><span className="text-blue-400">RUN</span> npm run build</div>
            <br/>
            <div><span className="text-purple-400"># Stage 2: Production</span></div>
            <div><span className="text-blue-400">FROM</span> node:16-alpine</div>
            <div><span className="text-blue-400">WORKDIR</span> /app</div>
            <div><span className="text-blue-400">COPY --from=builder</span> /app/dist ./</div>
            <div><span className="text-blue-400">CMD</span> ["node", "index.js"]</div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            📏 Taille finale: ~150MB (seulement le runtime)
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h5 className="font-bold text-blue-800 mb-3">🔍 Analyse des avantages:</h5>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded">
            <div className="font-bold text-green-600">Taille réduite</div>
            <div>84% de réduction de taille</div>
          </div>
          <div className="bg-white p-3 rounded">
            <div className="font-bold text-blue-600">Sécurité</div>
            <div>Moins d'outils = surface d'attaque réduite</div>
          </div>
          <div className="bg-white p-3 rounded">
            <div className="font-bold text-purple-600">Performance</div>
            <div>Déploiement plus rapide</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DockerComposeExample() {
  const [selectedService, setSelectedService] = useState("web");
  
  const services = {
    web: { name: "Frontend (React)", port: "3000", color: "bg-blue-500" },
    api: { name: "Backend (Node.js)", port: "5000", color: "bg-green-500" },
    db: { name: "Database (PostgreSQL)", port: "5432", color: "bg-purple-500" },
    redis: { name: "Cache (Redis)", port: "6379", color: "bg-red-500" }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-bold mb-4">Architecture Multi-Services</h4>
        <div className="flex justify-center items-center space-x-4 mb-6">
          {Object.entries(services).map(([key, service]) => (
            <motion.div
              key={key}
              className={`p-4 rounded-lg text-white cursor-pointer transition-all ${service.color} ${
                selectedService === key ? 'scale-110 shadow-lg' : ''
              }`}
              onClick={() => setSelectedService(key)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold">{service.name}</div>
              <div className="text-sm">Port: {service.port}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold mb-3">docker-compose.yml:</h4>
          <div className="bg-black text-white p-4 rounded-lg font-mono text-xs overflow-auto max-h-96">
            <div><span className="text-yellow-400">version:</span> <span className="text-green-400">'3.8'</span></div>
            <div><span className="text-yellow-400">services:</span></div>
            <div className="ml-2"><span className="text-blue-400">web:</span></div>
            <div className="ml-4"><span className="text-yellow-400">build:</span> ./frontend</div>
            <div className="ml-4"><span className="text-yellow-400">ports:</span></div>
            <div className="ml-6">- <span className="text-green-400">"3000:3000"</span></div>
            <div className="ml-4"><span className="text-yellow-400">depends_on:</span></div>
            <div className="ml-6">- api</div>
            <div className="ml-4"><span className="text-yellow-400">environment:</span></div>
            <div className="ml-6"><span className="text-yellow-400">REACT_APP_API_URL:</span> <span className="text-green-400">http://api:5000</span></div>
            <br/>
            <div className="ml-2"><span className="text-blue-400">api:</span></div>
            <div className="ml-4"><span className="text-yellow-400">build:</span> ./backend</div>
            <div className="ml-4"><span className="text-yellow-400">ports:</span></div>
            <div className="ml-6">- <span className="text-green-400">"5000:5000"</span></div>
            <div className="ml-4"><span className="text-yellow-400">depends_on:</span></div>
            <div className="ml-6">- db</div>
            <div className="ml-6">- redis</div>
            <div className="ml-4"><span className="text-yellow-400">environment:</span></div>
            <div className="ml-6"><span className="text-yellow-400">DB_HOST:</span> db</div>
            <div className="ml-6"><span className="text-yellow-400">REDIS_HOST:</span> redis</div>
            <br/>
            <div className="ml-2"><span className="text-blue-400">db:</span></div>
            <div className="ml-4"><span className="text-yellow-400">image:</span> postgres:13</div>
            <div className="ml-4"><span className="text-yellow-400">environment:</span></div>
            <div className="ml-6"><span className="text-yellow-400">POSTGRES_DB:</span> myapp</div>
            <div className="ml-6"><span className="text-yellow-400">POSTGRES_USER:</span> user</div>
            <div className="ml-6"><span className="text-yellow-400">POSTGRES_PASSWORD:</span> password</div>
            <div className="ml-4"><span className="text-yellow-400">volumes:</span></div>
            <div className="ml-6">- db_data:/var/lib/postgresql/data</div>
            <br/>
            <div className="ml-2"><span className="text-blue-400">redis:</span></div>
            <div className="ml-4"><span className="text-yellow-400">image:</span> redis:6-alpine</div>
            <br/>
            <div><span className="text-yellow-400">volumes:</span></div>
            <div className="ml-2"><span className="text-blue-400">db_data:</span></div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3">Commandes essentielles:</h4>
          <div className="space-y-3">
            <div className="bg-gray-100 p-3 rounded">
              <div className="font-mono text-sm bg-black text-green-400 p-2 rounded">
                docker-compose up -d
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Démarre tous les services en arrière-plan
              </div>
            </div>
            
            <div className="bg-gray-100 p-3 rounded">
              <div className="font-mono text-sm bg-black text-green-400 p-2 rounded">
                docker-compose logs web
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Affiche les logs du service web
              </div>
            </div>
            
            <div className="bg-gray-100 p-3 rounded">
              <div className="font-mono text-sm bg-black text-green-400 p-2 rounded">
                docker-compose down
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Arrête et supprime tous les conteneurs
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-50 p-4 rounded-lg">
            <h5 className="font-bold text-green-800 mb-2">🚀 Avantages de Docker Compose:</h5>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Orchestration simple de plusieurs services</li>
              <li>• Réseau automatique entre conteneurs</li>
              <li>• Gestion centralisée des variables d'environnement</li>
              <li>• Volumes persistants pour les données</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function BestPracticesExample() {
  const practices = [
    {
      category: "Sécurité",
      icon: "🔒",
      items: [
        { good: true, text: "Utiliser des images officielles et vérifiées", example: "FROM node:16-alpine" },
        { good: true, text: "Créer un utilisateur non-root", example: "RUN adduser -D appuser\nUSER appuser" },
        { good: false, text: "Ne jamais inclure de secrets dans l'image", example: "ENV API_KEY=secret123" },
        { good: true, text: "Scanner les vulnérabilités", example: "docker scan my-image" }
      ]
    },
    {
      category: "Performance",
      icon: "⚡",
      items: [
        { good: true, text: "Utiliser des images Alpine Linux", example: "FROM python:3.9-alpine" },
        { good: true, text: "Ordre optimal des instructions", example: "COPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . ." },
        { good: false, text: "Éviter de copier des fichiers inutiles", example: "COPY . . # inclut node_modules/" },
        { good: true, text: "Utiliser .dockerignore", example: "node_modules/\n*.log\n.git/" }
      ]
    },
    {
      category: "Maintenabilité",
      icon: "🛠️",
      items: [
        { good: true, text: "Images avec tags spécifiques", example: "FROM nginx:1.21-alpine" },
        { good: false, text: "Éviter le tag 'latest'", example: "FROM nginx:latest" },
        { good: true, text: "Documentation des ports", example: "EXPOSE 3000 # Web server" },
        { good: true, text: "Labels descriptifs", example: 'LABEL maintainer="dev@company.com"' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {practices.map((category) => (
        <div key={category.category} className="bg-gray-50 p-6 rounded-xl">
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <span className="text-2xl mr-3">{category.icon}</span>
            {category.category}
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            {category.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 ${
                  item.good 
                    ? 'bg-green-50 border-green-500' 
                    : 'bg-red-50 border-red-500'
                }`}
              >
                <div className="flex items-start">
                  <span className="text-xl mr-2">
                    {item.good ? '✅' : '❌'}
                  </span>
                  <div className="flex-1">
                    <div className={`font-semibold mb-2 ${
                      item.good ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {item.text}
                    </div>
                    <div className="bg-black text-green-400 p-2 rounded font-mono text-xs">
                      {item.example}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-blue-50 p-6 rounded-xl">
        <h4 className="text-lg font-bold mb-4 text-blue-800">
          📚 Ressources supplémentaires
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-bold mb-2">Outils de sécurité:</h5>
            <ul className="space-y-1 text-blue-700">
              <li>• Snyk - Scan de vulnérabilités</li>
              <li>• Trivy - Scanner open source</li>
              <li>• Docker Bench - Tests de sécurité</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Monitoring:</h5>
            <ul className="space-y-1 text-blue-700">
              <li>• Prometheus + Grafana</li>
              <li>• Docker stats</li>
              <li>• cAdvisor pour métriques</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
