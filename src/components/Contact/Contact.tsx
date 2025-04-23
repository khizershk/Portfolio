import { motion } from 'framer-motion';
import './Contact.css';
import portfolioLogo from '../../assets/Portfolio.png';
import instaIcon from '../../assets/insta.webp';
import dribbbleIcon from '../../assets/dribbble.jpg';
import googleIcon from '../../assets/Google.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.img
          src={portfolioLogo}
          alt="Portfolio Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '120px',
            height: 'auto',
            marginBottom: '2rem'
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Contact
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="contact-message">
            I'm always excited to collaborate on innovative projects and explore new opportunities.
            Let's create something amazing together!
          </p>

          <motion.a
            href="mailto:ibrahim@example.com"
            className="email-link"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            ibrahim@example.com
          </motion.a>

          <div className="social-links">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={instaIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </motion.a>
            <motion.a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={dribbbleIcon} alt="Dribbble" style={{ width: '24px', height: '24px' }} />
            </motion.a>
            <motion.a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={googleIcon} alt="Google" style={{ width: '24px', height: '24px' }} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;