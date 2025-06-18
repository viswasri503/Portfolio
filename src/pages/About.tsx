import '../css/About.css';
import { FaCode, FaLaptopCode, FaTools,FaPalette,FaProjectDiagram,FaChartBar  } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section className="about" id="about"
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>
      <h2>About Me</h2>
      <p className="intro">
        I'm a front-end developer with experience in building responsive, interactive, and user-friendly web applications.
        I specialize in using modern technologies to transform designs into clean, efficient code.
        I enjoy solving problems through code, continuously learning, and delivering seamless user experiences.
      </p>

      <div className="skills">
        <motion.div className="skill-box"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
          <FaCode className="icon" />
          <h3>Core Skills</h3>
          <p>HTML5, CSS3, JavaScript (ES6+), TypeScript, JSON</p>
        </motion.div>

        <motion.div className="skill-box" 
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
          <FaLaptopCode className="icon" />
          <h3>Frameworks</h3>
          <p>React, Angular, jQuery</p>
        </motion.div>

        <motion.div className='skill-box' whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
            <FaPalette  className="icon" />
            <h3>Styling & UI Frameworks</h3>
            <p>Bootstrap, Tailwind CSS, Sass, Less, Flexbox, Styled Componets</p>
        </motion.div>

        <motion.div className="skill-box" whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        <FaProjectDiagram className="icon" />
        <h3>State Management</h3>
        <p>Redux, Context API (React), RxJS, NgRx (Angular)</p>
        </motion.div>                                                               

        <motion.div className="skill-box" whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        <FaChartBar className="icon" />
        <h3>Data Visualization</h3>
        <p>FusionCharts, ZoomCharts, D3.js, Recharts, Three.js</p>
        </motion.div>

        <motion.div className="skill-box"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
          <FaTools className="icon" />
          <h3>Development Tools</h3>
          <p>Git, Visual Studio Code, Responsive Design, Component Architecture</p>
        </motion.div>

        
      </div>

      <p className="closing">
        I take pride in writing maintainable code and building applications that bring real value to users. I’m passionate about creating visual and functional excellence on the front end.
      </p>
    </motion.section>
  );
};

export default About;