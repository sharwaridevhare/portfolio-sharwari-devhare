
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
                I am a passionate and goal-driven B.Tech student specializing in Artificial Intelligence & Data Science. 
                With a strong background in programming and a creative mindset, I focus on developing smart web applications 
                and AI-based tools.
              </p>
              
              <p className="text-lg">
                My projects reflect simplicity, functionality, and real-world problem-solving. I believe in creating 
                technology that not only works efficiently but also addresses genuine challenges that people face in 
                their daily lives.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new AI technologies, working on automation tools, or 
                diving deep into logical programming challenges. I'm always eager to learn and collaborate with 
                like-minded individuals who share my passion for innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-cream/50 p-4 rounded-lg">
                <h3 className="font-semibold text-deep-brown mb-2">Education</h3>
                <p className="text-sm text-foreground/70">B.Tech in AI & Data Science</p>
                <p className="text-sm text-english-brown">KDK College of Engineering</p>
              </div>
              <div className="bg-cream/50 p-4 rounded-lg">
                <h3 className="font-semibold text-deep-brown mb-2">Interests</h3>
                <p className="text-sm text-foreground/70">AI Automation</p>
                <p className="text-sm text-english-brown">Web Development & Logic</p>
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
                <p className="text-english-brown font-medium">AI & Data Science Student</p>
                <p className="text-foreground/70 text-sm mt-2">Quick Learner • Analytical Thinker • Team Player</p>
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
