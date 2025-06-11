
const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, category: 'Programming Languages' },
    { name: 'C', level: 85, category: 'Programming Languages' },
    { name: 'C++', level: 85, category: 'Programming Languages' },
    { name: 'JavaScript', level: 80, category: 'Programming Languages' },
    { name: 'HTML/CSS', level: 85, category: 'Web Technologies' },
    { name: 'Bootstrap', level: 75, category: 'Web Technologies' },
    { name: 'Git', level: 80, category: 'Web Technologies' },
    { name: 'NumPy', level: 85, category: 'AI/Data Science' },
    { name: 'Pandas', level: 80, category: 'AI/Data Science' },
    { name: 'Matplotlib', level: 75, category: 'AI/Data Science' },
    { name: 'Quick Learning', level: 95, category: 'Soft Skills' },
    { name: 'Analytical Thinking', level: 90, category: 'Soft Skills' },
    { name: 'Team Collaboration', level: 85, category: 'Soft Skills' },
  ];

  const categories = ['Programming Languages', 'Web Technologies', 'AI/Data Science', 'Soft Skills'];

  return (
    <section id="skills" className="section-padding bg-cream/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for developing smart applications, AI automation, 
            and solving complex problems through logical programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-playfair text-xl font-semibold text-deep-brown mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-light-beige/30 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-english-brown to-deep-brown h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-4">
              Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-english-brown/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-english-brown text-xl">🤖</span>
                </div>
                <h4 className="font-semibold text-deep-brown mb-2">AI Automation</h4>
                <p className="text-sm text-foreground/70">Building intelligent systems that automate complex tasks</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-english-brown/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-english-brown text-xl">🌐</span>
                </div>
                <h4 className="font-semibold text-deep-brown mb-2">Web Development</h4>
                <p className="text-sm text-foreground/70">Creating responsive and user-friendly web applications</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-english-brown/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-english-brown text-xl">🧠</span>
                </div>
                <h4 className="font-semibold text-deep-brown mb-2">Logical Programming</h4>
                <p className="text-sm text-foreground/70">Solving complex problems with analytical thinking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
