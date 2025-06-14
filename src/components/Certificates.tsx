const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'C for Beginners',
      issuer: 'Great Learning Academy',
      date: '2024',
      description: 'Successfully completed a free online course covering fundamental concepts of C programming language.',
      image: '/lovable-uploads/44798318-8c4d-4a14-aefa-d183caf11579.png',
      verificationUrl: '#',
      category: 'Programming'
    },
    {
      id: 2,
      title: 'C for Beginners',
      issuer: 'Great Learning Academy',
      date: '2024',
      description: 'Certificate of completion for successfully completing the C for Beginners course, demonstrating proficiency in fundamental C programming concepts.',
      image: '/lovable-uploads/14b24444-9fec-4a26-8023-10d8cb8c8e59.png',
      verificationUrl: '#',
      category: 'Programming'
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-cream/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Professional certifications and course completions that demonstrate continuous learning 
            and skill development in programming and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Certificate Image */}
              <div className="mb-6 rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src={certificate.image} 
                  alt={`${certificate.title} Certificate`}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <div>
                  <span className="px-2 py-1 bg-english-brown/10 text-english-brown text-xs font-medium rounded-full">
                    {certificate.category}
                  </span>
                </div>

                <h3 className="font-playfair text-xl font-semibold text-deep-brown">
                  {certificate.title}
                </h3>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-english-brown">Issued by:</span> {certificate.issuer}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-english-brown">Year:</span> {certificate.date}
                  </p>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4">
                  <button className="flex-1 bg-english-brown text-white py-2 px-3 rounded-lg font-medium hover:bg-english-brown/90 transition-colors duration-300 text-sm">
                    View Certificate
                  </button>
                  {certificate.verificationUrl !== '#' && (
                    <button className="flex-1 border border-deep-brown text-deep-brown py-2 px-3 rounded-lg font-medium hover:bg-deep-brown hover:text-white transition-all duration-300 text-sm">
                      Verify
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Certificates CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-foreground/70 mb-6">
              I'm committed to continuous learning and professional development. 
              More certificates and achievements are being added as I expand my skillset.
            </p>
            <div className="flex justify-center">
              <button className="bg-english-brown text-white px-6 py-3 rounded-lg font-medium hover:bg-english-brown/90 transition-colors duration-300">
                View All Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
