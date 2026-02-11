import { Article, SiteConfig, Translation } from './types';
import { Leaf, Zap, Heart, Utensils } from 'lucide-react';

export const SITE_CONFIG: SiteConfig = {
  name: "Alura",
  socialProof: {
    users: 5000,
    rating: 4.9,
    articles: 50
  }
};

export const UI_TEXT: Translation = {
  // Navigation
  nav_home: { es: "Inicio", en: "Home" },
  nav_nutrition: { es: "Nutrición", en: "Nutrition" },
  nav_habits: { es: "Hábitos", en: "Habits" },
  nav_energy: { es: "Energía", en: "Energy" },
  nav_recipes: { es: "Recetas", en: "Recipes" },
  nav_about: { es: "Sobre mí", en: "About Me" },
  nav_coming_soon: { es: "Próximamente", en: "Coming Soon" },
  btn_subscribe: { es: "Suscríbete", en: "Subscribe" },
  
  // Home - Hero
  hero_title: { es: "Transforma tu vida, un hábito a la vez", en: "Transform your life, one habit at a time" },
  hero_subtitle: { es: "Consejos prácticos de salud y bienestar para personas reales. Sin tecnicismos, solo resultados.", en: "Practical health and wellness advice for real people. No jargon, just results." },
  hero_verified_badge: { es: "Contenido 100% Verificado", en: "100% Verified Content" },
  hero_readers_count: { es: "Más de 5.000 Lectores", en: "5.000+ Readers" },
  hero_visual_badge_title: { es: "Energía Vital", en: "Energy Boost" },
  hero_visual_badge_desc: { es: "Métodos científicos para aumentar tu rendimiento diario.", en: "Scientifically proven methods to increase daily output." },
  
  // Home - CTAs & Sections
  cta_explore: { es: "Explorar artículos", en: "Explore Articles" },
  cta_guide: { es: "Recibir guía gratuita", en: "Get Free Guide" },
  cat_explore_label: { es: "Explorar", en: "Explore" },
  
  // REPLACED: section_featured -> section_trending (SEO optimization)
  section_trending: { es: "Artículos en Tendencia", en: "Trending Articles" },
  section_trending_sub: { es: "Lo que nuestra comunidad está leyendo ahora mismo.", en: "What our community is reading right now." },
  
  // NEW: Latest Articles Section
  section_latest: { es: "Lo Más Reciente", en: "Latest Stories" },
  section_latest_sub: { es: "Nuevas publicaciones para mantenerte al día.", en: "Fresh posts to keep you updated." },
  
  btn_view_all: { es: "Ver todos los artículos", en: "View all articles" },
  
  // Common
  ad_label: { es: "Publicidad", en: "Advertisement" },
  read_more: { es: "Leer más", en: "Read more" },
  min_read: { es: "min de lectura", en: "min read" },
  date_format_locale: { es: "es-ES", en: "en-US" }, // For date formatting if needed

  // Article Page - UPDATED ROLE
  article_author_role: { es: "Fundador de Alura", en: "Founder of Alura" },
  article_liked_title: { es: "¿Te ha gustado este artículo?", en: "Did you like this article?" },
  article_liked_subtitle: { es: "Suscríbete para recibir más consejos semanales.", en: "Subscribe to get more weekly tips." },
  article_tags_label: { es: "Etiquetas:", en: "Tags:" },
  article_bio_link: { es: "Leer biografía completa", en: "Read full bio" },

  // Sidebar (Article)
  sidebar_trending: { es: "Más Leídos", en: "Trending Now" },
  sidebar_cta_title: { es: "Guía de Bienestar Gratuita", en: "Free Wellness Guide" },
  sidebar_cta_desc: { es: "Transforma tus hábitos en 7 días.", en: "Transform your habits in 7 days." },
  sidebar_cta_btn: { es: "Descargar Ahora", en: "Download Now" },

  // Category Page
  cat_hero_desc_prefix: { es: "Explora nuestra colección curada de artículos sobre", en: "Explore our curated collection of articles about" },
  cat_hero_desc_suffix: { es: "Información verificada para mejorar tu calidad de vida.", en: "Verified information to improve your quality of life." },
  cat_not_found: { es: "No se encontraron artículos en esta categoría.", en: "No articles found in this category." },
  btn_go_home: { es: "Ir al Inicio", en: "Go Home" },
  
  // Footer
  footer_about: { es: "Sobre Nosotros", en: "About Us" },
  footer_description: { 
    es: "Hacemos que el bienestar sea real y alcanzable con información clara, respaldada y accesible. Tu guía diaria hacia una vida más saludable y energética.", 
    en: "We make wellness real and achievable with clear, backed, and accessible information. Your daily guide to a healthier, more energetic life." 
  },
  footer_legal: { es: "Legal y Confianza", en: "Legal & Trust" },
  footer_privacy: { es: "Política de Privacidad", en: "Privacy Policy" },
  footer_terms: { es: "Términos de Uso", en: "Terms of Use" },
  footer_cookies: { es: "Política de Cookies", en: "Cookie Policy" },
  footer_contact: { es: "Contacto", en: "Contact" },
  footer_rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  footer_language_selector: { es: "Idioma", en: "Language" },
  footer_disclaimer: { es: "La información proporcionada en Alura es solo para fines educativos e informativos y no sustituye el consejo médico profesional.", en: "The information provided on Alura is for educational and informational purposes only and does not substitute professional medical advice." },
  
  // Newsletter - UPDATED FOR COPYWRITING & SEO
  newsletter_title: { es: "Próximamente: Tu Newsletter Semanal", en: "Coming Soon: Your Weekly Newsletter" },
  newsletter_desc: { es: "Estamos preparando la mejor dosis semanal de salud, hábitos y energía. ¡Apúntate ahora para ser de los primeros en recibirla cuando lancemos!", en: "We are preparing the best weekly dose of health, habits, and energy. Sign up now to be among the first to receive it when we launch!" },
  newsletter_placeholder: { es: "Tu mejor correo electrónico", en: "Your best email address" },
  newsletter_success: { es: "¡Estás dentro! Te avisaremos en cuanto lancemos la primera edición.", en: "You're in! We'll notify you as soon as we launch the first edition." },
  newsletter_button_loading: { es: "Apuntándome...", en: "Signing up..." },

  // Modal (Lead Magnet)
  modal_title: { es: "Guía Gratuita", en: "Free Guide" },
  modal_subtitle: { es: "7 Días para Más Energía", en: "7 Days to More Energy" },
  modal_desc: { es: "Descubre cambios simples que puedes implementar hoy mismo para sentirte con más energía cada día.", en: "Discover simple changes you can implement today to feel more energetic every day." },
  modal_benefit_1: { es: "7 estrategias probadas científicamente", en: "7 scientifically proven strategies" },
  modal_benefit_2: { es: "Rutinas de 5 minutos para mañanas ocupadas", en: "5-minute routines for busy mornings" },
  modal_benefit_3: { es: "PDF descargable de alta calidad", en: "High-quality downloadable PDF" },
  modal_cta: { es: "¡Quiero la Guía!", en: "Get the Guide!" },
  modal_success_title: { es: "¡Ya es tuya!", en: "It's yours!" },
  modal_success_desc: { es: "Revisa tu correo. Te hemos enviado el enlace de descarga.", en: "Check your email. We've sent you the download link." },

  // Contact Page
  contact_title: { es: "Hablemos de Salud", en: "Let's Talk Health" },
  contact_subtitle: { es: "¿Tienes preguntas, sugerencias o quieres colaborar? Estamos aquí para escucharte.", en: "Have questions, suggestions, or want to collaborate? We're here to listen." },
  form_name: { es: "Nombre completo", en: "Full Name" },
  form_email: { es: "Correo electrónico", en: "Email Address" },
  form_message: { es: "Tu mensaje", en: "Your Message" },
  form_submit: { es: "Enviar Mensaje", en: "Send Message" },
  form_sending: { es: "Enviando...", en: "Sending..." },
  form_success_title: { es: "¡Mensaje Enviado!", en: "Message Sent!" },
  form_success_desc: { es: "Gracias por contactarnos. Te responderemos en breve.", en: "Thanks for contacting us. We will reply shortly." },
  contact_email_label: { es: "Escríbenos directamente", en: "Email us directly" },
  contact_community_label: { es: "Únete a la conversación", en: "Join the conversation" },

  // Coming Soon Page
  cs_title: { es: "Próximamente en Alura", en: "Coming Soon to Alura" },
  cs_subtitle: { es: "Estamos trabajando en nuevos recursos para potenciar tu salud y bienestar.", en: "We are working on new resources to boost your health and wellness." },
  cs_trainings: { es: "Entrenamientos", en: "Workouts" },
  cs_brands: { es: "Marcas recomendadas", en: "Recommended Brands" },
  cs_guides: { es: "Guías descargables", en: "Downloadable Guides" },
  cs_challenges: { es: "Retos mensuales", en: "Monthly Challenges" },
  cs_resources: { es: "Recursos gratuitos", en: "Free Resources" },
  cs_premium: { es: "Programas premium", en: "Premium Programs" },
  cs_collabs: { es: "Colaboraciones futuras", en: "Future Collaborations" },
};

// Global Tags for Articles
export const ARTICLE_TAGS: Record<string, { es: string; en: string }> = {
  wellness: { es: "Bienestar", en: "Wellness" },
  health: { es: "Salud", en: "Health" },
  nutrition: { es: "Nutrición", en: "Nutrition" },
  year: { es: "2025", en: "2025" }
};

export const CATEGORIES = [
  { id: 'nutrition', label: { es: "Nutrición", en: "Nutrition" }, icon: Leaf, color: "text-green-600" },
  { id: 'habits', label: { es: "Hábitos", en: "Habits" }, icon: Heart, color: "text-rose-500" },
  { id: 'energy', label: { es: "Energía", en: "Energy" }, icon: Zap, color: "text-yellow-500" },
  { id: 'recipes', label: { es: "Recetas", en: "Recipes" }, icon: Utensils, color: "text-orange-500" }
] as const;

// SAFE FALLBACK IMAGE CONSTANT
const FALLBACK_IMG = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800"; // Healthy food/table generic

export const MOCK_ARTICLES: Article[] = [
  // --- NUTRITION SECTION ---
  {
    id: 'nut-1',
    slug: 'real-food-guide',
    category: 'nutrition',
    title: {
      es: "Comida Real: La guía definitiva para dejar los procesados",
      en: "Real Food: The Ultimate Guide to Quitting Processed Foods"
    },
    excerpt: {
      es: "No necesitas una dieta estricta, necesitas volver a lo básico. Aprende a identificar la 'comida real' y transforma tu salud sin pasar hambre.",
      en: "You don't need a strict diet, you need to get back to basics. Learn to identify 'real food' and transform your health without going hungry."
    },
    content: {
      es: `
        <p class="lead">Vivimos rodeados de paquetes brillantes y promesas de salud en cajas de cartón. Pero la verdadera revolución nutricional no está en un superalimento exótico, sino en volver a lo básico: la comida real. Si has intentado contar calorías sin éxito, este enfoque cambiará tu perspectiva.</p>
        
        <h2>¿Qué es realmente la "Comida Real"?</h2>
        <p>El concepto es simple pero poderoso: si viene de una planta, cómelo. Si fue hecho en una planta, piénsalo dos veces. La comida real se refiere a ingredientes mínimamente procesados que conservan su matriz nutricional original.</p>
        <p>Piensa en una manzana vs. un jugo de manzana en caja. La manzana tiene fibra, vitaminas intactas y te sacia. El jugo es mayormente azúcar libre sin la fibra que ralentiza su absorción. Ese pequeño cambio hace toda la diferencia en tu insulina y tu energía.</p>
        
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Mercado de comida real" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Cómo leer etiquetas sin volverte loco</h2>
        <p>La industria alimentaria es experta en camuflar ingredientes. Aquí tienes una regla de oro para tu próxima visita al supermercado: <strong>La regla de los 5 ingredientes.</strong></p>
        <ul>
          <li>Si tiene más de 5 ingredientes, probablemente sea un ultraprocesado.</li>
          <li>Si el azúcar está en los 3 primeros lugares, es un postre, no un alimento.</li>
          <li>Si no puedes pronunciar el ingrediente, tu cuerpo probablemente no sepa qué hacer con él.</li>
        </ul>

        <h2>Pequeños cambios, grandes resultados</h2>
        <p>No intentes cambiar tu despensa en un día. Empieza sustituyendo los snacks. En lugar de galletas "digestivas" (que suelen tener tanta azúcar como las normales), opta por un puñado de nueces o una fruta. Tu paladar se adaptará y, en dos semanas, lo artificial te sabrá excesivamente dulce.</p>
        
        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Tu reto de hoy:</p>
          <p class="mt-2 mb-0">En tu próxima comida, asegúrate de que al menos el 50% del plato sean vegetales frescos. Es la forma más simple de reducir la densidad calórica y aumentar la saciedad.</p>
        </div>
      `,
      en: `
        <p class="lead">We live surrounded by shiny packages and health promises on cardboard boxes. But the true nutritional revolution isn't in an exotic superfood, but in getting back to basics: real food. If you've tried counting calories without success, this approach will change your perspective.</p>
        
        <h2>What is "Real Food" Really?</h2>
        <p>The concept is simple but powerful: if it comes from a plant, eat it. If it was made in a plant, think twice. Real food refers to minimally processed ingredients that retain their original nutritional matrix.</p>
        <p>Think of an apple vs. boxed apple juice. The apple has fiber, intact vitamins, and satiates you. The juice is mostly free sugar without the fiber that slows down its absorption. That small change makes all the difference in your insulin and energy.</p>
        
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Real food market" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>How to Read Labels Without Going Crazy</h2>
        <p>The food industry is expert at camouflaging ingredients. Here is a golden rule for your next supermarket visit: <strong>The 5 Ingredient Rule.</strong></p>
        <ul>
          <li>If it has more than 5 ingredients, it's probably ultra-processed.</li>
          <li>If sugar is in the top 3 spots, it's a dessert, not a food.</li>
          <li>If you can't pronounce the ingredient, your body probably doesn't know what to do with it.</li>
        </ul>

        <h2>Small Changes, Big Results</h2>
        <p>Don't try to change your pantry in a day. Start by swapping snacks. Instead of "digestive" biscuits (which often have as much sugar as regular ones), opt for a handful of nuts or a fruit. Your palate will adapt, and in two weeks, artificial foods will taste excessively sweet.</p>
        
        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Your Challenge Today:</p>
          <p class="mt-2 mb-0">In your next meal, ensure at least 50% of the plate is fresh vegetables. It's the simplest way to reduce calorie density and increase satiety.</p>
        </div>
      `
    },
    author: "Sebastián",
    date: "2025-02-10",
    imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800",
    readTime: 6
  },
  {
    id: 'nut-2',
    slug: 'glucose-spikes-energy',
    category: 'nutrition',
    title: { es: "Picos de Glucosa: Por qué tienes sueño después de comer", en: "Glucose Spikes: Why You Get Sleepy After Eating" },
    excerpt: { es: "¿Sientes un bajón de energía a las 4 PM? No es pereza, es biología. Descubre cómo aplanar tu curva de glucosa y recuperar tu energía.", en: "Do you feel an energy crash at 4 PM? It's not laziness, it's biology. Discover how to flatten your glucose curve and reclaim your energy." },
    content: { 
      es: `
        <p class="lead">Esa sensación de niebla mental y pesadez justo después de almorzar tiene un nombre: hipoglucemia reactiva. Y no, la solución no es otro café. Es entender cómo funciona tu combustible interno.</p>

        <h2>La Montaña Rusa del Azúcar</h2>
        <p>Cuando comemos carbohidratos simples (pan blanco, pasta, azúcar) con el estómago vacío, nuestra glucosa en sangre se dispara. Tu cuerpo, en pánico, libera insulina para bajar esos niveles. El problema es que a menudo la insulina "se pasa" de frenada, provocando una caída brusca de azúcar poco después.</p>
        <p>Ese bajón es lo que te hace buscar desesperadamente una galleta a las 4 de la tarde. No es falta de fuerza de voluntad, es tu cerebro pidiendo glucosa urgente.</p>

        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" alt="Ensalada equilibrada" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>3 Trucos para Aplanar la Curva</h2>
        <p>No tienes que dejar de comer lo que te gusta, solo tienes que cambiar <strong>cómo</strong> lo comes. La bioquímica de la digestión es fascinante y hackeable.</p>
        
        <h3>1. Ropa para tus carbohidratos</h3>
        <p>Nunca comas carbohidratos "desnudos". Si vas a comer una tostada, ponle aguacate (grasa) o huevo (proteína). La grasa, la proteína y la fibra ralentizan la absorción del azúcar en tu sangre.</p>

        <h3>2. El orden de los factores sí altera el producto</h3>
        <p>Intenta comer en este orden siempre que puedas:</p>
        <ol>
            <li><strong>Fibra primero:</strong> Empieza con una ensalada o vegetales.</li>
            <li><strong>Proteínas y grasas:</strong> Carne, pescado, huevos, aceite de oliva.</li>
            <li><strong>Carbohidratos y azúcares al final:</strong> Arroz, postre o fruta.</li>
        </ol>
        <p>Esta "barrera de fibra" en tu intestino reduce el pico de glucosa hasta en un 70%, según estudios recientes.</p>

        <h3>3. Muévete 10 minutos</h3>
        <p>Después de comer, tus músculos están deseando combustible. Una caminata de 10 minutos le indica a tu cuerpo que use esa glucosa entrante como energía inmediata en lugar de almacenarla. Incluso fregar los platos o bailar una canción cuenta.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Conclusión práctica:</p>
          <p class="mt-2 mb-0">Antes de tu próximo plato de pasta, cómete un plato pequeño de brócoli o una ensalada verde con vinagre. Tu cerebro te lo agradecerá toda la tarde.</p>
        </div>
      `, 
      en: `
        <p class="lead">That brain fog and heaviness right after lunch has a name: reactive hypoglycemia. And no, the solution isn't another coffee. It's understanding how your internal fuel works.</p>

        <h2>The Sugar Rollercoaster</h2>
        <p>When we eat simple carbohydrates (white bread, pasta, sugar) on an empty stomach, our blood glucose spikes. Your body, in panic, releases insulin to bring those levels down. The problem is that insulin often "overshoots," causing a sharp drop in sugar shortly after.</p>
        <p>That crash is what makes you desperately search for a cookie at 4 PM. It's not a lack of willpower, it's your brain screaming for urgent glucose.</p>

        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" alt="Balanced salad" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>3 Hacks to Flatten the Curve</h2>
        <p>You don't have to stop eating what you like, you just have to change <strong>how</strong> you eat it. The biochemistry of digestion is fascinating and hackable.</p>
        
        <h3>1. Dress your carbs</h3>
        <p>Never eat "naked" carbs. If you're going to have toast, add avocado (fat) or egg (protein). Fat, protein, and fiber slow down the absorption of sugar into your blood.</p>

        <h3>2. The order matters</h3>
        <p>Try to eat in this order whenever you can:</p>
        <ol>
            <li><strong>Fiber first:</strong> Start with a salad or vegetables.</li>
            <li><strong>Proteins and fats:</strong> Meat, fish, eggs, olive oil.</li>
            <li><strong>Carbs and sugars last:</strong> Rice, dessert, or fruit.</li>
        </ol>
        <p>This "fiber barrier" in your gut reduces the glucose spike by up to 70%, according to recent studies.</p>

        <h3>3. Move for 10 minutes</h3>
        <p>After eating, your muscles are craving fuel. A 10-minute walk signals your body to use that incoming glucose as immediate energy instead of storing it. Even doing the dishes or dancing to a song counts.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Practical Takeaway:</p>
          <p class="mt-2 mb-0">Before your next bowl of pasta, eat a small plate of broccoli or a green salad with vinegar. Your brain will thank you all afternoon.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-03-15",
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
    readTime: 5
  },
  {
    id: 'nut-3',
    slug: 'anti-inflammatory-diet',
    category: 'nutrition',
    title: { es: "Nutrición Antiinflamatoria: Guía para principiantes", en: "Anti-Inflammatory Nutrition: A Beginner's Guide" },
    excerpt: { es: "La inflamación crónica es el enemigo silencioso. Aprende qué alimentos la combaten y cuáles la provocan.", en: "Chronic inflammation is the silent enemy. Learn which foods fight it and which ones trigger it." },
    content: { 
      es: `
        <p class="lead">¿Te sientes hinchado, cansado o con dolores articulares sin razón aparente? Podría ser inflamación crónica. A diferencia de la inflamación aguda (cuando te golpeas un dedo), esta es silenciosa y sistémica.</p>

        <h2>¿Qué es la inflamación crónica?</h2>
        <p>Imagina que tu cuerpo está en un estado de "alerta roja" constante. Tu sistema inmune, en lugar de descansar, está luchando contra agresores invisibles: estrés, toxinas y, sobre todo, ciertos alimentos. A largo plazo, este estado se relaciona con enfermedades cardíacas, diabetes y envejecimiento prematuro.</p>

        <h2>Los culpables habituales (Pro-inflamatorios)</h2>
        <p>Si quieres apagar el fuego, primero deja de echarle gasolina. Reduce el consumo de:</p>
        <ul>
            <li><strong>Azúcares refinados:</strong> Refrescos, bollería, dulces.</li>
            <li><strong>Grasas trans y aceites vegetales refinados:</strong> Aceite de soja, maíz o girasol refinado.</li>
            <li><strong>Carnes procesadas:</strong> Embutidos de baja calidad y salchichas.</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800" alt="Alimentos antiinflamatorios como salmón y bayas" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Tus aliados (Anti-inflamatorios)</h2>
        <p>La naturaleza nos da potentes medicinas. Intenta incluir estos alimentos a diario:</p>
        <ul>
            <li><strong>Pescados grasos:</strong> Salmón, sardinas, caballa (ricos en Omega-3).</li>
            <li><strong>Frutos rojos:</strong> Arándanos, fresas (llenos de antioxidantes).</li>
            <li><strong>Verduras de hoja verde:</strong> Espinacas, kale, brócoli.</li>
            <li><strong>Especias:</strong> Cúrcuma (con pimienta negra) y jengibre.</li>
        </ul>

        <h2>Más allá de la comida</h2>
        <p>La dieta es clave, pero el estilo de vida es el rey. El estrés crónico y la falta de sueño son altamente inflamatorios. Dormir 7-8 horas y practicar técnicas de respiración puede ser tan efectivo como comer brócoli.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Tip rápido:</p>
          <p class="mt-2 mb-0">Empieza tus mañanas con un vaso de agua con limón o té verde. Es una forma sencilla de introducir antioxidantes desde el primer minuto del día.</p>
        </div>
      `, 
      en: `
        <p class="lead">Feeling bloated, tired, or achy for no apparent reason? It could be chronic inflammation. Unlike acute inflammation (like when you stub your toe), this one is silent and systemic.</p>

        <h2>What is Chronic Inflammation?</h2>
        <p>Imagine your body is in a constant state of "red alert." Your immune system, instead of resting, is fighting invisible aggressors: stress, toxins, and above all, certain foods. Long term, this state is linked to heart disease, diabetes, and premature aging.</p>

        <h2>The Usual Suspects (Pro-inflammatory)</h2>
        <p>If you want to put out the fire, first stop adding gasoline. Reduce your intake of:</p>
        <ul>
            <li><strong>Refined sugars:</strong> Sodas, pastries, candy.</li>
            <li><strong>Trans fats and refined vegetable oils:</strong> Soybean, corn, or refined sunflower oil.</li>
            <li><strong>Processed meats:</strong> Low-quality deli meats and sausages.</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800" alt="Anti-inflammatory foods like salmon and berries" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Your Allies (Anti-inflammatory)</h2>
        <p>Nature provides powerful medicines. Try to include these foods daily:</p>
        <ul>
            <li><strong>Fatty fish:</strong> Salmon, sardines, mackerel (rich in Omega-3).</li>
            <li><strong>Berries:</strong> Blueberries, strawberries (packed with antioxidants).</li>
            <li><strong>Leafy greens:</strong> Spinach, kale, broccoli.</li>
            <li><strong>Spices:</strong> Turmeric (with black pepper) and ginger.</li>
        </ul>

        <h2>Beyond Food</h2>
        <p>Diet is key, but lifestyle is king. Chronic stress and lack of sleep are highly inflammatory. Sleeping 7-8 hours and practicing breathing techniques can be as effective as eating broccoli.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Quick Tip:</p>
          <p class="mt-2 mb-0">Start your mornings with a glass of lemon water or green tea. It's a simple way to introduce antioxidants from the very first minute of the day.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-04-22",
    imageUrl: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800",
    readTime: 4
  },
  {
    id: 'hab-1',
    slug: 'micro-habits-success',
    category: 'habits',
    title: { es: "Micro-Hábitos: Cómo cambiar tu vida sin fuerza de voluntad", en: "Micro-Habits: How to Change Your Life Without Willpower" },
    excerpt: { es: "Olvídate de las resoluciones radicales. El secreto del éxito a largo plazo está en acciones tan pequeñas que es imposible fallar.", en: "Forget radical resolutions. The secret to long-term success lies in actions so small that it is impossible to fail." },
    content: { 
      es: `
        <p class="lead">¿Por qué fallan el 90% de las dietas y los propósitos de Año Nuevo? Porque dependen de la motivación, y la motivación es un recurso agotable. Cuando estás cansado, la motivación desaparece.</p>

        <h2>La trampa de la "Gran Transformación"</h2>
        <p>Nos han vendido que para lograr grandes resultados necesitamos grandes esfuerzos hercúleos. "¡Ve al gimnasio una hora cada día!", "¡Deja el azúcar de golpe!". Pero cuando tienes un día estresante en el trabajo (y lo tendrás), tu fuerza de voluntad se agota. Y ahí es donde abandonas.</p>
        
        <h2>Entra el Micro-Hábito</h2>
        <p>Un micro-hábito es una acción ridículamente pequeña. Tan pequeña que no necesitas motivación para hacerla. Es tan fácil que te sentirías estúpido si no la hicieras.</p>
        <ul>
            <li>En lugar de "leer 30 minutos", tu micro-hábito es <strong>"leer una página"</strong>.</li>
            <li>En lugar de "hacer 50 flexiones", tu micro-hábito es <strong>"hacer una flexión"</strong>.</li>
            <li>En lugar de "meditar 20 minutos", es <strong>"respirar profundo 3 veces"</strong>.</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1510036130769-e700df196726?auto=format&fit=crop&q=80&w=800" alt="Atándose las zapatillas" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>La regla de los 2 minutos</h2>
        <p>Si quieres instaurar un nuevo hábito, este debe tomar menos de 2 minutos en completarse. El objetivo no es la intensidad, es la <strong>frecuencia</strong>. Estás entrenando a tu cerebro para ser el tipo de persona que "hace ejercicio a diario", aunque hoy solo haya sido un minuto.</p>
        <p>Una vez que empiezas, es mucho más fácil continuar. La parte más difícil de salir a correr es ponerse las zapatillas. Haz que ponerse las zapatillas sea tu única meta.</p>

        <h2>Cómo empezar hoy mismo</h2>
        <p>Elige una cosa que quieras mejorar. Redúcela a su mínima expresión. Hazla justo después de algo que ya haces (como lavarte los dientes o poner café). Y celebra. Sí, celebra haber leído esa única página.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Tu primer paso:</p>
          <p class="mt-2 mb-0">No prometas correr mañana. Promete que te pondrás las zapatillas. Si después no corres, no pasa nada, pero el hábito de ponerse las zapatillas se habrá cumplido.</p>
        </div>
      `, 
      en: `
        <p class="lead">Why do 90% of diets and New Year's resolutions fail? Because they rely on motivation, and motivation is a depletable resource. When you are tired, motivation vanishes.</p>

        <h2>The "Big Transformation" Trap</h2>
        <p>We've been sold the idea that to achieve big results we need massive, herculean effort. "Go to the gym for an hour every day!", "Quit sugar cold turkey!". But when you have a stressful day at work (and you will), your willpower runs out. And that's when you quit.</p>
        
        <h2>Enter the Micro-Habit</h2>
        <p>A micro-habit is a ridiculously small action. So small that you don't need motivation to do it. It's so easy you'd feel stupid not doing it.</p>
        <ul>
            <li>Instead of "read 30 minutes", your micro-habit is <strong>"read one page"</strong>.</li>
            <li>Instead of "do 50 pushups", your micro-habit is <strong>"do one pushup"</strong>.</li>
            <li>Instead of "meditate 20 minutes", it's <strong>"take 3 deep breaths"</strong>.</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1510036130769-e700df196726?auto=format&fit=crop&q=80&w=800" alt="Tying shoes" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>The 2-Minute Rule</h2>
        <p>If you want to establish a new habit, it must take less than 2 minutes to complete. The goal is not intensity, it is <strong>frequency</strong>. You are training your brain to be the kind of person who "exercises daily", even if today it was just for a minute.</p>
        <p>Once you start, it is much easier to continue. The hardest part of going for a run is putting on your shoes. Make putting on your shoes your only goal.</p>

        <h2>How to Start Today</h2>
        <p>Pick one thing you want to improve. Reduce it to its bare minimum. Do it right after something you already do (like brushing your teeth or brewing coffee). And celebrate. Yes, celebrate reading that single page.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Your First Step:</p>
          <p class="mt-2 mb-0">Don't promise to run tomorrow. Promise you'll put on your running shoes. If you don't run after that, it's fine, but the habit of putting on the shoes will have been met.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-05-10",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    readTime: 5
  },
  {
    id: 'hab-2',
    slug: 'identity-based-habits',
    category: 'habits',
    title: { es: "No corras un maratón, conviértete en corredor", en: "Don't Run a Marathon, Become a Runner" },
    excerpt: { es: "El verdadero cambio de comportamiento es un cambio de identidad. Deja de centrarte en la meta y empieza a centrarte en quién eres.", en: "True behavior change is identity change. Stop focusing on the goal and start focusing on who you are." },
    content: { 
      es: `
        <p class="lead">La mayoría de la gente intenta cambiar sus hábitos enfocándose en lo que quiere <em>lograr</em>: perder 5 kilos, escribir un libro, correr un maratón. El problema es que una meta es un punto final. ¿Qué pasa cuando la alcanzas?</p>
        
        <h2>Capas del cambio de conducta</h2>
        <p>Existen tres capas en el cambio de comportamiento: cambiar tus resultados, cambiar tus procesos y cambiar tu identidad. La más profunda y duradera es la tercera.</p>
        <ul>
            <li><strong>Resultados:</strong> Lo que obtienes (bajar de peso).</li>
            <li><strong>Procesos:</strong> Lo que haces (ir al gimnasio).</li>
            <li><strong>Identidad:</strong> Lo que crees (soy un atleta).</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&q=80&w=800" alt="Grupo de corredores" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>El poder del "Soy"</h2>
        <p>Imagina a dos personas rechazando un cigarrillo. La primera dice: "No gracias, estoy intentando dejarlo". La segunda dice: "No gracias, no soy fumador".</p>
        <p>La diferencia es abismal. La primera persona todavía cree que es un fumador que se está sacrificando. La segunda persona ha cambiado su identidad. Fumar ya no es coherente con quien es.</p>

        <h2>Cómo reprogramar tu identidad</h2>
        <p>Tu identidad emerge de tus hábitos. Cada vez que haces ejercicio, es un voto para la identidad de "soy una persona saludable". No necesitas ser perfecto, solo necesitas acumular evidencia.</p>
        <p>Empieza preguntándote: <strong>¿Qué haría una persona saludable en esta situación?</strong> ¿Subiría por las escaleras o por el ascensor? Al principio fingirás, pero con el tiempo, te convertirás en ella.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Cambio de mentalidad:</p>
          <p class="mt-2 mb-0">No digas "tengo que leer". Di "soy un lector". No digas "no puedo comer eso". Di "no como eso". Las palabras definen tu realidad.</p>
        </div>
      `, 
      en: `
        <p class="lead">Most people try to change their habits by focusing on what they want to <em>achieve</em>: lose 10 pounds, write a book, run a marathon. The problem is that a goal is an endpoint. What happens when you reach it?</p>
        
        <h2>Layers of Behavior Change</h2>
        <p>There are three layers to behavior change: changing your outcomes, changing your processes, and changing your identity. The deepest and most lasting is the third.</p>
        <ul>
            <li><strong>Outcomes:</strong> What you get (losing weight).</li>
            <li><strong>Processes:</strong> What you do (going to the gym).</li>
            <li><strong>Identity:</strong> What you believe (I am an athlete).</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&q=80&w=800" alt="Running group" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>The Power of "I Am"</h2>
        <p>Imagine two people refusing a cigarette. The first says, "No thanks, I'm trying to quit." The second says, "No thanks, I'm not a smoker."</p>
        <p>The difference is huge. The first person still believes they are a smoker making a sacrifice. The second person has shifted their identity. Smoking is no longer consistent with who they are.</p>

        <h2>How to Reprogram Your Identity</h2>
        <p>Your identity emerges from your habits. Every time you exercise, it's a vote for the identity of "I am a healthy person." You don't need to be perfect, you just need to accumulate evidence.</p>
        <p>Start by asking yourself: <strong>What would a healthy person do in this situation?</strong> Would they take the stairs or the elevator? At first, you'll fake it, but over time, you will become it.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Mindset Shift:</p>
          <p class="mt-2 mb-0">Don't say "I have to read." Say "I am a reader." Don't say "I can't eat that." Say "I don't eat that." Words define your reality.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-06-18",
    imageUrl: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=800",
    readTime: 7
  },
  {
    id: 'hab-3',
    slug: 'never-miss-twice',
    category: 'habits',
    title: { es: "La regla de 'Nunca fallar dos veces'", en: "The 'Never Miss Twice' Rule" },
    excerpt: { es: "La perfección es enemiga del progreso. Descubre qué hacer cuando inevitablemente rompas tu racha de buenos hábitos.", en: "Perfection is the enemy of progress. Discover what to do when you inevitably break your streak of good habits." },
    content: { 
      es: `
        <p class="lead">Todos tenemos ese día. Comiste pizza en lugar de ensalada, o te saltaste el gimnasio para ver Netflix. El problema no es el error, es la espiral de culpa que viene después: "Ya arruiné la dieta, así que me comeré el postre también".</p>

        <h2>El efecto "Al diablo con todo"</h2>
        <p>En psicología, esto se llama violación de la abstinencia. Cuando percibimos un pequeño desliz como un fracaso total, tendemos a abandonar por completo el esfuerzo. Es como pinchar una rueda del coche y decidir rajar las otras tres.</p>

        <h2>La regla de oro</h2>
        <p>Para combatir esto, adopta la regla de <strong>"Nunca fallar dos veces"</strong>. Si te saltas un entrenamiento hoy, tu única prioridad en la vida es no saltártelo mañana. Un error es un accidente. Dos errores son el comienzo de un nuevo hábito (negativo).</p>

        <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" alt="Gimnasio" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Consistencia > Intensidad</h2>
        <p>Las personas exitosas no son las que nunca fallan. Son las que se recuperan más rápido. No importa si tu entrenamiento de "recuperación" es mediocre. Lo que importa es que te presentaste. Mantuviste la cadena viva.</p>
        <p>La diferencia entre un estilo de vida saludable y un intento fallido no está en los días buenos, sino en qué haces en los días malos.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Estrategia de emergencia:</p>
          <p class="mt-2 mb-0">Ten un "Plan B" para los días malos. Si no puedes ir 1 hora al gimnasio, tu Plan B es hacer 10 minutos de estiramientos en casa. Es infinitamente mejor que cero.</p>
        </div>
      `, 
      en: `
        <p class="lead">We all have that day. You ate pizza instead of salad, or skipped the gym to watch Netflix. The problem isn't the mistake, it's the guilt spiral that follows: "I already ruined my diet, so I might as well eat dessert too."</p>

        <h2>The "What the Hell" Effect</h2>
        <p>In psychology, this is known as the abstinence violation effect. When we perceive a small slip-up as a total failure, we tend to abandon the effort completely. It's like getting a flat tire and deciding to slash the other three.</p>

        <h2>The Golden Rule</h2>
        <p>To combat this, adopt the <strong>"Never Miss Twice"</strong> rule. If you skip a workout today, your only priority in life is not to skip it tomorrow. One mistake is an accident. Two mistakes are the beginning of a new (negative) habit.</p>

        <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" alt="Gym" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Consistency > Intensity</h2>
        <p>Successful people aren't those who never fail. They are the ones who get back on track the fastest. It doesn't matter if your "recovery" workout is mediocre. What matters is that you showed up. You kept the chain alive.</p>
        <p>The difference between a healthy lifestyle and a failed attempt isn't in the good days, but in what you do on the bad days.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Emergency Strategy:</p>
          <p class="mt-2 mb-0">Have a "Plan B" for bad days. If you can't go to the gym for an hour, your Plan B is doing 10 minutes of stretching at home. It is infinitely better than zero.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-07-30",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    readTime: 4
  },
  {
    id: 'eng-1',
    slug: 'circadian-rhythm-sunlight',
    category: 'energy',
    title: { es: "El poder del sol: Tu mejor suplemento es gratis", en: "The Power of Sun: Your Best Supplement is Free" },
    excerpt: { es: "Tu cuerpo no funciona con café, funciona con luz. Aprende a sincronizar tu reloj biológico para dormir mejor y tener energía infinita.", en: "Your body doesn't run on coffee, it runs on light. Learn to sync your biological clock to sleep better and have endless energy." },
    content: { 
      es: `
        <p class="lead">Imagina que tienes un reloj interno que controla cuándo tienes hambre, cuándo te concentras y cuándo duermes. Ese reloj existe, se llama ritmo circadiano, y la mayoría de nosotros lo tenemos roto.</p>

        <h2>La ciencia de la luz</h2>
        <p>Nuestro cerebro tiene un pequeño grupo de neuronas llamado núcleo supraquiasmático. Piensa en él como el director de orquesta de tus hormonas. ¿Cómo sabe el director cuándo empezar la música? A través de los ojos.</p>
        <p>Cuando la luz brillante entra en tus ojos por la mañana, se envía una señal de "¡DESPIERTA!" que libera cortisol (energía) y detiene la melatonina (sueño). Si te pasas la mañana en una habitación oscura y luego te expones a pantallas brillantes por la noche, estás invirtiendo las señales. El resultado: insomnio de noche, zombificación de día.</p>
        
        <img src="https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=800" alt="Luz de la mañana" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>El protocolo de la luz matutina</h2>
        <p>El neurocientífico Andrew Huberman popularizó esto, pero la biología es ancestral. Para resetear tu reloj:</p>
        <ul>
            <li><strong>Sal fuera antes de las 10 AM:</strong> La luz a través de una ventana es 50 veces menos potente que la luz exterior (incluso en un día nublado).</li>
            <li><strong>Tiempo necesario:</strong> 5-10 minutos en días soleados, 20 minutos en días nublados.</li>
            <li><strong>Sin gafas de sol:</strong> Deja que la luz entre (pero nunca mires al sol directamente, por favor).</li>
        </ul>

        <h2>Oscuridad = Sueño</h2>
        <p>Por la noche, la luz azul de tu teléfono le dice a tu cerebro que es mediodía. Intenta bajar las luces de casa después de la puesta de sol y usa el "modo noche" en tus dispositivos.</p>
        <p>Sincronizar tu luz es más efectivo que cualquier pastilla de melatonina que puedas comprar.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Tu misión de mañana:</p>
          <p class="mt-2 mb-0">Antes de mirar Instagram, sal al balcón o a la calle. Tómate tu café mirando al cielo (no al sol). Observa cómo cambia tu energía a las 9 PM.</p>
        </div>
      `, 
      en: `
        <p class="lead">Imagine you have an internal clock that controls when you get hungry, when you focus, and when you sleep. That clock exists, it's called the circadian rhythm, and for most of us, it's broken.</p>

        <h2>The Science of Light</h2>
        <p>Our brain has a small group of neurons called the suprachiasmatic nucleus. Think of it as the conductor of your hormonal orchestra. How does the conductor know when to start the music? Through the eyes.</p>
        <p>When bright light hits your eyes in the morning, a "WAKE UP!" signal is sent, releasing cortisol (energy) and stopping melatonin (sleep). If you spend your morning in a dark room and then expose yourself to bright screens at night, you are flipping the signals. The result: insomnia at night, zombie-mode by day.</p>
        
        <img src="https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=800" alt="Morning light" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>The Morning Light Protocol</h2>
        <p>Neuroscientist Andrew Huberman popularized this, but the biology is ancient. To reset your clock:</p>
        <ul>
            <li><strong>Get outside before 10 AM:</strong> Light through a window is 50 times less potent than outdoor light (even on a cloudy day).</li>
            <li><strong>Time needed:</strong> 5-10 minutes on sunny days, 20 minutes on cloudy days.</li>
            <li><strong>No sunglasses:</strong> Let the light in (but never look directly at the sun, please).</li>
        </ul>

        <h2>Darkness = Sleep</h2>
        <p>At night, blue light from your phone tells your brain it's noon. Try dimming the house lights after sunset and use "night mode" on your devices.</p>
        <p>Syncing your light is more effective than any melatonin pill you can buy.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Your Mission Tomorrow:</p>
          <p class="mt-2 mb-0">Before checking Instagram, step out onto the balcony or street. Drink your coffee looking at the sky (not the sun). Notice how your energy changes at 9 PM.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-08-12",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    readTime: 5
  },
  {
    id: 'eng-2',
    slug: 'caffeine-crash-fix',
    category: 'energy',
    title: { es: "La trampa de la cafeína: Cómo beber café sin ansiedad", en: "The Caffeine Trap: How to Drink Coffee Without Anxiety" },
    excerpt: { es: "¿Amas el café pero odias el temblor? Aprende a usar la cafeína como una herramienta estratégica, no como una muleta.", en: "Love coffee but hate the jitters? Learn to use caffeine as a strategic tool, not a crutch." },
    content: { 
      es: `
        <p class="lead">El café es la droga psicoactiva más popular del mundo. Para muchos, es el único motivo para levantarse de la cama. Pero si lo consumes mal, puede ser el causante de tu fatiga por la tarde.</p>

        <h2>Cómo funciona realmente la cafeína</h2>
        <p>En tu cerebro se acumula una molécula llamada <strong>adenosina</strong>, que es la que te hace sentir cansado. La cafeína no te da energía; simplemente bloquea los receptores de adenosina. Es como poner un corcho en una tubería de agua. La presión (sueño) sigue acumulándose detrás.</p>
        <p>Cuando el efecto del café pasa, el corcho sale y toda esa adenosina acumulada te golpea de golpe. Bienvenido al bajón de las 3 PM.</p>

        <img src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&q=80&w=800" alt="Té matcha o café relajado" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>El protocolo de 90 minutos</h2>
        <p>Si bebes café nada más despertar, cuando tus niveles de cortisol son naturalmente altos, interfieres con tu ritmo natural y aumentas la tolerancia. La solución:</p>
        <ul>
            <li>Espera <strong>90-120 minutos</strong> después de despertarte antes de tomar tu primera taza.</li>
            <li>Esto permite que tu cuerpo elimine la adenosina residual de la noche de forma natural.</li>
            <li>Resultado: Una energía más estable y sin desplomes brutales.</li>
        </ul>

        <h2>La "Siesta de Cafeína" (Nappuccino)</h2>
        <p>¿Necesitas un reinicio rápido? Tómate un café rápido y duerme inmediatamente 20 minutos. La cafeína tarda unos 20 minutos en hacer efecto. Cuando despiertes, tendrás el beneficio del descanso más el "kick" de la cafeína. Es un arma secreta para días largos.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Límite de seguridad:</p>
          <p class="mt-2 mb-0">La cafeína tiene una vida media de 6 horas. Si tomas un café a las 4 PM, a las 10 PM todavía tienes la mitad en sangre. Intenta cortar la cafeína 10 horas antes de dormir.</p>
        </div>
      `, 
      en: `
        <p class="lead">Coffee is the world's most popular psychoactive drug. For many, it's the only reason to get out of bed. But if you consume it wrong, it might be the cause of your afternoon fatigue.</p>

        <h2>How Caffeine Really Works</h2>
        <p>A molecule called <strong>adenosine</strong> builds up in your brain, making you feel tired. Caffeine doesn't give you energy; it simply blocks adenosine receptors. It's like plugging a water pipe. The pressure (sleepiness) keeps building up behind it.</p>
        <p>When the coffee wears off, the plug comes out, and all that accumulated adenosine hits you at once. Welcome to the 3 PM crash.</p>

        <img src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&q=80&w=800" alt="Matcha tea or relaxed coffee" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>The 90-Minute Protocol</h2>
        <p>If you drink coffee right after waking up, when your cortisol levels are naturally high, you interfere with your natural rhythm and increase tolerance. The solution:</p>
        <ul>
            <li>Wait <strong>90-120 minutes</strong> after waking up before having your first cup.</li>
            <li>This allows your body to naturally clear out residual adenosine from the night.</li>
            <li>Result: More stable energy without brutal crashes.</li>
        </ul>

        <h2>The "Nappuccino" (Caffeine Nap)</h2>
        <p>Need a quick reboot? Drink a coffee quickly and immediately sleep for 20 minutes. Caffeine takes about 20 minutes to kick in. When you wake up, you'll have the benefit of the rest plus the caffeine kick. It's a secret weapon for long days.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Safety Limit:</p>
          <p class="mt-2 mb-0">Caffeine has a half-life of 6 hours. If you have a coffee at 4 PM, at 10 PM you still have half of it in your blood. Try to cut caffeine 10 hours before bed.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-09-25",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    readTime: 6
  },
  {
    id: 'eng-3',
    slug: 'active-recovery-fatigue',
    category: 'energy',
    title: { es: "Fatiga mental vs. física: Qué descanso necesitas realmente", en: "Mental vs. Physical Fatigue: What Rest You Really Need" },
    excerpt: { es: "Llegas a casa agotado y te tiras al sofá. Error. Si tu cansancio es mental, Netflix no te ayudará. Descubre el descanso activo.", en: "You get home mentally exhausted and crash on the couch. Mistake. If your fatigue is mental, Netflix won't help. Discover active recovery." },
    content: { 
      es: `
        <p class="lead">Es viernes por la tarde. Tus ojos pesan, tu cerebro está frito y lo único que quieres es "hacer nada". Pero después de 3 horas de series, te sientes igual o peor. ¿Por qué? Porque estás tratando la fatiga mental como si fuera física.</p>

        <h2>Los 7 tipos de descanso</h2>
        <p>La Dra. Saundra Dalton-Smith identificó que el sueño es solo uno de los tipos de descanso. Si pasas el día sentado resolviendo problemas, tu cuerpo no está cansado físicamente; está estancado. Tu mente está sobreestimulada.</p>
        <p>Tirarte al sofá añade más inactividad física y a menudo más estímulo mental (pantallas). Es la receta para el agotamiento crónico.</p>

        <img src="https://images.unsplash.com/photo-1599447332159-43d9e8d69d0d?auto=format&fit=crop&q=80&w=800" alt="Yoga o estiramientos" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Descanso Activo: La paradoja</h2>
        <p>Si tu trabajo es sedentario y mental, tu descanso debe ser físico y sensorial. Parece contradictorio gastar energía para ganar energía, pero funciona.</p>
        <ul>
            <li><strong>Caminar en la naturaleza:</strong> Reduce el cortisol y descansa tu atención dirigida (la que usas en el excel).</li>
            <li><strong>Ejercicio ligero:</strong> Moviliza la sangre y el oxígeno al cerebro.</li>
            <li><strong>Hobbies manuales:</strong> Cocinar, pintar o arreglar algo cambia el foco de lo abstracto a lo tangible.</li>
        </ul>

        <h2>El protocolo NSDR</h2>
        <p>Si realmente necesitas "apagar el sistema", prueba el <em>Non-Sleep Deep Rest</em> (Descanso Profundo Sin Dormir) o Yoga Nidra. Son 10-20 minutos de relajación guiada que, según estudios de Stanford, pueden recuperar dopamina mejor que una siesta.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Diagnóstico rápido:</p>
          <p class="mt-2 mb-0">¿Te duelen las piernas o te duelen los ojos? Si es lo segundo, sal a caminar sin el teléfono. Tu cerebro necesita silencio visual, no más contenido.</p>
        </div>
      `, 
      en: `
        <p class="lead">It's Friday afternoon. Your eyes are heavy, your brain is fried, and all you want to do is "nothing." But after 3 hours of binge-watching, you feel the same or worse. Why? Because you are treating mental fatigue as if it were physical.</p>

        <h2>The 7 Types of Rest</h2>
        <p>Dr. Saundra Dalton-Smith identified that sleep is just one type of rest. If you spend the day sitting solving problems, your body isn't physically tired; it's stagnant. Your mind is overstimulated.</p>
        <p>Crashing on the couch adds more physical inactivity and often more mental stimulus (screens). It's a recipe for chronic burnout.</p>

        <img src="https://images.unsplash.com/photo-1599447332159-43d9e8d69d0d?auto=format&fit=crop&q=80&w=800" alt="Yoga or stretching" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h2>Active Recovery: The Paradox</h2>
        <p>If your job is sedentary and mental, your rest should be physical and sensory. It seems contradictory to spend energy to gain energy, but it works.</p>
        <ul>
            <li><strong>Walking in nature:</strong> Reduces cortisol and rests your directed attention (the one used on spreadsheets).</li>
            <li><strong>Light exercise:</strong> Mobilizes blood and oxygen to the brain.</li>
            <li><strong>Manual hobbies:</strong> Cooking, painting, or fixing something shifts focus from the abstract to the tangible.</li>
        </ul>

        <h2>The NSDR Protocol</h2>
        <p>If you really need to "shut down the system," try <em>Non-Sleep Deep Rest</em> (NSDR) or Yoga Nidra. It's 10-20 minutes of guided relaxation that, according to Stanford studies, can restore dopamine better than a nap.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Quick Diagnosis:</p>
          <p class="mt-2 mb-0">Do your legs hurt or do your eyes hurt? If it's the latter, go for a walk without your phone. Your brain needs visual silence, not more content.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-10-15",
    imageUrl: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=800",
    readTime: 5
  },
  {
    id: 'rec-1',
    slug: 'healthy-breakfast-5-min',
    category: 'recipes',
    title: { es: "3 Desayunos Saludables en menos de 5 minutos", en: "3 Healthy Breakfasts in Less Than 5 Minutes" },
    excerpt: { es: "¿Sales corriendo sin desayunar? Aquí tienes 3 opciones ricas en proteína que puedes preparar casi dormido.", en: "Running out without breakfast? Here are 3 protein-rich options you can prepare while practically asleep." },
    content: { 
      es: `
        <p class="lead">"No tengo tiempo para desayunar" suele ser código para "Prefiero dormir 10 minutos más". Lo entendemos. Por eso, estas recetas no requieren cocción elaborada ni ensuciar diez sartenes.</p>

        <h2>El criterio del desayuno perfecto</h2>
        <p>Un buen desayuno debe mantenerte saciado hasta el almuerzo y estable mentalmente. Para eso necesitamos la fórmula mágica: <strong>Proteína + Grasa Saludable + Fibra</strong>. El típico desayuno de tostada con mermelada falla porque es todo azúcar rápido (hola, pico de glucosa).</p>

        <h3>1. Overnight Oats (Avena Nocturna)</h3>
        <p>Este se "cocina" solo mientras duermes. Es ideal para llevar.</p>
        <ul>
            <li><strong>Base:</strong> 1/2 taza de avena en hojuelas, 1 cucharada de semillas de chía.</li>
            <li><strong>Líquido:</strong> 3/4 taza de leche (o bebida vegetal).</li>
            <li><strong>Proteína:</strong> 1 scoop de proteína en polvo o yogur griego.</li>
            <li><strong>Cómo:</strong> Mézclalo todo en un frasco la noche anterior. Por la mañana, añade frutos rojos y listo.</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800" alt="Tostada saludable con huevo" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h3>2. Tostada de "Huevos" Revueltos Express</h3>
        <p>¿Sabías que puedes hacer huevos revueltos en el microondas en 60 segundos? No es gourmet, pero es eficaz y nutritivo.</p>
        <ul>
            <li>Bate 2 huevos en una taza con sal y pimienta.</li>
            <li>Microondas 45-60 segundos (vigila que no explote).</li>
            <li>Ponlos sobre una tostada integral con medio aguacate.</li>
        </ul>

        <h3>3. El Bowl de Yogur "Power"</h3>
        <p>Olvídate de los yogures de sabores azucarados. Compra natural y "sazona" tú mismo.</p>
        <ul>
            <li>200g de Yogur Griego natural (aprox 20g de proteína).</li>
            <li>Un puñado de nueces (grasas para el cerebro).</li>
            <li>Canela (ayuda a controlar el azúcar).</li>
            <li>Una pieza de fruta picada.</li>
        </ul>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Tip de experto:</p>
          <p class="mt-2 mb-0">La proteína en el desayuno es innegociable si quieres controlar la ansiedad por la comida en la noche. Intenta llegar a 25g de proteína antes de salir de casa.</p>
        </div>
      `, 
      en: `
        <p class="lead">"I don't have time for breakfast" is usually code for "I'd rather sleep 10 more minutes." We get it. That's why these recipes don't require elaborate cooking or dirtying ten pans.</p>

        <h2>The Perfect Breakfast Criteria</h2>
        <p>A good breakfast should keep you full until lunch and mentally stable. For that, we need the magic formula: <strong>Protein + Healthy Fat + Fiber</strong>. The typical toast with jam breakfast fails because it's all fast sugar (hello, glucose spike).</p>

        <h3>1. Overnight Oats</h3>
        <p>This one "cooks" itself while you sleep. Ideal for grab-and-go.</p>
        <ul>
            <li><strong>Base:</strong> 1/2 cup rolled oats, 1 tablespoon chia seeds.</li>
            <li><strong>Liquid:</strong> 3/4 cup milk (or plant-based milk).</li>
            <li><strong>Protein:</strong> 1 scoop protein powder or Greek yogurt.</li>
            <li><strong>How:</strong> Mix it all in a jar the night before. In the morning, add berries and go.</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800" alt="Healthy egg toast" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h3>2. Express Scrambled "Eggs" on Toast</h3>
        <p>Did you know you can make scrambled eggs in the microwave in 60 seconds? It's not gourmet, but it's effective and nutritious.</p>
        <ul>
            <li>Beat 2 eggs in a mug with salt and pepper.</li>
            <li>Microwave 45-60 seconds (watch it so it doesn't explode).</li>
            <li>Put them on whole-wheat toast with half an avocado.</li>
        </ul>

        <h3>3. The "Power" Yogurt Bowl</h3>
        <p>Forget sugary flavored yogurts. Buy plain and "season" it yourself.</p>
        <ul>
            <li>200g plain Greek Yogurt (approx 20g protein).</li>
            <li>A handful of walnuts (fats for the brain).</li>
            <li>Cinnamon (helps control blood sugar).</li>
            <li>A piece of chopped fruit.</li>
        </ul>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Pro Tip:</p>
          <p class="mt-2 mb-0">Protein at breakfast is non-negotiable if you want to control food cravings at night. Try to hit 25g of protein before leaving the house.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-11-05",
    imageUrl: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800",
    readTime: 3
  },
  {
    id: 'rec-2',
    slug: 'light-dinners-sleep',
    category: 'recipes',
    title: { es: "Cenas Ligeras para Dormir Mejor: 3 Recetas Científicas", en: "Light Dinners for Better Sleep: 3 Scientific Recipes" },
    excerpt: { es: "¿Te cuesta dormir? El problema podría estar en tu cena. Descubre 3 recetas fáciles, ricas en nutrientes que inducen el sueño y mejoran tu descanso.", en: "Having trouble sleeping? The problem might be your dinner. Discover 3 easy recipes rich in sleep-inducing nutrients to improve your rest." },
    content: { 
      es: `
        <p class="lead">Lo que comes antes de acostarte tiene un impacto directo en la calidad de tu sueño. Cenar demasiado tarde o demasiado pesado obliga a tu sistema digestivo a trabajar horas extras, aumentando tu temperatura corporal e impidiendo el sueño profundo.</p>

        <h2>La Conexión Intestino-Sueño</h2>
        <p>Para dormir bien, necesitamos que nuestro cuerpo produzca <strong>melatonina</strong>. La "materia prima" para fabricar melatonina es un aminoácido llamado <strong>triptófano</strong>, que encontramos en ciertos alimentos. Si combinamos triptófano con carbohidratos complejos y magnesio, tenemos el cóctel perfecto para el descanso.</p>

        <h3>1. Ensalada de Pavo y Aguacate (La Bomba de Triptófano)</h3>
        <p>El pavo es famoso por su alto contenido en triptófano. Al combinarlo con grasas saludables, mejoramos la saciedad sin pesadez.</p>
        <ul>
            <li><strong>Base:</strong> Espinacas frescas (ricas en magnesio).</li>
            <li><strong>Proteína:</strong> 100g de pechuga de pavo a la plancha o en fiambre de alta calidad (90%+ carne).</li>
            <li><strong>Grasa:</strong> Medio aguacate y un puñado de semillas de calabaza.</li>
            <li><strong>Aderezo:</strong> Aceite de oliva virgen extra y limón. Evita el vinagre balsámico comercial (azúcar).</li>
        </ul>
        
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" alt="Ensalada de pavo saludable" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h3>2. Salmón al Horno con Espárragos</h3>
        <p>Los pescados grasos como el salmón aportan Omega-3 y Vitamina D, ambos cruciales para la regulación de la serotonina. Los espárragos son diuréticos naturales, ayudándote a no sentirte hinchado.</p>
        <ul>
            <li>Coloca un filete de salmón y un manojo de espárragos en una bandeja.</li>
            <li>Rocía con aceite, sal, pimienta y eneldo.</li>
            <li>Hornea a 200°C durante 12-15 minutos. ¡Listo!</li>
        </ul>

        <h3>3. Bowl Nocturno de Avena y Cerezas</h3>
        <p>¿Prefieres algo dulce o tipo "desayuno" para cenar? Las cerezas (especialmente las ácidas) son una de las pocas fuentes naturales de melatonina directa.</p>
        <ul>
            <li>Cuece media taza de avena con leche de almendras (caliente).</li>
            <li>Añade cerezas deshuesadas (frescas o congeladas).</li>
            <li>Toque final: Una cucharada de mantequilla de almendras para estabilizar el azúcar en sangre durante la noche.</li>
        </ul>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Regla de oro:</p>
          <p class="mt-2 mb-0">Intenta terminar de cenar al menos <strong>2-3 horas antes de irte a la cama</strong>. Esto permite que la digestión termine antes de que tu cerebro intente "apagar" el sistema.</p>
        </div>
      `, 
      en: `
        <p class="lead">What you eat before bed has a direct impact on your sleep quality. Eating too late or too heavy forces your digestive system to work overtime, raising your body temperature and preventing deep sleep.</p>

        <h2>The Gut-Sleep Connection</h2>
        <p>To sleep well, we need our body to produce <strong>melatonin</strong>. The "raw material" to make melatonin is an amino acid called <strong>tryptophan</strong>, found in certain foods. If we combine tryptophan with complex carbs and magnesium, we get the perfect cocktail for rest.</p>

        <h3>1. Turkey & Avocado Salad (The Tryptophan Bomb)</h3>
        <p>Turkey is famous for its high tryptophan content. By combining it with healthy fats, we improve satiety without heaviness.</p>
        <ul>
            <li><strong>Base:</strong> Fresh spinach (rich in magnesium).</li>
            <li><strong>Protein:</strong> 100g grilled turkey breast or high-quality deli meat (90%+ meat).</li>
            <li><strong>Fat:</strong> Half an avocado and a handful of pumpkin seeds.</li>
            <li><strong>Dressing:</strong> Extra virgin olive oil and lemon. Avoid commercial balsamic vinegar (sugar).</li>
        </ul>
        
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" alt="Healthy turkey salad" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h3>2. Baked Salmon with Asparagus</h3>
        <p>Fatty fish like salmon provide Omega-3 and Vitamin D, both crucial for serotonin regulation. Asparagus is a natural diuretic, helping you avoid bloating.</p>
        <ul>
            <li>Place a salmon fillet and a bunch of asparagus on a tray.</li>
            <li>Drizzle with oil, salt, pepper, and dill.</li>
            <li>Bake at 200°C (400°F) for 12-15 minutes. Done!</li>
        </ul>

        <h3>3. Late Night Cherry & Oat Bowl</h3>
        <p>Prefer something sweet or "breakfast-style" for dinner? Cherries (especially tart ones) are one of the few natural sources of direct melatonin.</p>
        <ul>
            <li>Cook half a cup of oats with almond milk (warm).</li>
            <li>Add pitted cherries (fresh or frozen).</li>
            <li>Final touch: A spoonful of almond butter to stabilize blood sugar throughout the night.</li>
        </ul>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Golden Rule:</p>
          <p class="mt-2 mb-0">Try to finish dinner at least <strong>2-3 hours before going to bed</strong>. This allows digestion to finish before your brain tries to "shut down" the system.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2025-12-10",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    readTime: 6
  },
  {
    id: 'rec-3',
    slug: 'healthy-snacks-cravings',
    category: 'recipes',
    title: { es: "Snacks Saludables para el hambre de las 5 PM", en: "Healthy Snacks for the 5 PM Hunger Pangs" },
    excerpt: { es: "El hambre de las 5 PM es real. Aquí tienes 5 opciones que no sabotearán tu dieta y te darán energía para terminar el día.", en: "The 5 PM hunger is real. Here are 5 options that won't sabotage your diet and will give you energy to finish the day." },
    content: { 
      es: `
        <p class="lead">Son las 5 de la tarde. Has comido bien, pero de repente te apetece devorar la máquina expendedora. No eres débil, es biología. Tu glucosa ha bajado y tu cerebro busca energía rápida. La clave no es resistir, es estar preparado.</p>

        <h2>Salado vs. Dulce</h2>
        <p>Identifica qué te pide el cuerpo. A veces es sed, a veces es aburrimiento, pero si es hambre real, dásela con nutrientes.</p>

        <h3>Opción Dulce: Chocolate Negro + Almendras</h3>
        <p>Dos onzas de chocolate (mínimo 70% cacao) y un puñado de almendras crudas. El magnesio del chocolate relaja, y la grasa de las almendras sacia. Es el postre perfecto que no dispara la insulina.</p>

        <img src="https://images.unsplash.com/photo-1599599810769-bcde5a1645f7?auto=format&fit=crop&q=80&w=800" alt="Manzana snack saludable" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h3>Opción Salada: Palomitas caseras</h3>
        <p>Las palomitas de maíz son en realidad un cereal integral lleno de fibra. El problema son las de cine (grasas trans) o microondas (químicos). Hazlas en olla con un poco de aceite de oliva y sal. Mucho volumen, pocas calorías.</p>

        <h3>Opción Fresca: Manzana con Crema de Cacahuete</h3>
        <p>Clásico por una razón. La fibra de la manzana te llena el estómago, la proteína del cacahuete te quita el hambre. Asegúrate de que la crema sea 100% cacahuete, sin azúcar añadido.</p>

        <h2>La prueba del agua</h2>
        <p>Antes de atacar el snack, bebe un vaso grande de agua. A menudo confundimos las señales de sed con hambre leve. Si a los 10 minutos sigues teniendo hambre, come.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Estrategia visual:</p>
          <p class="mt-2 mb-0">Si tienes galletas en la mesa, comerás galletas. Si tienes un frutero con mandarinas, comerás mandarinas. Diseña tu entorno para que la opción saludable sea la más fácil.</p>
        </div>
      `, 
      en: `
        <p class="lead">It's 5 PM. You ate well, but suddenly you want to devour the vending machine. You are not weak, it's biology. Your glucose has dropped and your brain is looking for quick energy. The key isn't to resist, it's to be prepared.</p>

        <h2>Salty vs. Sweet</h2>
        <p>Identify what your body is asking for. Sometimes it's thirst, sometimes it's boredom, but if it's real hunger, feed it with nutrients.</p>

        <h3>Sweet Option: Dark Chocolate + Almonds</h3>
        <p>Two squares of chocolate (minimum 70% cocoa) and a handful of raw almonds. The magnesium in chocolate relaxes, and the fat in almonds satiates. It's the perfect dessert that doesn't spike insulin.</p>

        <img src="https://images.unsplash.com/photo-1599599810769-bcde5a1645f7?auto=format&fit=crop&q=80&w=800" alt="Apple healthy snack" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />

        <h3>Salty Option: Homemade Popcorn</h3>
        <p>Popcorn is actually a whole grain full of fiber. The problem is movie theater popcorn (trans fats) or microwave bags (chemicals). Make them in a pot with a little olive oil and salt. High volume, low calories.</p>

        <h3>Fresh Option: Apple with Peanut Butter</h3>
        <p>Classic for a reason. The fiber in the apple fills your stomach, the protein in the peanut butter takes away the hunger. Make sure the butter is 100% peanuts, no added sugar.</p>

        <h2>The Water Test</h2>
        <p>Before attacking the snack, drink a large glass of water. We often confuse thirst signals with mild hunger. If 10 minutes later you are still hungry, eat.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
          <p class="font-bold text-brand-800 m-0">⚡ Visual Strategy:</p>
          <p class="mt-2 mb-0">If you have cookies on the table, you will eat cookies. If you have a fruit bowl with tangerines, you will eat tangerines. Design your environment so the healthy choice is the easiest one.</p>
        </div>
      ` 
    },
    author: "Sebastián",
    date: "2026-01-15",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    readTime: 4
  }
];