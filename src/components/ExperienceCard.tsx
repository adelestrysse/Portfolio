import type React from "react";

type ExperienceCardProps = {
  year: string;
  title: string;
  children: React.ReactNode;
};

export default function ExperienceCard({
  year,
  title,
  children,
}: ExperienceCardProps) {
  return (
    <div>
      <h1>{year}</h1>
      <h1 className="text-2xl text-shadow-md/50 text-shadow-magical-glow">
        {title}
      </h1>
      <p>{children}</p>
    </div>
  );
}
