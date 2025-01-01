'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CookieIcon, ShieldCheckIcon } from 'lucide-react';

type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      analytics: true,
      marketing: true,
      necessary: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const consent: CookieConsent = {
      analytics: false,
      marketing: false,
      necessary: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/95 backdrop-blur-sm border rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <CookieIcon className="w-6 h-6 text-primary" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Paramètres des cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                  </p>
                  
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mb-4 space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-secondary" />
                        <p className="text-sm">
                          <span className="font-medium">Cookies nécessaires :</span>
                          {' '}Essentiels au fonctionnement du site
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-secondary" />
                        <p className="text-sm">
                          <span className="font-medium">Cookies analytiques :</span>
                          {' '}Pour comprendre l'utilisation du site
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-secondary" />
                        <p className="text-sm">
                          <span className="font-medium">Cookies marketing :</span>
                          {' '}Pour personnaliser votre expérience
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      onClick={handleAcceptAll}
                    >
                      Accepter tout
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary/50 hover:border-primary"
                      onClick={handleAcceptNecessary}
                    >
                      Accepter nécessaires
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setShowDetails(!showDetails)}
                    >
                      {showDetails ? 'Masquer les détails' : 'Voir les détails'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}