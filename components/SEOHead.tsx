import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../App';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalUrl }) => {
  const { language } = useLanguage();
  const siteName = "Alura";
  
  const finalTitle = title ? `${title} | ${siteName}` : `${siteName} - Salud y Bienestar`;
  const finalDesc = description || (language === 'es' 
    ? "Consejos de salud, nutrición y hábitos para una vida mejor."
    : "Health, nutrition, and habits advice for a better life.");

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <html lang={language} />
    </Helmet>
  );
};