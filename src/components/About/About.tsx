import { motion } from 'framer-motion';
import './About.css';

import jsIcon from '../../assets/Skills.png';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: jsIcon },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        ></motion.div>

        <div className="skills-container">
          <div className="skills-circle">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  position: 'absolute',
                  transform: `rotate(${index * (360 / skills.length)}deg) translateY(-120px) translateX(120px)`,
                }}
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;