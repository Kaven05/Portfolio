import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed">
            I am a highly motivated undergraduate student specializing in Information and Communication
            Engineering, with a passion for daily learning. My interests lie in Data Structures and Algorithms,
            Machine Learning, and Object-Oriented Programming concepts. I have practical experience with
            ML services and am continually seeking to expand my skill set
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I love working with React, TypeScript, Node.js, and modern design frameworks
            to bring ideas to life. When I'm not coding, you can find me exploring new
            technologies, contributing to open source, or sharing knowledge with the community.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
