import { useState } from "react"
import { Button } from "./ui/button"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm drop-shadow-sm">AL</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Adele Strysse
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#work"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Contact
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
                <a href="#work" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                  Work
                </a>
                <a href="#about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Contact
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