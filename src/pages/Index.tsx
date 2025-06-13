
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-10"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Gradient blur effects */}
      <div className="fixed top-0 left-0 w-96 h-96 gradient-blur opacity-30 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 gradient-blur opacity-30 pointer-events-none" />
    </div>
  );
};

export default Index;
