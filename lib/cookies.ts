export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
};

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return null;
  
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
}

export function hasCookieConsent(type: keyof CookieConsent): boolean {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent[type];
}