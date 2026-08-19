import React from 'react';
import mlImg from '../../assets/mm.webp'; // Make sure the image path matches your project structure

const MachineLearning = () => {
  // Data for "Why Choose Us" feature cards
  const features = [
    {
      id: 1,
      title: "Data preprocessing",
      description: "Our data preprocessing service is designed to exceed expectations.",
    },
    {
      id: 2,
      title: "Model training",
      description: "Our model training service is designed to exceed expectations.",
    },
    {
      id: 3,
      title: "Custom ML solutions",
      description: "Our custom ml solutions service is designed to exceed expectations.",
    },
    {
      id: 4,
      title: "Real-time analytics",
      description: "Our real-time analytics service is designed to exceed expectations.",
    },
    {
      id: 5,
      title: "AI integration",
      description: "Our ai integration service is designed to exceed expectations.",
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
              src={mlImg}
              alt="Machine Learning Detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Details */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              Machine Learning
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We design and implement machine learning models that empower your business with data-driven insights and automation. From predictive analytics to image recognition and NLP, our solutions are tailored to solve real-world problems using the latest AI technologies and frameworks for better efficiency and performance.
            </p>
          </div>

        </div>

        {/* Bottom "Why Choose Us" Section */}
        <div className="space-y-8 pt-6">
          
          {/* Section Heading & Subheading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Why Choose Us for Machine Learning?
            </h2>
            <p className="text-gray-600 text-base">
              We offer expert-level machine learning services with results that speak for themselves.
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

export default MachineLearning;