import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import FloatingActions from './components/FloatingActions';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/Cursor';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Experience = lazy(() => import('./pages/Experience'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Contact = lazy(() => import('./pages/Contact'));

function AppShell() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 90, easing: 'ease-out-cubic' });
    setMounted(true);
  }, []);

  if (!mounted) return <Loader fullScreen />;
  return <AppShell />;
}
