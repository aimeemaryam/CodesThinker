import React from 'react';
import { Link } from 'react-router-dom';

// Import images from assets folder
import webDevImg from '../../assets/web-dev.webp';
import appDevImg from '../../assets/app-dev.webp';
import devopsImg from '../../assets/devops.webp';
import mlImg from '../../assets/mm.webp';
import blockchainImg from '../../assets/blockchain.webp';
import hostingImg from '../../assets/hosting.webp';
import wordpressImg from '../../assets/wordpress.webp';
import seoImg from '../../assets/seo.webp';
import uiuxImg from '../../assets/uiux.webp';
import graphicImg from '../../assets/graphic.webp';
import videoEditingImg from '../../assets/video-editing.webp';
import codeCallingImg from '../../assets/code-calling.webp';
import digitalMarketingImg from '../../assets/digital-marketing.webp';
import leadGenImg from '../../assets/lead-generation.webp';

const Services2 = () => {
  // Services Data Array containing all 14 cards
  const servicesData = [
    {
      id: 1,
      title: "Website Development",
      description: "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
      image: webDevImg,
      slug: "web-development",
      link: "servicedetail/1"
    },
    {
      id: 2,
      title: "App Development",
      description: "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
      image: appDevImg,
      slug: "app-development",
      link: "servicedetail/2"
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      description: "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
      image: devopsImg,
      slug: "devops-cloud",
       link: "servicedetail/3"
    },
    {
      id: 4,
      title: "Machine Learning",
      description: "Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.",
      image: mlImg,
      slug: "machine-learning",
       link: "servicedetail/4"
    },
    {
      id: 5,
      title: "Blockchain",
      description: "Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.",
      image: blockchainImg,
      slug: "blockchain",
       link: "servicedetail/5"
    },
    {
      id: 6,
      title: "Website Hosting",
      description: "Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.",
      image: hostingImg,
      slug: "website-hosting",
       link: "servicedetail/6"
    },
    {
      id: 7,
      title: "WordPress Development",
      description: "Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.",
      image: wordpressImg,
      slug: "wordpress-development",
       link: "servicedetail/7"
    },
    {
      id: 8,
      title: "SEO Optimization",
      description: "Improve your website's ranking and visibility with proven SEO techniques and strategies.",
      image: seoImg,
      slug: "seo-optimization",
       link: "servicedetail/8"
    },
    {
      id: 9,
      title: "UI/UX",
      description: "Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.",
      image: uiuxImg,
      slug: "ui-ux",
       link: "servicedetail/9"
    },
    {
      id: 10,
      title: "Graphic Designing",
      description: "Eye-catching graphics that represent your brand identity and convey your message effectively.",
      image: graphicImg,
      slug: "graphic-designing",
       link: "servicedetail/10"
    },
    {
      id: 11,
      title: "Video Editing",
      description: "Professional video editing for marketing, branding, tutorials, and more.",
      image: videoEditingImg,
      slug: "video-editing",
       link: "servicedetail/11"
    },
    {
      id: 12,
      title: "Code Calling",
      description: "Real-time expert coding assistance and live debugging for quick issue resolution.",
      image: codeCallingImg,
      slug: "code-calling",
       link: "servicedetail/12"
    },
    {
      id: 13,
      title: "Digital Marketing",
      description: "Boost your online presence through targeted campaigns and multichannel marketing strategies.",
      image: digitalMarketingImg,
      slug: "digital-marketing",

       link: "servicedetail/13"
    },
    {
      id: 14,
      title: "Lead Generation",
      description: "Generate high-quality leads with targeted campaigns and data-driven marketing strategies.",
      image: leadGenImg,
      slug: "lead-generation",
       link: "servicedetail/14"
    }
  ];

  return (
    <section className="bg-white pt-0 pb-12 px-4 md:px-8 lg:px-12 -mt-10 mb-[6vh]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Latest <span className="text-[#251bc8]">Services</span>
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-t-4 border-b-4 border-[#0a0580] flex flex-col justify-between transition-transform duration-500 ease-in-out hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="w-full h-60 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between text-left space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Nested Routing Button */}
                
<div className="pt-4 flex justify-center">
  <Link
    to={service.link || service.slug}
    className="w-full text-center bg-[#0a0580] hover:bg-[#1f17b3] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
  >
    Learn More
  </Link>
</div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services2;