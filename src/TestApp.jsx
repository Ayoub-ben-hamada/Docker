import React from 'react';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧪 Test de l'application Docker</h1>
      
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h2>✅ Tests de base</h2>
        <p>✓ React fonctionne</p>
        <p>✓ CSS fonctionne</p>
        <p>✓ Composant rendu</p>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '8px' }}>
        <h2>🔧 QR Codes corrigés</h2>
        <p>✓ Suppression de la dépendance qrcode.react</p>
        <p>✓ Utilisation de l'API QR Server</p>
        <p>✓ Fallback en cas d'erreur</p>
        
        <div style={{ marginTop: '10px' }}>
          <h3>Test QR Code :</h3>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://github.com/Ayoub-ben-hamada&format=png&margin=10"
            alt="Test QR Code"
            style={{ border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <p style={{ fontSize: '12px', color: '#666' }}>QR Code pour GitHub</p>
        </div>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#fefce8', borderRadius: '8px' }}>
        <h2>🚀 Prochaines étapes</h2>
        <p>1. Vérifier que toutes les pages fonctionnent</p>
        <p>2. Tester la navigation</p>
        <p>3. Valider les QR codes</p>
        <p>4. Préparer pour la démonstration</p>
      </div>
    </div>
  );
};

export default TestApp;
