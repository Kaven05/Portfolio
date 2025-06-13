
import { motion } from 'framer-motion';
import { Code, Briefcase, Star } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Briefcase, label: 'Years Experience', value: '5+' },
    { icon: Star, label: 'Happy Clients', value: '30+' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. My passion lies 
              in bridging the gap between design and development, ensuring that every project 
              is both beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love working with React, TypeScript, Node.js, and modern design frameworks 
              to bring ideas to life. When I'm not coding, you can find me exploring new 
              technologies, contributing to open source, or sharing knowledge with the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
