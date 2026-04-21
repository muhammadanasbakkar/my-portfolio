const skills = [
  {
    name: "React.js",
    icon: "⚛️",
    description: "Component-based UI development with hooks, context, and state management.",
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200 dark:border-cyan-900",
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "Full-stack React framework with SSR, SSG, and App Router.",
    color: "from-gray-700 to-gray-900",
    bg: "bg-gray-50 dark:bg-gray-900/50",
    border: "border-gray-200 dark:border-gray-800",
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Server-side JavaScript for building scalable APIs and backends.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-900",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "NoSQL database for flexible, document-based data storage.",
    color: "from-green-600 to-lime-600",
    bg: "bg-lime-50 dark:bg-lime-950/30",
    border: "border-lime-200 dark:border-lime-900",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Advanced relational database for complex, structured data.",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-900",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            Technologies I use to build modern, scalable web applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group p-6 rounded-2xl border ${skill.bg} ${skill.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3
                  className={`text-lg font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {skill.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
