type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Vite",
      "SQLite3",
      "JavaFX",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "Figma",
      "Postman",
      "VS Code",
      "Maven",
      "Firebase",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto p-10 mb-10 scroll-mt-24">
      <h2 className="text-3xl mb-10 font-bold text-shadow-md/80 text-shadow-magical-glow">
        Skills & Tools
      </h2>

      <div className="flex flex-col gap-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="flex flex-col gap-4">
            <h3 className="text-lg uppercase tracking-wide opacity-70">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-second-background px-4 py-2 rounded-full text-base shadow-magical-glow shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-magical-glow hover:bg-primary-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
