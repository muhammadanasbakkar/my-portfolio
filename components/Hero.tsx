"use client";

import { useEffect, useState } from "react";

const roles = ["Software Developer", "React.js Engineer", "Full Stack Developer", "Next.js Specialist"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-400/15 dark:bg-indigo-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-400/10 dark:bg-pink-600/5 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center w-full">

        {/* Badge */}
        <div className="opacity-0 animate-fadeInUp mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1 className="opacity-0 animate-fadeInUp delay-100 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none">
          <span className="block text-gray-900 dark:text-white mb-2">Muhammad</span>
          <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Anas
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="opacity-0 animate-fadeInUp delay-200 h-10 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-indigo-500 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        {/* Description */}
        <p className="opacity-0 animate-fadeInUp delay-300 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building modern, scalable web applications with{" "}
          <span className="text-gray-700 dark:text-gray-300 font-medium">React.js</span>,{" "}
          <span className="text-gray-700 dark:text-gray-300 font-medium">Next.js</span>, and{" "}
          <span className="text-gray-700 dark:text-gray-300 font-medium">Node.js</span>.
          {" "}3 years of turning ideas into digital products.
        </p>

        {/* Tech pills */}
        <div className="opacity-0 animate-fadeInUp delay-300 flex flex-wrap justify-center gap-2 mb-10">
          {["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="opacity-0 animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollTo("projects")}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Download Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </button>
        </div>

        {/* Stats row */}
        <div className="opacity-0 animate-fadeInUp delay-500 flex justify-center gap-8 md:gap-16 mb-16">
          {[
            { value: "3+", label: "Years Exp." },
            { value: "10+", label: "Projects" },
            { value: "5+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="opacity-0 animate-fadeInUp delay-600 animate-float">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-500 transition-colors mx-auto"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
