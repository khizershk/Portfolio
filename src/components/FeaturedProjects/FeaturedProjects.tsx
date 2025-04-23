import { motion } from 'framer-motion';
import './FeaturedProjects.css';
import projectImage1 from '../../assets/Portfolio.png';
import projectImage2 from '../../assets/Mask group.png';


const projects = [
  {
    id: 1,
    title: 'Digital Banking Platform',
    description: 'A modern banking solution that transforms financial services with AI-powered insights and seamless user experience.',
    image: projectImage1,
    isReversed: false,
  },
  {
    id: 2,
    title: 'Smart Portfolio Analytics',
    description: 'Advanced portfolio management system with real-time tracking and predictive analysis for investment optimization.',
    image: projectImage2,
    isReversed: true,
  },

];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="featured-projects">
      <div className="featured-projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.isReversed ? 'reversed' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="project-content">
                <span className="featured-label">Featured Project</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description-card">
                  <p>{project.description}</p>
                </div>
              </div>
              <motion.div
                className="project-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
