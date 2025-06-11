
const Projects = () => {
  const projects = [
    {
      title: 'Weather Forecast App',
      description: 'A comprehensive weather application that provides real-time weather data, 5-day forecasts, and interactive maps for any location worldwide.',
      technologies: ['Python', 'API Integration', 'Data Visualization'],
      features: ['Real-time weather data', 'Location-based forecasts', 'Interactive UI'],
      status: 'Completed'
    },
    {
      title: 'Marks Analyzer Tool',
      description: 'An analytical tool that processes student performance data to generate insights, trends, and personalized recommendations for academic improvement.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      features: ['Performance analytics', 'Trend visualization', 'Report generation'],
      status: 'Completed'
    },
    {
      title: 'Python Calculator',
      description: 'A feature-rich calculator application built with Python, supporting basic arithmetic operations, scientific functions, and mathematical expressions.',
      technologies: ['Python', 'GUI Development', 'Mathematics'],
      features: ['Basic & scientific operations', 'Expression evaluation', 'User-friendly interface'],
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio website showcasing my projects, skills, and journey in AI & Data Science, built with modern web technologies.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Design'],
      features: ['Responsive design', 'Smooth animations', 'Modern UI/UX'],
      status: 'Live'
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
            A collection of projects that showcase my journey in AI, data science, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-cream/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-beige/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-playfair text-2xl font-semibold text-deep-brown">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-english-brown/10 text-english-brown'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-deep-brown mb-3">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-english-brown rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-white text-deep-brown text-xs font-medium rounded-full border border-light-beige/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-english-brown text-white py-2 px-4 rounded-lg font-medium hover:bg-english-brown/90 transition-colors duration-300">
                  View Details
                </button>
                <button className="flex-1 border border-deep-brown text-deep-brown py-2 px-4 rounded-lg font-medium hover:bg-deep-brown hover:text-white transition-all duration-300">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-english-brown/5 to-deep-brown/5 rounded-xl p-8">
            <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-foreground/70 mb-6">
              I'm constantly working on new projects that push the boundaries of AI and data science. 
              Stay tuned for exciting developments in machine learning, data analysis, and intelligent systems.
            </p>
            <button className="bg-english-brown text-white px-6 py-3 rounded-lg font-medium hover:bg-english-brown/90 transition-colors duration-300">
              Follow My Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
