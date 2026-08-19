import React from 'react';
import aboutImg1 from '../../assets/image3.webp'; // Adjust path according to your assets folder structure

const About1 = () => {
  return (
    <>
      {/* Embedded Styles */}
      <style>{`
        .about-section {
          background-color: #eaf4fc;
          width: 100%;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
          box-sizing: border-box;
          margin-bottom: 7vh;
        }

        .about-container {
          max-width: 1320px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* Left Content Column */
        .about-content {
          flex: 0 0 44%;
          max-width: 44%;
        }

        .about-title {
          font-size: 42px;
          font-weight: 700;
          color: #000000;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-top: 0;
          margin-bottom: 20px;
        }

        .title-highlight {
          color: #1a129d;
        }

        .about-description {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.55;
          color: #1a1a1a;
          margin-right: 70px;
          
        }

        /* Right Image Column */
        .about-image-wrapper {
          flex: 0 0 53%;
          max-width: 53%;
          display: flex;
          margin-top: 50px;
          justify-content: flex-end;
        }

        .about-image {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          box-shadow: none;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .about-container {
            flex-direction: column;
            gap: 40px;
          }

          .about-content,
          .about-image-wrapper {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .about-title {
            font-size: 34px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 40px 20px;
          }

          .about-title {
            font-size: 28px;
          }

          .about-description {
            font-size: 15px;
          }
        }
      `}</style>

      {/* Component Markup */}
      <section className="about-section">
        <div className="about-container">
          
          {/* Left Column - Text Content */}
          <div className="about-content">
            <h1 className="about-title">
              Building <span className="title-highlight">Future-Ready Software</span>
            </h1>

            <p className="about-description">
              We are a team of passionate developers, designers, and thinkers building scalable solutions for tomorrow. At [Codes Thinker], we don’t just build software — we craft scalable, intelligent solutions that drive real-world impact. Our team of developers, designers, and strategists work together to deliver innovative digital products tailored for tomorrow’s challenges. Rooted in collaboration, quality, and forward thinking, we’re committed to helping businesses grow through technology.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="about-image-wrapper">
            <img
              src={aboutImg1}
              alt="Team of developers and designers"
              className="about-image"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default About1;