import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPaperPlane 
} from 'react-icons/fa';

const Contact1 = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with your actual EmailJS credentials
    emailjs
      .sendForm(
        'service_eftvnzt',
        'template_va384rh',
        formRef.current,
        'hJU4sPPngWdv6LFpe'
      )
      .then(
        (result) => {
          setLoading(false);
          setStatusMessage('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  // Common Tailwind classes for the social icon links
  const socialIconClasses = "group w-10 h-10 rounded-full bg-[#100575] text-white flex items-center justify-center hover:bg-white border border-transparent hover:border-[#100575] transition duration-300";
  // Common Tailwind classes for the icon itself to change color on hover
  const iconInsideClasses = "text-white group-hover:text-[#100575] transition-colors duration-300";

  return (
    <section className="w-full bg-white py-12 px-6 mt-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
          Get In <span className="text-[#100575]">Touch</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-snug">
              Ready To Turn Your Vision Into Reality?
            </h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Want to blast your business off like a rocket? Tojo Global's got a secret
              weapon for you: an amazing custom Marketing, Management, Design,
              Development & Crypto listing plan which will turn heads and grow your
              business faster than ever.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-5 pt-4">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#100575] text-white p-3.5 rounded-lg text-lg transform -skew-x-12 flex items-center justify-center min-w-[48px]">
                <FaPhoneAlt className="transform skew-x-12" />
              </div>
              <span className="text-black font-bold text-base md:text-lg">
                +44 7470 103120
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#100575] text-white p-3.5 rounded-lg text-lg transform -skew-x-12 flex items-center justify-center min-w-[48px]">
                <FaEnvelope className="transform skew-x-12" />
              </div>
              <span className="text-black font-bold text-base md:text-lg">
                info@codesthinker.com
              </span>
            </div>

            {/* Address 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#100575] text-white p-3.5 rounded-lg text-lg transform -skew-x-12 flex items-center justify-center min-w-[48px]">
                <FaMapMarkerAlt className="transform skew-x-12" />
              </div>
              <span className="text-black font-bold text-base md:text-lg">
                Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom (Regional Office)
              </span>
            </div>

            {/* Address 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#100575] text-white p-3.5 rounded-lg text-lg transform -skew-x-12 flex items-center justify-center min-w-[48px]">
                <FaMapMarkerAlt className="transform skew-x-12" />
              </div>
              <span className="text-black font-bold text-base md:text-lg">
                Hassan Manzil Basement Goheer Town Bahawalpur (Global Delivery Center)
              </span>
            </div>
          </div>

          {/* Social Icons with Inverted Hover Effect */}
          <div className="flex items-center gap-3 pt-4">
            <a href="#" className={socialIconClasses}>
              <FaFacebookF className={iconInsideClasses} />
            </a>
            <a href="#" className={socialIconClasses}>
              <FaTwitter className={iconInsideClasses} />
            </a>
            <a href="#" className={socialIconClasses}>
              <FaInstagram className={iconInsideClasses} />
            </a>
            <a href="#" className={socialIconClasses}>
              <FaLinkedinIn className={iconInsideClasses} />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white">
          <h3 className="text-2xl font-bold text-black mb-6 text-center lg:text-left">
            Book a Free Consultation
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-black mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:border-[#100575] text-black"
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-bold text-black mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Working Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:border-[#100575] text-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold text-black mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:border-[#100575] text-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-black mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Describe your message here"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:border-[#100575] text-black resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#100575] hover:bg-[#0a0352] text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 transition duration-200 shadow-md"
            >
              {loading ? 'SENDING...' : 'SUBMIT'} <FaPaperPlane />
            </button>

            {/* Status Message */}
            {statusMessage && (
              <p className={`text-sm mt-2 ${statusMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact1;