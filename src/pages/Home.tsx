import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profile from '../assets/profile.jpg';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  const navigate = useNavigate();
  const base = '/portfolio'; // Make sure base is correct for your routes

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-background to-muted">
      <div className="flex flex-col items-center text-center mt-10">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Sri Kalyan"
          className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg mb-6"
        />
        
        {/* Name and Intro */}
        <h2 className="text-5xl font-bold leading-tight">I’m Sri Kalyan</h2>
        {/* <span className="text-blue-400">Software Developer</span> */}
        
        <p className="text-gray-400 mt-4 max-w-xl">
          I am a passionate Software Developer with expertise in designing, building, and deploying cloud-native applications. 
          With a focus on delivering scalable, secure, and efficient solutions, I specialize in utilizing modern frameworks 
          and cloud platforms to bring innovative ideas to application.
        </p>

        {/* Buttons for navigation */}
        <div className="mt-8 flex space-x-6">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-blue-600 font-medium"
          className="px-6 py-3 bg-blue-500 text-lg font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Discover My Journey
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-blue-600 font-medium"
          className="px-6 py-3 text-white bg-gray-800 border border-gray-600 text-lg font-semibold rounded-lg hover:bg-gray-700 transition"
        >
          Explore My Work
        </ScrollLink>
      </div>
      </div>
    </div>
  );
};

export default Home;
