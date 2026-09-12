export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-navbar/80 backdrop-blur-md shadow-md shadow-magical-glow h-16 mb-12 flex items-center justify-center gap-10">
      <a
        href="#about"
        className="text-lg opacity-80 hover:opacity-100 hover:text-primary-accent transition duration-300"
      >
        About
      </a>
      <a
        href="#experience"
        className="text-lg opacity-80 hover:opacity-100 hover:text-primary-accent transition duration-300"
      >
        Experience
      </a>
      <a
        href="#projects"
        className="text-lg opacity-80 hover:opacity-100 hover:text-primary-accent transition duration-300"
      >
        Projects
      </a>
      <a
        href="#skills"
        className="text-lg opacity-80 hover:opacity-100 hover:text-primary-accent transition duration-300"
      >
        Skills
      </a>
    </nav>
  );
}
