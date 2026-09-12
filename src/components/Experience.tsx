import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto p-10 text-xl scroll-mt-24"
    >
      <h2 className="text-3xl mb-6 font-bold text-shadow-md/80 text-shadow-magical-glow">
        Experience
      </h2>
      <div className="space-y-10">
        <ExperienceCard
          year="June 2026 - Aug 2026"
          title="DNB Summer Internship"
        >
          I worked as a Software Developer summer 2026, from June to August (8
          weeks), during a summer internship. Here, I became a part of an
          already-existing team, working on projects revolving around DNB's
          corporate customers. I worked on improving a project already in
          production, as well as setting up a new project that was being
          transferred to our team.
        </ExperienceCard>
        <div className="h-px flex bg-primary-accent/40" />
        <ExperienceCard
          year="Jan 2025 - May 2025 & Jan 2026 - May 2026"
          title="Student Assistant"
        >
          During my studies, I've worked as a student assistent in
          Human-Computer Interaction TDT4180 two times. My work consisted of
          helping other students to understand the importance of design when
          developing, and grading their reports.
        </ExperienceCard>
      </div>
    </section>
  );
}
