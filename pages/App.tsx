import React, { createContext, useState, useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Category } from './pages/Category';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { Language } from './types';
import { ModalProvider } from './contexts/ModalContext';
import { NewsletterModal } from './components/NewsletterModal';

// Language Context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <HelmetProvider>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ModalProvider>
          <Router>
            <ScrollToTop />
            <NewsletterModal />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:slug" element={<Article />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Legal />} />
                <Route path="/terms" element={<Legal />} />
                <Route path="/cookies" element={<Legal />} />
              </Routes>
            </Layout>
          </Router>
        </ModalProvider>
      </LanguageContext.Provider>
    </HelmetProvider>
  );
};

export default App;