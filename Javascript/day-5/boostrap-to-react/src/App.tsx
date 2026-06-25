import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import './App.css';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  let page = <NotFoundPage />;

  if (pathname === '/' || pathname === '/home') {
    page = <HomePage />;
  } else if (pathname === '/about') {
    page = <AboutPage />;
  } else if (pathname === '/pricing') {
    page = <PricingPage />;
  } else if (pathname === '/shop') {
    page = <ShopPage />;
  } else if (pathname === '/services') {
    page = <ServicesPage />;
  } else if (pathname === '/contact') {
    page = <ContactPage />;
  }

  return <Layout currentPath={pathname}>{page}</Layout>;
}
