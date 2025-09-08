import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-5 py-6 ${
                        isScrolled
                          ? "bg-white/60 backdrop-blur-md dark:bg-gray-900/80"
                          : "bg-white/0 dark:bg-gray-900/0"
                      } shadow-md`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm drop-shadow-sm">AS</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Adele Xiao Yuan Strysse
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#work"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-300 shadow-sm"
                style={{ background: "linear-gradient(to right, rgb(147 51 234), rgb(219 39 119))" }}
              >
                <span className="text-white font-medium">Resume</span>
              </Button>
              {/* Theme Toggle */}
            <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-purple-50 rounded-lg transition-colors text-gray-700"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-100">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </a>
                <a href="#work" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                  Work
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Skills
                </a>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 w-fit shadow-sm"
                  style={{ background: "linear-gradient(to right, rgb(147 51 234), rgb(219 39 119))" }}
                >
                  <span className="text-white font-medium">Resume</span>
                </Button>
              </div>
            </div>
          )}
        </div>
    )
}