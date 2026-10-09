import { useEffect } from 'react';
import AOS from 'aos';
import { Sidebar } from '@/components/layout/Sidebar';
import { Preloader } from '@/components/layout/Preloader';
import { BackToTop } from '@/components/layout/BackToTop';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Resume } from '@/components/sections/Resume';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <>
      <Preloader />
      <Sidebar />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
