
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-deep-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-deep-navy mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="text-royal-blue">Sharwari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI & Data Science Engineering Student at{' '}
            <span className="text-royal-blue font-semibold">KDK College of Engineering</span>
          </p>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              From dreaming of medicine to discovering the magic of code. Now building my future in 
              artificial intelligence and software development, one algorithm at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-royal-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-royal-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-royal-blue/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-deep-navy text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-deep-navy hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-royal-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-royal-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
