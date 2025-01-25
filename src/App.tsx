import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
//import viteConfig from '../vite.config.ts';

const queryClient = new QueryClient();
const base = 'portfolio';
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path= {base +"/"} element={<Home />} />
          <Route path= {base+"/about"} element={<About />} />
          <Route path={base+"/skills"} element={<Skills />} />
          <Route path={base+"/experience"} element={<Experience />} />
          <Route path={base+"/projects"} element={<Projects />} />
          <Route path={base+"/blog"} element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;