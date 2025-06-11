
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                My journey into technology began with an unexpected turn. Initially preparing for medical entrance exams, 
                I discovered the fascinating world of programming and artificial intelligence, which completely changed my perspective.
              </p>
              
              <p className="text-lg">
                Now pursuing AI & Data Science Engineering at KDK College of Engineering, I've found my passion in 
                building intelligent solutions and analyzing complex data patterns. Every line of code I write brings me 
                closer to creating meaningful impact through technology.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, working on personal projects, or 
                diving deep into the latest AI research. I believe in continuous learning and the power of technology 
                to solve real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-cream/50 p-4 rounded-lg">
                <h3 className="font-semibold text-deep-brown mb-2">Education</h3>
                <p className="text-sm text-foreground/70">AI & Data Science Engineering</p>
                <p className="text-sm text-english-brown">KDK College of Engineering</p>
              </div>
              <div className="bg-cream/50 p-4 rounded-lg">
                <h3 className="font-semibold text-deep-brown mb-2">Focus Areas</h3>
                <p className="text-sm text-foreground/70">Artificial Intelligence</p>
                <p className="text-sm text-english-brown">Data Science & Analytics</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-english-brown/10 to-deep-brown/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-english-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">SD</span>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-2">
                  Sharwari Devhare
                </h3>
                <p className="text-english-brown font-medium">AI & Data Science Engineer</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-english-brown rounded-full"></div>
                  <div className="w-3 h-3 bg-deep-brown rounded-full"></div>
                  <div className="w-3 h-3 bg-english-brown/50 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-english-brown/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-deep-brown/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
