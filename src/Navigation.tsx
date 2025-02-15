import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const base = "/portfolio";

  const links = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Resume", path: "resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-tight text-gray-800 hover:opacity-80 transition-opacity cursor-pointer"
          >
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-600 font-medium"
                className="cursor-pointer transition-colors hover:text-blue-600 text-gray-700"
              >
                {link.name}
              </Link>
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
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg animate-fade-in"
          >
            <div className="px-4 py-3 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-800 hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
