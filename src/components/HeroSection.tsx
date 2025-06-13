
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const name = "Kavin";

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{' '}
              <span className="text-gradient inline-block">
                {name.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Full Stack Developer & UI/UX Designer
            </h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-md"
          >
            I create exceptional digital experiences through innovative code and beautiful design.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium neon-glow hover:shadow-lg transition-all duration-300"
            >
              View Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>

          <SocialLinks />
        </motion.div>

        {/* Animated Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-96 lg:h-[500px] relative flex items-center justify-center"
        >
          {/* Floating animated elements */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-lg opacity-80"
          />
          
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              x: [-10, 10, -10]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-60 top-10 right-10"
          />
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute w-12 h-12 border-2 border-primary rounded-lg bottom-20 left-10"
          />

          {/* Central glowing element */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="w-32 h-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full neon-glow opacity-80"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
