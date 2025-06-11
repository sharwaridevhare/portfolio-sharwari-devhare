
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'sharwaridevhare@gmail.com',
      href: 'mailto:sharwaridevhare@gmail.com',
      icon: '📧'
    },
    {
      label: 'Phone',
      value: '+91 9322020023',
      href: 'tel:+919322020023',
      icon: '📱'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sharwaridevhare',
      href: 'https://www.linkedin.com/in/sharwaridevhare',
      icon: '💼'
    },
    {
      label: 'Instagram',
      value: '@itzsharu_devhare',
      href: 'https://www.instagram.com/itzsharu_devhare',
      icon: '📸'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-cream/50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about 
            the fascinating world of AI and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-deep-navy mb-6">
                Get In Touch
              </h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Whether you're looking for a passionate AI enthusiast to join your team, want to collaborate 
                on an exciting project, or simply want to connect with a fellow technology lover, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-light-gray/20"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="font-medium text-deep-navy">{info.label}</p>
                    <p className="text-royal-blue hover:underline">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-royal-blue/5 rounded-lg p-6 border border-royal-blue/20">
              <h4 className="font-semibold text-deep-navy mb-2">Quick Response Guarantee</h4>
              <p className="text-foreground/70 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-light-gray/20">
            <h3 className="font-playfair text-2xl font-semibold text-deep-navy mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-navy mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-light-gray/30 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-light-gray/30 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-light-gray/30 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-royal-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-royal-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-royal-blue/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
