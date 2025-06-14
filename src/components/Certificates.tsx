
const Certificates = () => {
  const certificates = [
    {
      id: 2,
      title: 'C for Beginners',
      issuer: 'Great Learning Academy',
      date: '2024',
      image: '/lovable-uploads/14b24444-9fec-4a26-8023-10d8cb8c8e59.png',
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
            Below you can view the certificate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-english-brown font-medium underline text-lg hover:text-english-brown/80 transition-colors"
              >
                This certificate of C
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
