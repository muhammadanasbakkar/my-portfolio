const projects = [
  {
    name: "TheraKonnect - (Under Development)",
    tagline: "Pakistan's #1 Mental Healthcare Booking Platform",
    description:
      "A comprehensive therapy booking platform connecting patients with 25,000+ verified therapists across 70+ cities in Pakistan. Features instant appointment confirmation, HIPAA-aligned encrypted records, and specializations ranging from clinical psychology to addiction recovery.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://therakonnect.com",
    gradient: "from-teal-400 to-cyan-500",
    bgGradient: "from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30",
    stats: [
      { label: "Therapists", value: "25K+" },
      { label: "Cities", value: "70+" },
      { label: "Patients Served", value: "5M+" },
    ],
  },
  {
    name: "Fiber Management System",
    tagline: "Enterprise Fiber Network Management",
    description:
      "A full-featured enterprise system for managing fiber optic network infrastructure. Enables organizations to track, monitor, and report on fiber assets with structured data management and real-time operational reporting.",
    tech: ["Next.js", "PostgreSQL", "Node.js"],
    link: "https://fms.fasreports.com",
    gradient: "from-indigo-400 to-purple-500",
    bgGradient: "from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30",
    stats: [
      { label: "Fiber Assets", value: "Tracked" },
      { label: "Monitoring", value: "Real-time" },
      { label: "Scale", value: "Enterprise" },
    ],
  },
  {
    name: "DL1961 ERP",
    tagline: "Enterprise Resource Planning System",
    description:
      "A comprehensive ERP solution for managing business operations, including inventory, finance, and human resources. Features real-time reporting, automated workflows, and seamless integration with existing systems.",
    tech: ["Next.js", "PostgreSQL", "Node.js"],
    link: "https://erp.dl1961.com",
    gradient: "from-blue-400 to-indigo-500",
    bgGradient: "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30",
    stats: [
      { label: "Modules", value: "5+" },
      { label: "Integration", value: "Seamless" },
      { label: "Users", value: "1000+" },
    ],
  },
  {
    name: "ADM Denim Website",
    tagline: "Sustainable Denim Manufacturing Platform",
    description:
      "A comprehensive corporate website for Artistic Denim Mills (ADM), showcasing their vertically integrated denim production from fiber to finished garment. Features sustainable innovation, ethical manufacturing processes, and global certifications with a focus on environmental responsibility.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://admdenim.com",
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
    stats: [
      { label: "Divisions", value: "6" },
      { label: "Water Recycled", value: "70%" },
      { label: "Certifications", value: "20+" },
    ],
  },
  {
    name: "Fascom Limited Website",
    tagline: "Corporate Website for Fascom Limited",
    description:
      "A professional corporate website for Fascom Limited, showcasing company services, team profiles, and business solutions. Features modern design, interactive elements, and comprehensive company information.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://fascom.com",
    gradient: "from-green-400 to-teal-500",
    bgGradient: "from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30",
    stats: [
      { label: "Services", value: "Showcased" },
      { label: "Team", value: "Featured" },
      { label: "Design", value: "Modern" },
    ],
  },
  {
    name: "AgentZena",
    tagline: "AI-Powered Frontend Interface",
    description:
      "A sophisticated frontend UI for AgentZena, an AI-driven platform. Features intuitive user interfaces, real-time data visualization, and seamless integration with backend AI services for enhanced user experience and productivity.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://agentzena.ai",
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30",
    stats: [
      { label: "Components", value: "50+" },
      { label: "AI Integration", value: "Seamless" },
      { label: "Performance", value: "Optimized" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            Real-world applications I&apos;ve built and shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-gradient-to-br ${project.bgGradient} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {project.name}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.tagline}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} text-white hover:opacity-90 transition-opacity shadow-md`}
                    aria-label={`Visit ${project.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
                    >
                      <div className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/70 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-gray-700/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
