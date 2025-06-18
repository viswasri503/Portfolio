import '../css/Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section className="home"
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className="intro">
        <h1>Hi, I'm <span className="highlight">Viswasri Kakarla</span> 👋</h1>
        <h2>React | TypeScript | Angular | HTML | CSS | JavaScript | ES6</h2>
        <p>
            UI/Front-end developer focused on building fast, accessible, and elegant web experiences.
            I work with front end technologies to turn ideas into interactive, high-performing interfaces.
            Excited to collaborate and create real impact through code!
        </p>
        <p className="intro">
            I also have experience working with various styling technologies including Bootstrap for responsive layouts,
            Tailwind CSS for utility-first styling, and CSS preprocessors like Sass and Less for scalable CSS architecture.
        </p>
        <p>
            I also have hands-on experience managing complex application state using tools like Redux, Context API (for React), and reactive patterns with RxJS and NgRx in Angular applications.
        </p>
        <p>
            I have experience building interactive dashboards and reports using data visualization libraries like D3.js, Recharts, FusionCharts, ZoomCharts, and Three.js to deliver meaningful insights through compelling visuals.
        </p>

        <a href="#projects" className="btn">View Projects</a>
      </div>
    </motion.section>
  );
};

export default Home;