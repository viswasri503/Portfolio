import { motion } from 'framer-motion';
import '../css/TechStack.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaSass,
  FaLess,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiTypescript, SiJquery, SiD3Dotjs } from 'react-icons/si';

const techStack = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
  { name: 'jQuery', icon: <SiJquery />, color: '#0769AD' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
  { name: 'Sass', icon: <FaSass />, color: '#CC6699' },
  { name: 'Less', icon: <FaLess />, color: '#1D365D' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'D3.js', icon: <SiD3Dotjs />, color: '#F9A03C' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
];

const TechStack = () => {
  return (
    <motion.section
      className="techstack"
      id="techstack"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {techStack.map((tech, i) => (
          <motion.div
            className="tech-card"
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
