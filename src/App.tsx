import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WorkExperience from './components/WorkExperience/WorkExperience';
import About from './components/About/About';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <About />
        <FeaturedProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App
