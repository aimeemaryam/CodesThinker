import React, { useState } from 'react';

const projectsData = [
  // Website Development
  {
    id: 1,
    title: 'Akoya Deluxe Cleaning',
    category: 'Website Development',
    description: 'User-friendly, modern design showcasing top resources for managing overtime.',
    image: 'https://codesthinker.com/project/lundary1.PNG',
    thumbnails: [
      'https://codesthinker.com/project/lundary1.PNG',
      'https://codesthinker.com/project/lundary2.PNG',
      'https://codesthinker.com/project/lundary3.PNG',
      'https://codesthinker.com/project/lundary4.PNG'
    ]
  },
  {
    id: 2,
    title: 'Tamakon Comprehensive School',
    category: 'Website Development',
    description: 'Tamakon School offers specialized education and rehabilitation for students with diverse abilities across all academic levels.',
    image: 'https://codesthinker.com/project/tamakonone.png',
    thumbnails: [
      'https://codesthinker.com/project/tamakonone.png',
      'https://codesthinker.com/project/tamakontwo.png',
      'https://codesthinker.com/project/tamakonthree.png',
      'https://codesthinker.com/project/tamakonfour.png'
    ]
  },
  {
    id: 3,
    title: 'Empower Zone',
    category: 'Website Development',
    description: 'Empower Zone is a community-focused organization dedicated to helping New Yorkers access essential government benefits with ease.',
    image: 'https://codesthinker.com/project/empowerzone3.PNG',
    thumbnails: [
      'https://codesthinker.com/project/empowerzone3.PNG',
      'https://codesthinker.com/project/empowerzone2.PNG',
      'https://codesthinker.com/project/empowerzone3.PNG',
      'https://codesthinker.com/project/empowerzone4.PNG'
    ]
  },
  {
    id: 4,
    title: 'Multi-Service Creative Agency',
    category: 'Website Development',
    description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
    image: 'https://codesthinker.com/project/novieta1.png',
    thumbnails: [
      'https://codesthinker.com/project/novieta1.png',
      'https://codesthinker.com/project/novieta2.png',
      'https://codesthinker.com/project/novieta3.png',
      'https://codesthinker.com/project/novieta4.png'
    ]
  },
  {
    id: 5,
    title: 'Trend Car Care',
    category: 'Website Development',
    description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
    image: 'https://codesthinker.com/project/trend1.png',
    thumbnails: [
      'https://codesthinker.com/project/trend1.png',
      'https://codesthinker.com/project/trend2.png',
      'https://codesthinker.com/project/trend3.png',
      'https://codesthinker.com/project/trend4.png'
    ]
  },

  // UI/UX
  {
    id: 6,
    title: 'Figma Design Luxury lundary',
    category: 'UI/UX',
    description: 'Sleek, data-driven interface for monitoring AI performance with interactive charts and real-time analytics.',
    image: 'https://codesthinker.com/project/LundaryApp.png',
    thumbnails: [
      'https://codesthinker.com/project/LundaryApp.png',
      'https://codesthinker.com/project/lundaryone.png',
      'https://codesthinker.com/project/lundarytwo.png',
      'https://codesthinker.com/project/lundarythree.png'
    ]
  },
  {
    id: 7,
    title: 'Figma Design Transpohub $ Logistics Provide Word',
    category: 'UI/UX',
    description: "Modern and dynamic design showcasing Transpohub's logistics solutions with clear service highlights and visuals.",
    image: 'https://codesthinker.com/project/logistic1.PNG',
    thumbnails: [
      'https://codesthinker.com/project/logistic1.PNG',
      'https://codesthinker.com/project/logistic2.PNG',
      'https://codesthinker.com/project/logistic3.PNG',
      'https://codesthinker.com/project/logistic4.PNG'
    ]
  },
  {
    id: 8,
    title: 'Figma Design Deckohost Service base website',
    category: 'UI/UX',
    description: 'Clean and professional layout highlighting Deckohost’s hosting services with intuitive navigation and visuals.',
    image: 'https://codesthinker.com/project/deckohost1.PNG',
    thumbnails: [
      'https://codesthinker.com/project/deckohost1.PNG',
      'https://codesthinker.com/project/deckohost2.PNG',
      'https://codesthinker.com/project/deckohost3.PNG',
      'https://codesthinker.com/project/deckohost4.PNG'
    ]
  },
  {
    id: 9,
    title: 'Figma design Best place to prepare for competitive Exams',
    category: 'UI/UX',
    description: 'User-friendly, modern design showcasing top resources for competitive exam preparation and success.',
    image: 'https://codesthinker.com/project/ppsc1.PNG',
    thumbnails: [
      'https://codesthinker.com/project/ppsc1.PNG',
      'https://codesthinker.com/project/ppsc2.PNG',
      'https://codesthinker.com/project/ppsc3.PNG',
      'https://codesthinker.com/project/ppsc4.PNG'
    ]
  },
  {
    id: 10,
    title: 'Overtime Management',
    category: 'UI/UX',
    description: 'User-friendly, modern design showcasing top resources for managing overtime.',
    image: 'https://codesthinker.com/project/overtime1.jpg',
    thumbnails: [
      'https://codesthinker.com/project/overtime1.jpg',
      'https://codesthinker.com/project/overtime2.jpg',
      'https://codesthinker.com/project/overtime3.jpg',
      'https://codesthinker.com/project/overtime4.jpg'
    ]
  },

  // WordPress
  {
    id: 11,
    title: 'ARABIAN DUNES TOURS',
    category: 'WordPress',
    description: 'Arabian Dunes Tours is the most trusted and quickest source for booking desert safari Dubai in the United Arab Emirates. We offer full-service packages for different kinds of safaris in Dubai to fill your life with desert adventure.',
    image: 'https://codesthinker.com/project/dunes1.png',
    thumbnails: [
      'https://codesthinker.com/project/dunes1.png',
      'https://codesthinker.com/project/dunes2.png',
      'https://codesthinker.com/project/dunes3.png',
      'https://codesthinker.com/project/dunes4.png'
    ]
  },
  {
    id: 12,
    title: 'Best Arabic Coffee Server in Dubai & UAE',
    category: 'WordPress',
    description: 'Book your Dubai event with our expert coffee servers. Enjoy flawless coffee service, tailored to perfection. Impress your guests with barista-crafted beverages.',
    image: 'https://codesthinker.com/project/coffe1.png',
    thumbnails: [
      'https://codesthinker.com/project/coffe1.png',
      'https://codesthinker.com/project/coffe2.png',
      'https://codesthinker.com/project/coffe3.png',
      'https://codesthinker.com/project/coffe4.png'
    ]
  },
  {
    id: 13,
    title: 'ARABIAN Dune Buggy',
    category: 'WordPress',
    description: 'Experience the thrill of Dubai’s golden dunes like never before with Arabian Dune Buggy! We specialize in offering private and exclusive dune buggy tours that promise to make your Dubai adventure unforgettable.',
    image: 'https://codesthinker.com/project/arabic1.png',
    thumbnails: [
      'https://codesthinker.com/project/arabic1.png',
      'https://codesthinker.com/project/arabic2.png',
      'https://codesthinker.com/project/arabic3.png',
      'https://codesthinker.com/project/arabic4.png'
    ]
  },
  {
    id: 14,
    title: 'Specialist Laser Aesthetics Based In Dagenham',
    category: 'WordPress',
    description: 'We are proud to be a 5 Star NHS Approved Clinic and we are the only clinic in East London offering treatments using the Quanta Thunder Series.',
    image: 'https://codesthinker.com/project/laser1.png',
    thumbnails: [
      'https://codesthinker.com/project/laser1.png',
      'https://codesthinker.com/project/laser2.png',
      'https://codesthinker.com/project/laser3.png',
      'https://codesthinker.com/project/laser4.png'
    ]
  },
  {
    id: 15,
    title: 'Welcome to Progen Aesthetics Clinic',
    category: 'WordPress',
    description: 'Doctor and nurse led aesthetic clinic which utilizes the latest technology in health and beauty for a natural and balanced transformation.',
    image: 'https://codesthinker.com/project/progen1.png',
    thumbnails: [
      'https://codesthinker.com/project/progen1.png',
      'https://codesthinker.com/project/progen2.png',
      'https://codesthinker.com/project/progen3.png',
      'https://codesthinker.com/project/progen4.png'
    ]
  },

  // App
  {
    id: 16,
    title: 'Sports Tracker: Run Bike Hike',
    category: 'App',
    description: 'The Ultimate Sports Tracking App for Outdoor Adventures and Fitness Improvement Track your running, cycling, hiking, and over 90 other sports with precision and ease.',
    image: 'https://codesthinker.com/project/sports1.png',
    thumbnails: [
      'https://codesthinker.com/project/sports1.png',
      'https://codesthinker.com/project/sports2.png',
      'https://codesthinker.com/project/sports3.png',
      'https://codesthinker.com/project/sports4.png'
    ]
  },
  {
    id: 17,
    title: 'SuperSports',
    category: 'App',
    description: 'Welcome to the SuperSport app experience your personalised sports companion.It is the perfect supplement to your World of Champions unrivaled broadcast coverage of the best in world sport, and is designed to give you just what you want, when you want it.',
    image: 'https://codesthinker.com/project/super3.png',
    thumbnails: [
      'https://codesthinker.com/project/super3.png',
      'https://codesthinker.com/project/super2.png',
      'https://codesthinker.com/project/super1.png',
      'https://codesthinker.com/project/super4.png'
    ]
  },
  {
    id: 18,
    title: 'Get Gaari - Rental Car Sharing',
    category: 'App',
    description: 'Get Gaari is your ultimate car rental solution, connecting car owners with renters in a convenient and secure platform. Whether you need a car for a day, a week, or longer, Get Gaari makes the process quick and easy.',
    image: 'https://codesthinker.com/project/get1.png',
    thumbnails: [
      'https://codesthinker.com/project/get1.png',
      'https://codesthinker.com/project/get2.png',
      'https://codesthinker.com/project/get3.png',
      'https://codesthinker.com/project/get4.png'
    ]
  },
  {
    id: 19,
    title: 'Pure Fitness Africa Mobile App',
    category: 'App',
    description: 'Join the most exciting fitness community in Africa and embark on your fitness journey with the Pure Fitness Africa all-in-one mobile app.',
    image: 'https://codesthinker.com/project/pure1.png',
    thumbnails: [
      'https://codesthinker.com/project/pure1.png',
      'https://codesthinker.com/project/pure2.png',
      'https://codesthinker.com/project/pure3.png',
      'https://codesthinker.com/project/pure4.png'
    ]
  },
  {
    id: 20,
    title: 'Qatar Sale',
    category: 'App',
    description: 'QatarSale is the first and biggest on-line (web / app) cars and motorbikes trading in QATAR',
    image: 'https://codesthinker.com/project/qatar1.png',
    thumbnails: [
      'https://codesthinker.com/project/qatar1.png',
      'https://codesthinker.com/project/qatar2.png',
      'https://codesthinker.com/project/qatar3.png',
      'https://codesthinker.com/project/qatar4.png'
    ]
  },

  // SEO
  {
    id: 21,
    title: 'ARABIAN DUNES TOURS',
    category: 'SEO',
    description: 'Arabian Dunes Tours is the most trusted and quickest source for booking desert safari Dubai in the United Arab Emirates. We offer full-service packages for different kinds of safaris in Dubai to fill your life with desert adventure.',
    image: 'https://codesthinker.com/project/dunes1.png',
    thumbnails: [
      'https://codesthinker.com/project/dunes1.png',
      'https://codesthinker.com/project/dunes2.png',
      'https://codesthinker.com/project/dunes3.png',
      'https://codesthinker.com/project/dunes4.png'
    ]
  },
  {
    id: 22,
    title: 'Best Arabic Coffee Server in Dubai & UAE',
    category: 'SEO',
    description: 'Book your Dubai event with our expert coffee servers. Enjoy flawless coffee service, tailored to perfection. Impress your guests with barista-crafted beverages.',
    image: 'https://codesthinker.com/project/coffe1.png',
    thumbnails: [
      'https://codesthinker.com/project/coffe1.png',
      'https://codesthinker.com/project/coffe2.png',
      'https://codesthinker.com/project/coffe3.png',
      'https://codesthinker.com/project/coffe4.png'
    ]
  },
  {
    id: 23,
    title: 'ARABIAN Dune Buggy',
    category: 'SEO',
    description: 'Experience the thrill of Dubai’s golden dunes like never before with Arabian Dune Buggy! We specialize in offering private and exclusive dune buggy tours that promise to make your Dubai adventure unforgettable.',
    image: 'https://codesthinker.com/project/arabic1.png',
    thumbnails: [
      'https://codesthinker.com/project/arabic1.png',
      'https://codesthinker.com/project/arabic2.png',
      'https://codesthinker.com/project/arabic3.png',
      'https://codesthinker.com/project/arabic4.png'
    ]
  },
  {
    id: 24,
    title: 'Specialist Laser Aesthetics Based In Dagenham',
    category: 'SEO',
    description: 'We are proud to be a 5 Star NHS Approved Clinic and we are the only clinic in East London offering treatments using the Quanta Thunder Series.',
    image: 'https://codesthinker.com/project/laser1.png',
    thumbnails: [
      'https://codesthinker.com/project/laser1.png',
      'https://codesthinker.com/project/laser2.png',
      'https://codesthinker.com/project/laser3.png',
      'https://codesthinker.com/project/laser4.png'
    ]
  },
  {
    id: 25,
    title: 'Welcome to Progen Aesthetics Clinic',
    category: 'SEO',
    description: 'Doctor and nurse led aesthetic clinic which utilizes the latest technology in health and beauty for a natural and balanced transformation.',
    image: 'https://codesthinker.com/project/progen1.png',
    thumbnails: [
      'https://codesthinker.com/project/progen1.png',
      'https://codesthinker.com/project/progen2.png',
      'https://codesthinker.com/project/progen3.png',
      'https://codesthinker.com/project/progen4.png'
    ]
  }
];

const categories = ['All', 'Website Development', 'UI/UX', 'App', 'WordPress', 'SEO'];

// Separate Card Component to track main preview image per card
const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(project.image);

  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center text-left bg-white">
      {/* Main Showcase Image */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={currentImage}
          alt={project.title}
          className="w-full h-64 object-cover transition-all duration-300"
        />
      </div>

      {/* Content Block */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {project.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt=""
                onClick={() => setCurrentImage(thumb)}
                className={`w-16 h-16 rounded-lg object-cover border cursor-pointer transition-all duration-200 ${
                  currentImage === thumb ? 'border-blue-900 ring-2 ring-blue-900' : 'border-gray-200 hover:border-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View Project Action */}
        <div>
          <button className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-800 transition-colors">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

const Project1 = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(5);

  // Filter projects by selected category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  // Slice list based on current pagination count
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // Switch category and reset button threshold back to 5
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(5);
  };

  return (
    <section className="relative z-0 pt-36 pb-16 bg-white text-gray-900 min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-2">Project Section</h2>
        <p className="text-gray-600 mb-8">
          Explore a range of projects we've worked on across web, mobile, and design.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-sm ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-900 to-indigo-700 text-white shadow-md scale-105'
                  : 'bg-transparent text-gray-800 hover:bg-gradient-to-r hover:from-blue-900 hover:to-indigo-700 hover:text-white hover:shadow-md hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col gap-8 mb-12">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-gray-500 py-8">No projects found in this category.</p>
          )}
        </div>

        {/* Global Explore More Button */}
        {visibleCount < filteredProjects.length && (
          <div>
            <button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Explore More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project1;