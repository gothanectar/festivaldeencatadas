import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p className="text-sm">
        Usamos cookies para melhorar sua experiência.{' '}
        <a href="#privacy" className="underline hover:text-yellow-300">
          Saiba mais
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="bg-orange-500 text-white px-4 py-2 mt-2 rounded hover:bg-orange-600 transition-all duration-300"
      >
        Aceitar
      </button>
    </div>
  );
};

export default CookieBanner; 