import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Glenn Cordero
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Junior Developer
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I aspire to build beautiful, responsive, and performant web applications using
          modern technologies. Let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <Button variant="primary">View My Work</Button>
          </a>
          <a href="#contact">
            <Button variant="outline">Get In Touch</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
