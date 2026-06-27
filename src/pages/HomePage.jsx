import { useEffect, useState } from 'react';
import Hero from '../components/sections/Hero';

const idle = (callback) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, { timeout: 1200 });
  }

  return window.setTimeout(callback, 350);
};

const cancelIdle = (handle) => {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(handle);
    return;
  }

  window.clearTimeout(handle);
};

export default function HomePage() {
  const [HomeSections, setHomeSections] = useState(null);

  useEffect(() => {
    let mounted = true;

    const handle = idle(() => {
      import('./HomeSections').then((module) => {
        if (mounted) setHomeSections(() => module.default);
      });
    });

    return () => {
      mounted = false;
      cancelIdle(handle);
    };
  }, []);

  return (
    <>
      <Hero />
      {HomeSections ? <HomeSections /> : <div className="home-sections-placeholder" aria-hidden="true" />}
    </>
  );
}
