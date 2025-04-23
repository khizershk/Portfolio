import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../../assets/image 1.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-layout">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ flex: '0 0 auto', marginRight: '2rem' }}
            >
              <motion.img
                src={heroImage}
                alt="Hero Avatar"
                className="main-image"
                style={{
                  width: '258px',
                  height: '259px',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '10px'
                }}
              />
            </motion.div>
            <div className="hero-text-content">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-title"
                style={{
                  fontFamily: 'Preahvihear',
                  fontSize: '50px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                  textAlign: 'left',
                  fontWeight: 400,
                  color: '#fff',
                  marginBottom: '20px'
                }}
              >
                Hello! I Am <span className="highlight">Ibrahim Memon</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-subtitle"
                style={{
                  fontFamily: 'Preahvihear',
                  fontWeight: 400,
                  fontSize: '32px',
                  lineHeight: '1.5',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                  color: '#fff',
                  marginTop: '20px'
                }}
              >
                I'm a <span className="highlight">Software Engineer</span>
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontFamily: 'Preahvihear',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '1.5',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                  color: '#fff',
                  marginTop: '15px'
                }}
              >
                Currently, I'm a Software Engineer at <span className="highlight">Facebook</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontFamily: 'Preahvihear',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '100%',
                  letterSpacing: '2%',
                  verticalAlign: 'middle',
                  textAlign: 'left',
                  color: '#ccc',
                  marginTop: '10px'
                }}
              >
                A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;