import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image6 from '../../assets/image6.jpg';
const testimonialsData = [
  {
    name: "BMX Adventure",
    role: "Customer",
    rating: "5.0",
    image: image6,
    review: "BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!"
  },
  {
    name: "Muhammad waseem",
    role: "Customer",
    rating: "5.0",
    image: image6, // Or replace with a specific avatar image if available
    review: "Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly professional team with great communication. Highly recommend for web solutions."
  },
  {
    name: "Amir ijaz",
    role: "Customer",
    rating: "5.0",
    image: image6, // Or replace with a specific avatar image if available
    review: "Good Software House For the Learning Purpose in the Bahawalpur"
  }
];

const Page8 = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Main Container */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        {/* Left Title Section */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Our <span className="text-yellow-400">Clients</span>, In Their Own Words
          </h2>
        </div>

        {/* Right Content Section (Swiper Slider) */}
        <div className="md:w-2/3 w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
            }}
            className="w-full"
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col space-y-6 pb-2">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">{item.rating}</span>
                    <div className="flex text-yellow-400 space-x-1 text-lg">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center space-x-4">
                    {/* Avatar Circle */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0 bg-amber-400">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* User Info */}
                    <div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed min-h-[60px]">
                    {item.review}
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Controls: Pagination Dots + Button */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            {/* Custom Swiper Pagination Dots Container */}
            <div className="custom-swiper-pagination flex space-x-2 items-center [&>.swiper-pagination-bullet]:w-2.5 [&>.swiper-pagination-bullet]:h-2.5 [&>.swiper-pagination-bullet]:bg-gray-600 [&>.swiper-pagination-bullet-active]:!bg-blue-500 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet]:transition-all"></div>

            {/* Action Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm md:text-base">
              Add your reviews
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Page8;