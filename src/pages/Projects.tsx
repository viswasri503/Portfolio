import { motion } from 'framer-motion';
import '../css/Projects.css';

const projects = [
  {
    title: 'Real-Time Logistics Tracker',
    description:
      'A web app for tracking delivery drivers on a live map using WebSockets and Mapbox.',
    tech: ['React', 'TypeScript', 'Mapbox', 'WebSocket'],
    link: 'https://github.com/viswasri503/real-time-logistics-tracker',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'An interactive dashboard built with Recharts and FusionCharts for data-driven insights.',
    tech: ['React', 'FusionCharts', 'Recharts'],
    link: 'https://github.com/viswasri503/Portfolio',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio site with animations, routing, and responsive design.',
    tech: ['React', 'Framer Motion', 'CSS Modules'],
    link: 'https://portfolio-ten-kohl-26.vercel.app/',
  },
];

const Projects = () => {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
                {project.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                    {tech}
                    </span>
                ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;