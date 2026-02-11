import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Heart, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_TEXT, CATEGORIES } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Newsletter State
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('loading');
    
    // Simulate API call and log email capture
    console.log("Captured subscriber email:", email);
    
    setTimeout(() => {
      setSubStatus('success');
      setEmail('');
    }, 1500);
  };

  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logic: Handle Logo Click
  const handleLogoClick = () => {
    // Always scroll to top smoothly when clicking the logo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close menu if open (mobile ux)
    setIsMenuOpen(false);
  };

  // Scroll detection for Header visual change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UX: Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // UX: Lock Body Scroll when Menu is Open to prevent background scrolling/overlap
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-brand-100 selection:text-brand-900">
      
      {/* Fixed Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isMenuOpen ? 'bg-white shadow-sm border-gray-200 py-2' : 'bg-white/95 backdrop-blur-md border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo - Added onClick handler for smooth scroll */}
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group relative z-50"
              aria-label={language === 'es' ? 'Ir al inicio' : 'Go to homepage'}
            >
              <div className="bg-brand-600 text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-200">
                <Heart size={22} fill="currentColor" strokeWidth={2.5} />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-gray-900">Alura</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{UI_TEXT.nav_home[language]}</Link>
              {CATEGORIES.map(cat => (
                 <Link key={cat.id} to={`/category/${cat.id}`} className="text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors">
                   {cat.label[language]}
                 </Link>
              ))}
              <Link to="/coming-soon" className="text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors">{UI_TEXT.nav_coming_soon[language]}</Link>
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-5">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-700 transition-colors uppercase tracking-wide px-2 py-1 rounded-md hover:bg-gray-50"
                aria-label="Switch Language"
              >
                <Globe size={16} />
                <span>{language}</span>
              </button>
              <button 
                onClick={scrollToNewsletter}
                className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-brand-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {UI_TEXT.btn_subscribe[language]}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-800 relative z-50 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {/* Added h-[100dvh] for mobile browser support and bg-white specifically to prevent transparency */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 h-[100dvh] overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-hidden={!isMenuOpen}
        >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                className="text-gray-900 border-b border-gray-100 pb-2"
              >
                {UI_TEXT.nav_home[language]}
              </Link>
              
              {CATEGORIES.map(cat => (
                 <Link 
                   key={cat.id} 
                   to={`/category/${cat.id}`} 
                   className="text-gray-600 hover:text-brand-600 flex items-center gap-3"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <cat.icon size={20} className={cat.color} />
                   {cat.label[language]}
                 </Link>
              ))}
              <Link to="/coming-soon" onClick={() => setIsMenuOpen(false)} className="text-gray-600 pt-4">{UI_TEXT.nav_coming_soon[language]}</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-600 pt-4">{UI_TEXT.footer_contact[language]}</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-600 pt-4">{UI_TEXT.nav_about[language]}</Link>
            </nav>
            
            <div className="mt-auto mb-8 space-y-4">
              <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                <span className="text-gray-500 text-sm font-medium">{UI_TEXT.footer_language_selector[language]}</span>
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg font-bold text-gray-700 active:bg-gray-200 transition-colors"
                >
                  <Globe size={18} />
                  <span>{language === 'es' ? 'Español' : 'English'}</span>
                </button>
              </div>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToNewsletter();
                }}
                className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                {UI_TEXT.btn_subscribe[language]}
              </button>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>

      {/* Footer - Rebuilt for SEO, Functionality & Compliance */}
      <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* 1. Brand & Description (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
               <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
                  <div className="bg-brand-500 text-white p-1.5 rounded-lg group-hover:bg-brand-400 transition-colors">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <span className="font-serif font-bold text-2xl tracking-tight">Alura</span>
               </Link>
               <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                 {UI_TEXT.footer_description[language]}
               </p>
               {/* Social Icons (Only Instagram) */}
               <div className="flex items-center gap-4 pt-2">
                 <Link to="/contact" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all text-gray-400">
                    <Instagram size={18} />
                 </Link>
               </div>
            </div>
            
            {/* 2. Site Navigation (2 cols) */}
            <nav className="lg:col-span-2" aria-label="Footer Main Navigation">
              <h4 className="font-bold text-white mb-6 font-serif tracking-wide text-sm uppercase">{UI_TEXT.nav_home[language]}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <Link to={`/category/${cat.id}`} className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-brand-400 transition-colors"></span>
                      {cat.label[language]}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/about" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-brand-400 transition-colors"></span>
                     {UI_TEXT.footer_about[language]}
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-brand-400 transition-colors"></span>
                     {UI_TEXT.nav_coming_soon[language]}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* 3. Legal & Trust (2 cols) */}
            <nav className="lg:col-span-2" aria-label="Footer Legal Navigation">
              <h4 className="font-bold text-white mb-6 font-serif tracking-wide text-sm uppercase">{UI_TEXT.footer_legal[language]}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">{UI_TEXT.footer_privacy[language]}</Link></li>
                <li><Link to="/terms" className="hover:text-brand-400 transition-colors">{UI_TEXT.footer_terms[language]}</Link></li>
                <li><Link to="/cookies" className="hover:text-brand-400 transition-colors">{UI_TEXT.footer_cookies[language]}</Link></li>
                <li><Link to="/contact" className="hover:text-brand-400 transition-colors">{UI_TEXT.footer_contact[language]}</Link></li>
              </ul>
            </nav>

            {/* 4. Newsletter (4 cols) */}
            <div className="lg:col-span-4" id="newsletter">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h4 className="font-bold text-white mb-2 font-serif flex items-center gap-2">
                   <Mail size={18} className="text-brand-400" />
                   {UI_TEXT.newsletter_title[language]}
                </h4>
                <p className="text-xs text-gray-400 mb-4">
                  {UI_TEXT.newsletter_desc[language]}
                </p>
                
                {subStatus === 'success' ? (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg text-sm font-bold text-center">
                    {UI_TEXT.newsletter_success[language]}
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={UI_TEXT.newsletter_placeholder[language]}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                    <button 
                      type="submit"
                      disabled={subStatus === 'loading'}
                      className="w-full bg-brand-600 text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-brand-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                      {subStatus === 'loading' ? UI_TEXT.newsletter_button_loading[language] : UI_TEXT.btn_subscribe[language]}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Language */}
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <p className="text-[11px] text-gray-500 leading-relaxed max-w-2xl">
                 {UI_TEXT.footer_disclaimer[language]}
               </p>
               <p className="text-[11px] text-gray-600 mt-2 font-bold">
                 &copy; {new Date().getFullYear()} Alura. {UI_TEXT.footer_rights[language]}
               </p>
            </div>

            {/* Language Selector in Footer */}
            <button 
               onClick={toggleLanguage}
               className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 text-xs font-bold text-gray-400 hover:text-white transition-all bg-gray-800/50"
            >
               <Globe size={14} />
               <span>{language === 'es' ? 'Español' : 'English'}</span>
               <span className="text-gray-600">|</span>
               <span className={language === 'en' ? 'text-brand-400' : ''}>EN</span>
               <span className={language === 'es' ? 'text-brand-400' : ''}>ES</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};