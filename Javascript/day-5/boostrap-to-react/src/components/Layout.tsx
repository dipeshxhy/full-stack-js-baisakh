import { footerLogo, logo } from '../assets/media';
import { footerColumns, navLinks } from '../content';

type LayoutProps = {
  currentPath: string;
  children: React.ReactNode;
};

export default function Layout({ currentPath, children }: LayoutProps) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-brand" href="/">
            <img src={logo} alt="Prefix" />
            <span>Prefix</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className={currentPath === link.path ? 'active' : undefined}
                href={link.path}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-actions">
            <a className="button-soft" href="/shop">
              Buy now
            </a>
            <a className="button-outline" href="/contact">
              Login
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-panel">
          <div className="footer-grid">
            <div>
              <a className="site-brand" href="/">
                <img src={footerLogo} alt="Prefix" />
                <span>Prefix</span>
              </a>
              <p>
                A React conversion of the Prefix marketplace template with reusable sections, routed
                pages, and a cleaner structure.
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul className="footer-links">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3>Contact us</h3>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+011234567">+01 1234567</a>
                </li>
                <li>
                  <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                </li>
              </ul>
              <div className="footer-subscribe">
                <input type="email" placeholder="Enter your email" aria-label="Email address" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>

          <p className="footer-note">2020 All Rights Reserved. Design by Free Html Templates.</p>
        </div>
      </footer>
    </div>
  );
}
