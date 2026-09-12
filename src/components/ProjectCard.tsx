type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  link,
}: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="h-86 group bg-second-background rounded-2xl overflow-hidden shadow-md shadow-magical-glow transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-magical-glow">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-2xl mb-2">{title}</h3>
          <p className="text-base opacity-80">{description}</p>
        </div>
      </div>
    </a>
  );
}
