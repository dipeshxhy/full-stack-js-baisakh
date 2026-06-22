import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <div className="bg-[#2F2EA6]">
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="job" element={<h1>Job Page</h1>} />
        <Route path="about" element={<h1>About Page</h1>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
