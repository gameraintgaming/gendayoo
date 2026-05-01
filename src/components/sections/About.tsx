const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Git',
  'REST APIs',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
              GC
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hello! I'm a passionate developer.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a junior developer with a passion for creating elegant
              solutions to complex problems. With experience in modern web
              technologies, I enjoy building applications that are both
              functional and beautiful.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee.
            </p>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Technologies I work with:
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
