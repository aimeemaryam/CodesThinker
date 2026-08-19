import React from 'react';

// Replace with your actual image paths
import team1Img from '../../assets/team1_files/waseem.jpg'; 
import team2Img from '../../assets/team1_files/b2.jpg';
import team3Img from '../../assets/team1_files/g1.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Waseem M.',
    role: 'CEO',
    image: team1Img,
  },
  {
    id: 2,
    name: 'Saim',
    role: 'Director/UK',
    image: team2Img,
  },
  {
    id: 3,
    name: 'Malaika Noor',
    role: 'Business Developer',
    image: team3Img,
  },
];

const Team1 = () => {
  return (
    <section className="max-w-7xl mx-auto mt-16 px-6 md:px-12 py-12">
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Meet Our <span className="text-[#100575]">Team</span>
        </h1>
        <p className="text-black text-base md:text-lg leading-relaxed">
          Our team of passionate and experienced professionals is dedicated to driving your
          success. From strategy to execution, we combine creativity, innovation, and insight to
          deliver exceptional results.
        </p>
      </div>

      {/* Section Subheading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
        Global <span className="text-[#100575]">Leadership</span>
      </h2>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-100 transition-transform duration-300 ease-out hover:scale-[1.03]"
          >
            {/* Image Container */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />

            {/* Static Dark Overlay (Visible normally, fades out on hover) */}
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />

            {/* Bottom Card Div (Slides up from the bottom on hover) */}
            <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-md text-white py-4 px-6 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
              <h3 className="text-xl font-bold tracking-wide">{member.name}</h3>
              <p className="text-sm text-gray-300 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team1;