import { motion } from 'framer-motion';
import './WorkExperience.css';
import group1Icon from '../../assets/Group 1.png';
import group2Icon from '../../assets/Group 2.png';
import iconsImage from '../../assets/Icons.png';
import portfolioImage from '../../assets/Group 1938.png';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      icon: group1Icon,
    },
    {
      id: 2,
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      icon: group2Icon,
    },
    {
      id: 3,
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      icon: iconsImage,
    },
    {
      id: 4,
      title: 'CIB on the Mobile',
      description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
      icon: portfolioImage,
    },
  ];

  return (
    <section id="experience" className="work-experience">
      <div className="work-experience-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            color: '#fff',
            fontFamily: 'Preahvihear',
            fontSize: '42px',
            marginBottom: '4rem',
            textAlign: 'center'
          }}
        >
          Work Experience
        </motion.h2>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="experience-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-icon">
                <img src={experience.icon} alt={experience.title} />
              </div>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <button className="learn-more-btn">LEARN MORE</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;