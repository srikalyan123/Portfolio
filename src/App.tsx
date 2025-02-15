import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./Navigation";
import Footer from "./footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
//import viteConfig from '../vite.config.ts';

const queryClient = new QueryClient();
const base = 'portfolio';
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="border-4 border-gray-500 p-4 rounded-lg">
          {/* Navigation with smooth scrolling */}
          <Navigation />

          {/* Routes for traditional navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path={"/resume"} element={<Resume />} />
          </Routes>

          {/* Components that appear on scroll */}
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="experience"><Experience /></div>
          <div id="projects"><Projects /></div>
          <div id="Resume"><Resume /></div>
          <Footer />
        </div>
      </BrowserRouter>

      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;