import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "Personal site built with React and Tailwind.",
    imageSrc: "/public/projects/portfolio.png",
    link: "https://github.com/adelestrysse/Portfolio",
  },
  {
    title: "AppEvent",
    description: "Project from 'Software Engineering'",
    imageSrc: "/public/projects/appevent.png",
    link: "https://github.com/adelestrysse/AppEvent",
  },
  {
    title: "Autobank",
    description: "Receipt application built with fellow committee members.",
    imageSrc: "/public/projects/autobank.png",
    link: "https://github.com/appKom/Autobank-frontend",
  },
  {
    title: "OnlineFondet",
    description: "Fund application built with fellow committee members.",
    imageSrc: "/public/projects/onlinefondet.png",
    link: "https://github.com/appKom/penne",
  },
  {
    title: "MovieLibrary",
    description: "Project from 'Informatics Project 1'",
    imageSrc: "/public/projects/movie_library.png",
    link: "https://github.com/adelestrysse/MovieLibrary",
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const goPrev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  if (showAll) {
    return (
      <div
        id="projects"
        className="max-w-5xl mx-auto p-10 flex flex-col gap-6 scroll-mt-24"
      >
        <h2 className="text-3xl mb-6 font-bold text-shadow-md/80 text-shadow-magical-glow">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
        <button
          onClick={() => setShowAll(false)}
          className="text-lg self-center bg-second-background px-4 py-2 rounded-lg hover:bg-primary-accent shadow-magical-glow shadow-md transition duration-300 hover:cursor-pointer"
        >
          Back to carousel
        </button>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="max-w-md mx-auto flex flex-col items-center gap-6 scroll-mt-24"
    >
      <h2 className="text-3xl mb-6 font-bold text-shadow-md/80 text-shadow-magical-glow">
        Projects
      </h2>
      <div className="w-full">
        <ProjectCard
          title={projects[index].title}
          description={projects[index].description}
          imageSrc={projects[index].imageSrc}
          link={projects[index].link}
        />
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="bg-second-background p-2 rounded-lg hover:bg-primary-accent shadow-magical-glow shadow-md transition duration-300 cursor-pointer"
        >
          ←
        </button>

        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition duration-300 ${
                i === index ? "bg-primary-accent" : "bg-second-background"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next project"
          className="bg-second-background p-2 rounded-lg hover:bg-primary-accent shadow-magical-glow shadow-md transition duration-300 cursor-pointer"
        >
          →
        </button>
      </div>

      <button
        onClick={() => setShowAll(true)}
        className="text-lg underline opacity-80 hover:opacity-100 transition duration-300 hover:cursor-pointer"
      >
        See all
      </button>
    </div>
  );
}
