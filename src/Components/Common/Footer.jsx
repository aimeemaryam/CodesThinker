import React from 'react';
import image8 from '../../assets/image8.webp';

const Footer = () => {
  return (
    <footer className="bg-[#070533] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={image8} alt="Code's Thinker" className="h-12 w-auto" />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              We offer a range of cutting-edge web development and software solutions tailored to meet client needs. Our experienced team delivers collaboratively and efficiently.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-5 tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {["Business Intelligence", "Virtual Workstation", "Network Services", "Data Science", "IT Strategy"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="relative inline-block py-0.5 hover:text-white transition-colors duration-200 group">
                    {item}
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-bold mb-5 tracking-wide">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {["About Us", "Latest Projects", "IT Solutions", "Team Member", "Contact Us"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="relative inline-block py-0.5 hover:text-white transition-colors duration-200 group">
                    {item}
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Mail Subscribe */}
          <div>
            <h3 className="text-lg font-bold mb-5 tracking-wide">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              
              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+44 7470 103120</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@codesthinker.com</span>
              </li>

              {/* Office UK */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom (Regional Office)</span>
              </li>

              {/* Office Pakistan */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Hassan Manzil Basement Goheer Town Bahawalpur (Global Delivery Center)</span>
              </li>

            </ul>

            {/* Subscribe Form Bar */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center overflow-hidden rounded-md">
              <input
                type="email"
                placeholder="Your Mail"
                className="w-full px-4 py-2.5 text-gray-800 bg-white text-sm outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-5 py-2.5 transition-colors shrink-0"
              >
                Submit
              </button>
            </form>

          </div>

        </div>

        {/* Bottom Copyright Text */}
        <div className="pt-8 text-center text-xs text-gray-400">
          © 2024 – All Rights Reserved – Code's Thinker
        </div>

      </div>
    </footer>
  );
};

export default Footer;