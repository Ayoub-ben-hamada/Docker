import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaUser, FaCode, FaGraduationCap, FaQrcode, FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [showQR, setShowQR] = useState(null);

  // Fonction pour générer QR code via API externe
  const generateQRCode = (url, size = 200) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&format=png&margin=10`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mohamed-ayoub-ben-hameda-67a303310/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      description: 'Profil professionnel et réseau',
      qrEnabled: true
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Ayoub-ben-hamada',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50 hover:bg-gray-100',
      description: 'Projets et contributions open source',
      qrEnabled: true
    },
    {
      name: 'Portfolio',
      icon: FaUser,
      url: 'https://iamayoub.netlify.app/',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      description: 'Portfolio personnel et projets',
      qrEnabled: false
    }
  ];

  const skills = [
    'React & JavaScript',
    'Docker & DevOps',
    'Node.js & Backend',
    'UI/UX Design',
    'Cloud Computing',
    'Big Data Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <FaUser className="text-5xl text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ayoub Ben Hamada
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Développeur Full-Stack passionné par les technologies modernes et l'innovation éducative
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div className="grid md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border border-gray-200 ${link.bgColor} transition-all duration-300 group relative`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between mb-4">
                <link.icon className={`text-3xl ${link.color}`} />
                <div className="flex gap-2">
                  {link.qrEnabled && (
                    <motion.button
                      onClick={() => setShowQR({ url: link.url, name: link.name })}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaQrcode className="text-lg" />
                    </motion.button>
                  )}
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </motion.a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {link.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">
                {link.description}
              </p>
              
              {link.qrEnabled && (
                <div className="flex items-center text-xs text-gray-500">
                  <FaQrcode className="mr-1" />
                  <span>Cliquez sur le QR pour scanner</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* QR Code Modal */}
        {showQR && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                QR Code - {showQR.name}
              </h3>
              
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <img 
                    src={generateQRCode(showQR.url, 200)}
                    alt={`QR Code pour ${showQR.name}`}
                    className="w-[200px] h-[200px]"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23f3f4f6'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'>QR Code non disponible</text></svg>`;
                    }}
                  />
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Scannez ce QR code avec votre téléphone pour accéder directement à mon profil {showQR.name}
              </p>
              
              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                <strong>URL:</strong> {showQR.url}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* QR Codes Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <FaQrcode className="mr-3 text-blue-600" />
            QR Codes - Accès rapide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {socialLinks.filter(link => link.qrEnabled).map((link, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <link.icon className={`text-2xl ${link.color} mr-2`} />
                  <h3 className="text-lg font-bold text-gray-800">{link.name}</h3>
                </div>
                
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <img 
                      src={generateQRCode(link.url, 120)}
                      alt={`QR Code pour ${link.name}`}
                      className="w-[120px] h-[120px]"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23f3f4f6'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'>QR Code</text></svg>`;
                      }}
                    />
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  Scannez pour accéder à mon profil {link.name}
                </p>
                
                <motion.button
                  onClick={() => setShowQR({ url: link.url, name: link.name })}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Agrandir le QR code
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              💡 <strong>Astuce :</strong> Utilisez l'appareil photo de votre téléphone pour scanner directement les QR codes
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaCode className="mr-3 text-blue-600" />
                À propos de moi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Passionné par le développement web et les technologies de conteneurisation, 
                je crée des applications modernes qui allient performance et expérience utilisateur exceptionnelle.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cette application éducative sur Docker illustre ma capacité à transformer 
                des concepts techniques complexes en expériences d'apprentissage interactives et engageantes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaGraduationCap className="mr-3 text-purple-600" />
                Expertise technique
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">React & Frontend</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Data science </span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Big Data</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">AI</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Direct */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          variants={itemVariants}
        >
          <FaEnvelope className="text-4xl mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">
            Collaborons ensemble !
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Intéressé par mes projets ou souhaitez discuter d'opportunités ? 
            N'hésitez pas à me contacter via LinkedIn ou à explorer mes projets sur GitHub.
          </p>
          <motion.a
            href="mailto:mohamed.ayoub.bh@gmail.com" // Remplacez par votre email
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="mr-2" />
            Me contacter par email
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-gray-200"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm">
            © 2025 Mohamed Ayoub Ben Hamada. Développé avec React, Docker et beaucoup de passion taraji ya dawla
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
