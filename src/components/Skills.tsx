
const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'C', level: 85, category: 'Programming' },
    { name: 'C++', level: 80, category: 'Programming' },
    { name: 'NumPy', level: 85, category: 'Data Science' },
    { name: 'Pandas', level: 80, category: 'Data Science' },
    { name: 'Matplotlib', level: 75, category: 'Data Science' },
    { name: 'SciPy', level: 70, category: 'Data Science' },
    { name: 'GitHub', level: 85, category: 'Tools' },
    { name: 'Problem Solving', level: 90, category: 'Soft Skills' },
  ];

  const categories = ['Programming', 'Data Science', 'Tools', 'Soft Skills'];

  return (
    <section id="skills" className="section-padding bg-cream/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and analyzing complex data patterns.
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
              Always Learning
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Technology evolves rapidly, and so do I. Currently exploring machine learning algorithms, 
              deep learning frameworks, and advanced data visualization techniques to stay at the forefront 
              of AI and data science innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
