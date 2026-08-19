import React, { useState } from 'react';
import manimage from '../../assets/image7.webp';

// Individual FAQ Card Item Component
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none cursor-pointer"
      >
        <span className={`text-base md:text-lg font-bold transition-colors duration-200 ${
          isOpen ? 'text-blue-900' : 'text-slate-900 hover:text-blue-900'
        }`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-blue-900' : 'text-slate-800'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Expandable Answer Section */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-40 opacity-100 px-6 pb-5' : 'max-h-0 opacity-0 px-6'
      }`}>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-2 border-t border-gray-100">
          {answer}
        </p>
      </div>
    </div>
  );
};

// Main Page Component
const Page10 = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs."
    },
    {
      id: 2,
      question: "How long does a project usually take?",
      answer: "Project timelines vary but typically range from 2 to 6 weeks depending on complexity and requirements."
    },
    {
      id: 3,
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide ongoing maintenance and support after the project goes live to ensure everything runs smoothly."
    },
    {
      id: 4,
      question: "Can I get a custom design for my brand?",
      answer: "Absolutely. We create custom designs that align with your brand identity and audience."
    },
    {
      id: 5,
      question: "How do I get started with a project?",
      answer: "Simply contact us through the form or email. We’ll schedule a free consultation to understand your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Page Heading */}
        <div className="text-center mb-12">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            Have You Any Question
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <span className="text-[#0300bf]">Frequently</span> Asked Questions
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>

          {/* Right Image Card */}
          <div className="flex justify-center w-full">
            <img 
              src={manimage} 
              alt="Customer Support Representative" 
              className="rounded-2xl shadow-lg w-full max-w-lg h-[460px] object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Page10;
