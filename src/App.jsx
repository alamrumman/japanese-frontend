import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense, useState } from 'react';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';

// secondary routes — lazy loaded; chunks only fetched on navigation
const MenuPage = lazy(() => import('./pages/MenuPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

const idle = (callback) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, { timeout: 1600 });
  }

  return window.setTimeout(callback, 500);
};

const cancelIdle = (handle) => {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(handle);
    return;
  }

  window.clearTimeout(handle);
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [Footer, setFooter] = useState(null);

  useEffect(() => {
    let mounted = true;

    const handle = idle(() => {
      import('./components/layout/Footer').then((module) => {
        if (mounted) setFooter(() => module.default);
      });
    });

    return () => {
      mounted = false;
      cancelIdle(handle);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="layout">
        <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Suspense>
      </main>
      {Footer ? <Footer /> : null}
    </>
  );
}
