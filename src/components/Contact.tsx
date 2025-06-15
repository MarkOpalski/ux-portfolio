const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
            <span className="text-[#4ECDC4]">/</span> Let's Connect
          </h2>

          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              If you're ready to position your business for long-term success
              through design-led strategy and innovation, let's talk. I help
              businesses make bold, strategic moves that drive real-world
              impact.
            </p>

            <div className="mt-12">
              <a
                href="mailto:mark.opalski@gmail.com"
                className="inline-block px-8 py-4 bg-[#4ECDC4] text-[#121212] rounded-md font-medium hover:bg-white transition-colors"
              >
                Send Email
              </a>
            </div>

            <div className="mt-16 pt-16 border-t border-[#2A2A2A]">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Open to work
              </h3>

              <div className="bg-[#1A1A1A] p-8 rounded-xl">
                <p className="text-gray-300 mb-4">
                  Currently considering roles as:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#4ECDC4] mr-3">•</span>
                    Vice President of Product Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4ECDC4] mr-3">•</span>
                    Chief Design Officer
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4ECDC4] mr-3">•</span>
                    Director of User Experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4ECDC4] mr-3">•</span>
                    Head of Product Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
