import { LuMail, LuMapPin } from "react-icons/lu";

export default function () {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 p-10 w-full max-w-5xl mx-auto">
      <section className="flex flex-col gap-3 max-w-md text-center md:text-left items-center md:items-baseline">
        <h1 className="font-beyond text-7xl mb-6 text-shadow-magical-glow text-shadow-lg/40">
          Adele Xiao Yuan Strysse
        </h1>
        <p className="text-3xl mb-2 text-shadow-md/40 text-shadow-magical-glow">
          Web Developer
        </p>
        <span className="flex flex-row gap-4 text-lg">
          <a
            href="https://www.linkedin.com/in/adele-strysse/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-second-background p-2 rounded-lg hover:bg-primary-accent shadow-magical-glow shadow-md transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adelestrysse"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-second-background p-2 rounded-lg hover:bg-primary-accent shadow-magical-glow shadow-md transition duration-300"
          >
            GitHub
          </a>
          <a
            href="/CV Adele Xiao Yuan Strysse.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-second-background p-2 rounded-lg hover:bg-primary-accent shadow-magical-glow shadow-md transition duration-300"
          >
            Resume
          </a>
        </span>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          <div className="flex items-center gap-2">
            <LuMail className="text-xl" />
            <p>adelestrysse@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <LuMapPin className="text-xl" />
            <p>Veggli & Trondheim</p>
          </div>
        </div>
      </section>
      <div className="relative w-75 h-75 shrink-0">
        <div
          className="orbit-ring absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, transparent 85%, color-mix(in srgb, var(--color-magical-glow) 90%, transparent) 92%, var(--color-magical-glow) 96%, transparent 100%)",
            filter: "blur(3px)",
          }}
        />
        <img
          src="/profile_pic.jpg"
          className="absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] rounded-full object-cover"
        />
      </div>
    </main>
  );
}
