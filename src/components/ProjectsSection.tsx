import { motion } from 'framer-motion';
import { Github, Projector } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Freelancive — Freelance Marketplace Web Application',
      description: 'Built a full-stack freelance platform for clients to post projects and freelancers to submit proposals.',
      technologies: ['React', 'Node.js', ' Express ',' MongoDB ',' Tailwind CSS ','  Render '],
      githubUrl: 'https://github.com/Kaven05/Freelancive-Service',
      liveUrl: 'https://freelancive-service-frontend.onrender.com/',
    },
    {
      id: 2,
      title: 'Live Emotion Detector using Deep Learning',
      description: 'A real-time facial emotion detection system using OpenCV and a pre-trained CNN model',
      technologies: [' Python ',' TensorFlow ',' Keras ',' OpenCV ',' NumPy ',' Scikit-learn ',' ResNet'],
      githubUrl: 'https://github.com/Kaven05/live-emotion-detector',
      liveUrl: 'https://github.com/Kaven05/live-emotion-detector',
    },
    {
      id: 3,
      title: 'Tour Management Service - Backend',
      description: 'A backend API for a complete Tour Management platform',
      technologies: ['Node.js', ' Express ',' MongoDB ','Multer'],
      githubUrl: 'https://github.com/Kaven05/TourManagement-service',
      liveUrl: 'https://github.com/Kaven05/TourManagement-service',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-lg overflow-hidden group p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-secondary/50 hover:bg-secondary rounded-lg text-sm transition-colors duration-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.a>
                
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg text-sm transition-colors duration-300"
                >
                  <Projector size={16} />
                  <span>Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
