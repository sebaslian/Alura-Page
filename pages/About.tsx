import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { SEOHead } from '../components/SEOHead';
import { Instagram, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead 
        title={language === 'es' ? "Sobre mí - Sebastián" : "About Me - Sebastián"} 
        description={language === 'es' 
          ? "Conoce a Sebastián, fundador de Alura. De la vida corporativa agitada a encontrar el equilibrio en salud y bienestar." 
          : "Meet Sebastián, founder of Alura. From busy corporate life to finding balance in health and wellness."}
      />
      
      <div className="bg-white min-h-screen">
        {/* Hero / Intro Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* PHOTO PLACEHOLDER - UX: Visual connection is key */}
            <div className="md:col-span-5 relative group">
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl rotate-2 group-hover:rotate-0 transition-all duration-500 ease-out border-4 border-white">
                <img 
                  src="images/about/sebastian.jpg" 
                  alt="Sebastián - Founder of Alura" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    // Fallback to previous image if local file is missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-100 rounded-full -z-10 blur-xl"></div>
            </div>

            {/* BIO & STORY - Copywriting: Vulnerability & Connection */}
            <div className="md:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
                {language === 'es' ? "Hola, soy Sebastián." : "Hi, I'm Sebastián."}
              </h1>
              
              <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed">
                {language === 'es' ? (
                  <>
                    <p className="font-medium text-gray-800 text-xl">
                      Durante años, fui esa persona que iniciaba una dieta el lunes y la abandonaba el miércoles.
                    </p>
                    <p>
                      Mi vida era una carrera constante contra el reloj. Entre reuniones, plazos de entrega y el estrés diario, mi salud siempre quedaba en último lugar. Intenté planes estrictos, batidos "milagrosos" y rutinas de gimnasio imposibles. ¿El resultado? Frustración y culpa.
                    </p>
                    <p>
                      Me di cuenta de que el problema no era yo, sino el enfoque. La salud no debería ser una carga más en una agenda ocupada.
                    </p>
                    <p>
                      Así nació <strong>Alura</strong>. No soy médico ni gurú. Soy alguien como tú que encontró la manera de integrar hábitos saludables en una vida real y caótica.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-medium text-gray-800 text-xl">
                      For years, I was that person who started a diet on Monday and quit by Wednesday.
                    </p>
                    <p>
                      My life was a constant race against the clock. Between meetings, deadlines, and daily stress, my health always came last. I tried strict plans, "miracle" shakes, and impossible gym routines. The result? Frustration and guilt.
                    </p>
                    <p>
                      I realized the problem wasn't me, but the approach. Health shouldn't be another burden on a busy schedule.
                    </p>
                    <p>
                      That's how <strong>Alura</strong> was born. I'm not a doctor or a guru. I'm someone like you who found a way to integrate healthy habits into a real, chaotic life.
                    </p>
                  </>
                )}
              </div>

              {/* Signature / Personal Touch */}
              <div className="pt-4">
                 <p className="font-serif italic text-brand-700 text-lg">
                   Sebastian.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values Section - EEAT Confirmation */}
        <div className="bg-gray-50 border-t border-gray-100 py-20">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Quote size={40} className="text-brand-300 mx-auto mb-6" fill="currentColor" />
              
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
                {language === 'es' ? "Nuestra Filosofía" : "Our Philosophy"}
              </h2>
              
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                {language === 'es'
                  ? "En Alura, hacemos que el bienestar sea real y alcanzable. Filtramos el ruido de internet para traerte consejos basados en evidencia, pero explicados de persona a persona. Sin juicios, sin perfeccionismo."
                  : "At Alura, we make wellness real and achievable. We filter through the internet noise to bring you evidence-based advice, but explained from one human to another. No judgment, no perfectionism."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {[
                  { 
                    title: language === 'es' ? "Realista" : "Realistic", 
                    desc: language === 'es' ? "Consejos que caben en tu agenda." : "Advice that fits your schedule." 
                  },
                  { 
                    title: language === 'es' ? "Verificado" : "Verified", 
                    desc: language === 'es' ? "Información contrastada, sin mitos." : "Fact-checked info, no myths." 
                  },
                  { 
                    title: language === 'es' ? "Humano" : "Human", 
                    desc: language === 'es' ? "Entendemos que a veces comerás pizza." : "We understand you'll eat pizza sometimes." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 text-center">
           <h3 className="text-lg font-bold text-gray-900 mb-6">
             {language === 'es' ? "¿Quieres charlar?" : "Want to chat?"}
           </h3>
           <div className="flex justify-center gap-4">
              <Link to="/contact" className="p-3 bg-white border border-gray-200 rounded-full hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm">
                <Instagram size={20} />
              </Link>
           </div>
        </div>

      </div>
    </>
  );
};