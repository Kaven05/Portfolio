
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex items-center space-x-4"
    >
      <span className="text-sm text-muted-foreground">Follow me:</span>
      <div className="flex space-x-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
            title={social.label}
          >
            <social.icon size={20} className="text-muted-foreground hover:text-primary transition-colors duration-300" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
