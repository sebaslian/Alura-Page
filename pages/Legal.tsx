import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../App';
import { SEOHead } from '../components/SEOHead';
import { UI_TEXT } from '../constants';

export const Legal: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const path = location.pathname;

  let title = "Legal";
  let content = "";

  if (path === '/privacy') {
    title = UI_TEXT.footer_privacy[language];
    content = language === 'es' 
      ? `
        <p>En Alura, valoramos y respetamos tu privacidad. Esta política explica cómo manejamos tu información.</p>
        
        <h3>1. Recopilación de Información</h3>
        <p>No recopilamos información personal identificable (como tu nombre o dirección) a menos que nos la proporciones voluntariamente, por ejemplo, al suscribirte a nuestra newsletter. En ese caso, solo guardamos tu dirección de correo electrónico para enviarte las comunicaciones solicitadas.</p>
        
        <h3>2. Uso de Datos Técnicos</h3>
        <p>Utilizamos herramientas estándar de análisis para entender cómo los visitantes usan nuestro sitio (páginas visitadas, tiempo de estancia). Estos datos son anónimos y nos ayudan a mejorar el contenido.</p>
        
        <h3>3. Tus Derechos</h3>
        <p>Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Si deseas darte de baja de nuestra newsletter, puedes hacerlo mediante el enlace incluido en cada correo.</p>
      `
      : `
        <p>At Alura, we value and respect your privacy. This policy explains how we handle your information.</p>
        
        <h3>1. Information Collection</h3>
        <p>We do not collect personally identifiable information (such as your name or address) unless you voluntarily provide it to us, for example, by subscribing to our newsletter. In that case, we only store your email address to send you the requested communications.</p>
        
        <h3>2. Use of Technical Data</h3>
        <p>We use standard analytics tools to understand how visitors use our site (pages visited, time spent). This data is anonymous and helps us improve our content.</p>
        
        <h3>3. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal information at any time. If you wish to unsubscribe from our newsletter, you can do so via the link included in each email.</p>
      `;
  } else if (path === '/terms') {
    title = UI_TEXT.footer_terms[language];
    content = language === 'es'
      ? `
        <p>Bienvenido a Alura. Al acceder a este sitio web, aceptas los siguientes términos y condiciones.</p>

        <h3>1. Propósito Educativo e Informativo (Descargo de Responsabilidad)</h3>
        <p><strong>Importante:</strong> Todo el contenido publicado en Alura tiene fines puramente informativos, educativos y de entretenimiento. <strong>No constituye consejo médico, diagnóstico ni tratamiento profesional.</strong></p>
        <p>Siempre debes consultar a un médico o profesional de la salud calificado antes de realizar cambios significativos en tu dieta, rutina de ejercicios o estilo de vida. Alura y sus autores no se hacen responsables de las acciones tomadas basándose en la información de este sitio.</p>

        <h3>2. Propiedad Intelectual</h3>
        <p>El contenido, diseño y logotipos de este sitio son propiedad de Alura, a menos que se indique lo contrario. No está permitida la reproducción comercial sin permiso explícito.</p>

        <h3>3. Uso del Sitio</h3>
        <p>Te comprometes a utilizar este sitio web solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de terceros.</p>
      `
      : `
        <p>Welcome to Alura. By accessing this website, you agree to the following terms and conditions.</p>

        <h3>1. Educational and Informational Purpose (Disclaimer)</h3>
        <p><strong>Important:</strong> All content published on Alura is for purely informational, educational, and entertainment purposes. <strong>It does not constitute professional medical advice, diagnosis, or treatment.</strong></p>
        <p>You should always consult a qualified physician or health professional before making significant changes to your diet, exercise routine, or lifestyle. Alura and its authors are not responsible for actions taken based on the information on this site.</p>

        <h3>2. Intellectual Property</h3>
        <p>The content, design, and logos of this site are the property of Alura, unless otherwise stated. Commercial reproduction without explicit permission is not allowed.</p>

        <h3>3. Site Usage</h3>
        <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
      `;
  } else if (path === '/cookies') {
    title = UI_TEXT.footer_cookies[language];
    content = language === 'es'
      ? `
        <p>Esta web utiliza cookies para mejorar tu experiencia de navegación.</p>

        <h3>¿Qué son las cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo. No pueden acceder a tus archivos ni dañar tu computadora.</p>

        <h3>¿Qué cookies usamos?</h3>
        <ul>
          <li><strong>Esenciales:</strong> Necesarias para que el sitio funcione correctamente (ej. recordar tu preferencia de idioma).</li>
          <li><strong>Analíticas:</strong> Nos ayudan a entender qué artículos son más populares para crear mejor contenido.</li>
        </ul>

        <h3>Control de Cookies</h3>
        <p>Puedes configurar tu navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie. Sin embargo, algunas funciones del sitio podrían no funcionar correctamente sin ellas.</p>
      `
      : `
        <p>This website uses cookies to improve your browsing experience.</p>

        <h3>What are cookies?</h3>
        <p>Cookies are small text files that websites save on your device. They cannot access your files or harm your computer.</p>

        <h3>What cookies do we use?</h3>
        <ul>
          <li><strong>Essential:</strong> Necessary for the site to function correctly (e.g., remembering your language preference).</li>
          <li><strong>Analytics:</strong> Help us understand which articles are most popular to create better content.</li>
        </ul>

        <h3>Cookie Control</h3>
        <p>You can configure your browser to refuse all cookies or to indicate when a cookie is being sent. However, some site features may not function properly without them.</p>
      `;
  }

  return (
    <>
      <SEOHead title={title} />
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">{title}</h1>
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
           <p className="text-sm text-gray-500 mb-6">
             <strong>{language === 'es' ? 'Última actualización:' : 'Last Updated:'} {new Date().toLocaleDateString()}</strong>
           </p>
           
           <div 
             className="prose prose-lg prose-gray text-gray-600 max-w-none prose-h3:text-gray-900 prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed"
             dangerouslySetInnerHTML={{ __html: content }}
           />

           <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-center">
             <p className="text-xs text-gray-400 italic text-center max-w-md">
               {language === 'es' 
                 ? "Alura Digital Wellness. Información confiable para tu bienestar." 
                 : "Alura Digital Wellness. Trusted information for your wellbeing."}
             </p>
           </div>
        </div>
      </div>
    </>
  );
};