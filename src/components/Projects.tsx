
const Projects = () => {
  const projects = [
    {
      title: 'Voice Assistant',
      description: 'An interactive AI assistant that listens and responds to voice commands using Python libraries like SpeechRecognition and pyttsx3, providing hands-free interaction capabilities.',
      technologies: ['Python', 'SpeechRecognition', 'pyttsx3', 'AI'],
      features: ['Voice command recognition', 'Text-to-speech responses', 'Interactive conversations'],
      status: 'Completed',
      category: 'AI'
    },
    {
      title: 'Weather App',
      description: 'A modern weather forecast tool using OpenWeather API, designed with real-time updates and responsive design for seamless user experience across all devices.',
      technologies: ['JavaScript', 'OpenWeather API', 'HTML', 'CSS'],
      features: ['Real-time weather data', 'API integration', 'Responsive design'],
      status: 'Live',
      category: 'Web Development'
    },
    {
      title: 'BMI Calculator',
      description: 'A user-friendly health tool that calculates and interprets Body Mass Index based on user inputs, providing health insights and recommendations.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Health Analytics'],
      features: ['BMI calculation', 'Health interpretation', 'User-friendly interface'],
      status: 'Completed',
      category: 'Web Development'
    },
    {
      title: 'Password Generator',
      description: 'A secure password generator built in JavaScript that offers strength customization and copy-to-clipboard feature for enhanced security management.',
      technologies: ['JavaScript', 'Security', 'Clipboard API'],
      features: ['Customizable strength', 'Copy to clipboard', 'Secure generation'],
      status: 'Completed',
      category: 'Security'
    },
    {
      title: 'Browser Chat Application',
      description: 'A mini web chat app that supports real-time text messaging in the browser using local storage and client-side scripting for instant communication.',
      technologies: ['JavaScript', 'LocalStorage', 'HTML', 'CSS'],
      features: ['Real-time messaging', 'Local storage', 'Browser-based'],
      status: 'Completed',
      category: 'Web Development'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of projects reflecting simplicity, functionality, and real-world problem-solving 
            through smart applications and AI-based tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-cream/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-beige/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-2 py-1 bg-english-brown/10 text-english-brown text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-english-brown/10 text-english-brown'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="font-playfair text-xl font-semibold text-deep-brown mb-3">
                {project.title}
              </h3>

              <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-deep-brown mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-english-brown rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-white text-deep-brown text-xs font-medium rounded-full border border-light-beige/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-english-brown text-white py-2 px-3 rounded-lg font-medium hover:bg-english-brown/90 transition-colors duration-300 text-sm">
                  View Details
                </button>
                <button className="flex-1 border border-deep-brown text-deep-brown py-2 px-3 rounded-lg font-medium hover:bg-deep-brown hover:text-white transition-all duration-300 text-sm">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-english-brown/5 to-deep-brown/5 rounded-xl p-8">
            <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-4">
              Certificates & More Projects
            </h3>
            <p className="text-foreground/70 mb-6">
              All certificates are available in my portfolio and on GitHub. I'm constantly working on new projects 
              that showcase innovation in AI automation, web development, and logical programming solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-english-brown text-white px-6 py-3 rounded-lg font-medium hover:bg-english-brown/90 transition-colors duration-300">
                View Certificates
              </button>
              <button className="border border-deep-brown text-deep-brown px-6 py-3 rounded-lg font-medium hover:bg-deep-brown hover:text-white transition-all duration-300">
                GitHub Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
