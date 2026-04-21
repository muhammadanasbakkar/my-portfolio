export default function About() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Technologies", value: "5+" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-7xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    MA
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl -z-10" />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I&apos;m a Software Developer with{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                3 years of experience
              </span>{" "}
              building modern web applications. I&apos;m passionate about crafting clean,
              performant, and user-friendly digital experiences that solve real problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              From full-stack platforms to enterprise systems, I enjoy working across the
              entire stack — from database design to polished UIs. I&apos;m open to both{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                freelance projects
              </span>{" "}
              and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                full-time opportunities
              </span>
              .
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
