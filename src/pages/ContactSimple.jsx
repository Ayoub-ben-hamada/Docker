import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaUser, FaExternalLinkAlt } from 'react-icons/fa';

const ContactSimple = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mohamed-ayoub-ben-hameda-67a303310/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Ayoub-ben-hamada',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Portfolio',
      icon: FaUser,
      url: 'https://iamayoub.netlify.app/',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <FaUser className="text-5xl text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ayoub Ben Hamada
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Développeur Full-Stack passionné par les technologies modernes et l'innovation éducative
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border border-gray-200 ${link.bgColor} hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-4">
                <link.icon className={`text-3xl ${link.color}`} />
                <FaExternalLinkAlt className="text-gray-400" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {link.name}
              </h3>
              
              <p className="text-gray-600 text-sm">
                Cliquez pour accéder à mon profil
              </p>
            </motion.a>
          ))}
        </div>

        {/* QR Codes Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            📱 QR Codes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-600 mb-4">LinkedIn</h3>
              <div className="bg-gray-50 p-4 rounded-lg inline-block">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/mohamed-ayoub-ben-hameda-67a303310/&format=png&margin=10"
                  alt="QR Code LinkedIn"
                  className="w-[150px] h-[150px]"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Scannez pour accéder à LinkedIn</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">GitHub</h3>
              <div className="bg-gray-50 p-4 rounded-lg inline-block">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/Ayoub-ben-hamada&format=png&margin=10"
                  alt="QR Code GitHub"
                  className="w-[150px] h-[150px]"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Scannez pour accéder à GitHub</p>
            </div>
          </div>
        </div>

        {/* Contact Direct */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <FaEnvelope className="text-4xl mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">
            Collaborons ensemble !
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Intéressé par mes projets ou souhaitez discuter d'opportunités ?
          </p>
          <a
            href="mailto:mohamed.ayoub.bh@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Me contacter par email
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2025 Mohamed Ayoub Ben Hamada. Développé avec React, Docker et beaucoup de passion ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSimple;
