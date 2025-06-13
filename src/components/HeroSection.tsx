
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import { Suspense } from 'react';
import SocialLinks from './SocialLinks';

const FloatingCube = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8A2BE2" />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#4B0082" wireframe />
      </mesh>
    </Float>
  );
};

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
              <span className="text-gradient">
                Alex
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
              View My Work
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

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-96 lg:h-[500px] relative"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloatingCube />
              <FloatingSphere position={[-2, 1, 0]} />
              <FloatingSphere position={[2, -1, 0]} />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
