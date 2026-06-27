import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav, site } from '../sections/config/site.config';
import './Navbar.css';

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrollActive, setScrollActive] = useState('/');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;
    const ids = ['top', 'story', 'menu', 'reserve'];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setScrollActive(current === 'top' ? '/' : `/#${current}`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const currentHref = pathname === '/' ? scrollActive : pathname;

  return (
    <>
      <aside className="sidebar" aria-label="Primary">
        <div className="sidebar__inner">
          <Link to="/" className="sidebar__brand">
            <span className="sidebar__brand-ja kanji">{site.nameJa}</span>
            <span className="sidebar__brand-mark">{site.mark}</span>
          </Link>

          <nav className="sidebar__nav">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`sidebar__link ${currentHref === item.href ? 'is-active' : ''}`}
              >
                <span className="sidebar__link-mark" aria-hidden="true" />
                <span className="sidebar__link-text">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="sidebar__bottom">
            <span className="sidebar__lang">日本語</span>
          </div>
        </div>

        <span className="sidebar__edge" aria-hidden="true">
          {site.edge}
        </span>
      </aside>

      <header className="topbar">
        <Link to="/" className="topbar__brand" aria-label={site.nameJa}>
          <span className="kanji">{site.nameJa}</span>
        </Link>
        <button
          className={`topbar__menu ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </header>

      <nav
        className={`drawer ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div className="drawer__inner" onClick={(e) => e.stopPropagation()}>
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="drawer__link"
              onClick={() => setOpen(false)}
            >
              <span className="drawer__link-ja">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
