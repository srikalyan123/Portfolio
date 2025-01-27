import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
//import viteConfig from '../vite.config.ts';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const base = 'portfolio';
  const links = [
    { name: "Home", path: base+"/" },
    { name: "About", path: base+"/about" },
    { name: "Skills", path: base+"/skills" },
    { name: "Experience", path: base+"/experience" },
    { name: "Projects", path: base+"/projects" },
    { name: "Blog", path: base+"/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            onClick={() => handleNavigation("/")}
            className="text-2xl font-bold tracking-tight text-gray-800 hover:opacity-80 transition-opacity cursor-pointer"
          >
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex space-x-8">
            {links.map((link) => (
              <button key={link.name} onClick={() => handleNavigation(link.path)} className={`transition-colors hover:text-blue-600 ${
                  location.pathname === link.path
                    ? "text-blue-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="px-4 py-3 space-y-2">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-800 hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
