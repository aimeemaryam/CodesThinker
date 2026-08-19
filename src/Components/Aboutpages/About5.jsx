import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import avatarImg from '../../assets/image6.jpg';

const testimonials = [
  {
    id: 1,
    name: "Amir Ijaz",
    role: "Customer",
    rating: 5.0,
    avatar: avatarImg,
    review: "Good Software House For the Learning Purpose in the Bahawalpur",
  },
  {
    id: 2,
    name: "BMX Adventure",
    role: "Customer",
    rating: 5.0,
    avatar: avatarImg,
    review: "BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!",
  },
];

const About5 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 my-12">
      {/* Container */}
      <div className="bg-[#070582] rounded-3xl p-8 lg:p-12 text-white relative shadow-2xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          
          {/* Left Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Our <span className="text-[#ffd700]">Clients,</span> In<br />
              Their Own Words
            </h2>
          </div>

          {/* Right Slider Section */}
          <div className="lg:col-span-7 flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Custom Previous Button */}
            <button
              ref={prevRef}
              aria-label="Previous Slide"
              className="text-[#1d4ed8] hover:text-white transition-colors p-1 focus:outline-none shrink-0"
            >
              <FiChevronLeft className="w-10 h-10 md:w-14 md:h-14 stroke-[2]" />
            </button>

            {/* Swiper Container */}
            <div className="w-full max-w-lg overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                className="w-full"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 text-black shadow-xl min-h-[200px] flex flex-col justify-between">
                      
                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-extrabold text-xl text-black">
                          {item.rating.toFixed(1)}
                        </span>
                        <div className="flex text-[#ffb800] gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-14 h-14 rounded-full object-cover bg-amber-400"
                        />
                        <div>
                          <h3 className="font-bold text-lg text-black leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{item.role}</p>
                        </div>
                      </div>

                      {/* Review Content */}
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.review}
                      </p>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Next Button */}
            <button
              ref={nextRef}
              aria-label="Next Slide"
              className="text-[#1d4ed8] hover:text-white transition-colors p-1 focus:outline-none shrink-0"
            >
              <FiChevronRight className="w-10 h-10 md:w-14 md:h-14 stroke-[2]" />
            </button>

          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end pt-2">
          <button className="bg-[#ffd700] hover:bg-yellow-400 text-black font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-md">
            Add your reviews
          </button>
        </div>

      </div>
    </section>
  );
};

export default About5;