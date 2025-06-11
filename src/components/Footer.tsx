
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-brown text-white py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Sharwari Devhare</h3>
            <p className="text-white/70 leading-relaxed">
              AI & Data Science Engineering Student passionate about building intelligent solutions 
              and pushing the boundaries of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/70 hover:text-english-brown transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Let's Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:sharwaridevhare@gmail.com"
                className="block text-white/70 hover:text-english-brown transition-colors duration-300"
              >
                sharwaridevhare@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/sharwaridevhare"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-english-brown transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://www.instagram.com/itzsharu_devhare"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-english-brown transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {currentYear} Sharwari Devhare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-white/70 text-sm">Built with passion for technology</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-english-brown rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-english-brown/50 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
