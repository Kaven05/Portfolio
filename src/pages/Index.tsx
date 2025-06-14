import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden grid-pattern">
      <ParticleBackground />
      <Navigation />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          id="hero"
          className="w-full max-w-6xl"
        >
          <HeroSection />
        </motion.section>
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          id="about"
          className="w-full max-w-6xl"
        >
          <AboutSection />
        </motion.section>
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          id="projects"
          className="w-full max-w-6xl"
        >
          <ProjectsSection />
        </motion.section>
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          id="skills"
          className="w-full max-w-6xl"
        >
          <SkillsSection />
        </motion.section>
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          id="contact"
          className="w-full max-w-6xl"
        >
          <ContactSection />
        </motion.section>
      </div>
      {/* Gradient blur effects */}
      <div className="fixed top-0 left-0 w-96 h-96 gradient-blur opacity-30 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 gradient-blur opacity-30 pointer-events-none" />
    </div>
  );
};

export default Index;
