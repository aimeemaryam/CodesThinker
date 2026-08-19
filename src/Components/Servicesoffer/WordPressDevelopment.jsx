import React from 'react';
import wordpressImg from '../../assets/wordpress.webp'; // Update image path as needed

const WordPressDevelopment = () => {
  // Data for "Why Choose Us" cards based on screenshot details
  const features = [
    {
      id: 1,
      title: "Custom themes",
      description: "Our custom themes service is designed to exceed expectations.",
    },
    {
      id: 2,
      title: "Plugin integration",
      description: "Our plugin integration service is designed to exceed expectations.",
    },
    {
      id: 3,
      title: "E-commerce setup",
      description: "Our e-commerce setup service is designed to exceed expectations.",
    },
    {
      id: 4,
      title: "SEO tools",
      description: "Our seo tools service is designed to exceed expectations.",
    },
    {
      id: 5,
      title: "Performance optimization",
      description: "Our performance optimization service is designed to exceed expectations.",
    },
  ];

  return (
    <div className="bg-white py-12 mt-16 px-6 md:px-12 lg:px-20 mb-[6vh]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Hero Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image Banner */}
          <div className="w-full h-auto rounded-3xl overflow-hidden shadow-lg bg-[#050038]">
            <img
              src={wordpressImg}
              alt="WordPress Development Detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Details */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              WordPress Development
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our WordPress development services include building custom themes, integrating powerful plugins, and optimizing performance for speed and SEO. Whether it's a blog, portfolio, or e-commerce site, we ensure your website is easy to manage, mobile-friendly, and built for success.
            </p>
          </div>

        </div>

        {/* Bottom "Why Choose Us" Section */}
        <div className="space-y-8 pt-6">
          
          {/* Section Heading & Subheading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Why Choose Us for WordPress Development?
            </h2>
            <p className="text-gray-600 text-base">
              We offer expert-level wordpress development services with results that speak for themselves.
            </p>
          </div>

          {/* Feature Blue Gradient Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gradient-to-r from-[#0d3b82] to-[#124e96] text-white p-6 md:p-8 rounded-2xl transition-all duration-400 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(25,118,210,0.5)]"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default WordPressDevelopment;