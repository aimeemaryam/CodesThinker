import React from 'react';

// Import your 4 step images here (adjust paths to your assets directory)
import step1Img from '../../assets/step1.webp';
import step2Img from '../../assets/step2.webp';
import step3Img from '../../assets/step3.webp';
import step4Img from '../../assets/step4.webp';

const About2 = () => {
  const steps = [
    {
      id: 1,
      number: "1-",
      title: "Submit Application",
      image: step1Img,
      alt: "Submit Application",
    },
    {
      id: 2,
      number: "2-",
      title: "Expert Evaluation",
      image: step2Img,
      alt: "Expert Evaluation",
    },
    {
      id: 3,
      number: "3-",
      title: "Personal Interview",
      image: step3Img,
      alt: "Personal Interview",
    },
    {
      id: 4,
      number: "4-",
      title: "Seamless Onboarding",
      image: step4Img,
      alt: "Seamless Onboarding",
    },
  ];

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .about2-section {
          background-color: #ffffff;
          width: 100%;
          padding: 0px 20px 80px 20px;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .about2-container {
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }

        .about2-heading {
          font-size: 38px;
          font-weight: 700;
          color: #1a129d;
          margin-bottom: 50px;
          letter-spacing: -0.01em;
        }

        .about2-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: flex-start;
        }

        .about2-step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        .about2-image-circle {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #000000;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          padding: 0;
          box-sizing: border-box;
          transition: border 0.5s ease-in-out, padding 0.3s ease-in-out;
        }

        .about2-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 50%;
          transition: transform 0.5s ease-in-out;
        }

        /* Hover Animation: Border becomes dotted & Image shrinks */
        .about2-image-circle:hover  {
          border: 3px dotted #000000;
          padding: 6px; /* Provides slight spacing inside the dotted border */
        }

        .about2-image-circle:hover .about2-image {
          transform: scale(0.99); /* Makes the image smaller on hover */
        }

        .about2-step-title {
          font-size: 22px;
          font-weight: 700;
          color: #000000;
          margin: 0;
          white-space: nowrap;
        }
      `}</style>

      {/* Component Markup */}
      <section className="about2-section">
        <div className="about2-container">
          <h2 className="about2-heading">
            Your Path to Joining Code's Thinker
          </h2>

          <div className="about2-grid">
            {steps.map((step) => (
              <div key={step.id} className="about2-step-card">
                <div className="about2-image-circle">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="about2-image"
                  />
                </div>
                <h3 className="about2-step-title">
                  {step.number} {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;