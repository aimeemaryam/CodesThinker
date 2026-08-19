import React from 'react';

// Adjust path according to your assets folder structure
import mainImg from '../../assets/about3-main.webp'; 
import overlayImg from '../../assets/about3-overlay.webp';

const About3 = () => {
  const features = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process"
  ];

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .about3-section {
          background-color: #ffffff;
          width: 100%;
          padding: 40px 40px;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .about3-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        /* Left Column - Image Composition */
        .about3-image-wrapper {
          flex: 0 0 50%;
          max-width: 50%;
          position: relative;
        }

        .about3-main-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
        }

        /* Top-Left Circular Icon Badge */
        .about3-icon-badge {
          position: absolute;
          top: 7px;
          left: 0px;
          width: 100px;
          height: 100px;
          background-color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .about3-icon-badge svg {
          width: 49px;
          height: 49px;
          fill: #1a129d;
        }

        /* Bottom-Right Overlapping Image */
        .about3-overlay-image {
          position: absolute;
          bottom: 40px;
          right: -54px;
          width: 200px;
          height: 130px;
          object-fit: cover;
        //   border-radius: 12px;
        //   border: 4px solid #ffffff;
        //   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          z-index: 3;
        }

        /* Right Column - Content */
        .about3-content {
          flex: 0 0 45%;
          max-width: 45%;
        }

        .about3-subheading {
          font-size: 15px;
          font-weight: 700;
          color: #000000;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .about3-subheading span {
          color: #1a129d;
        }

        .about3-heading {
          font-size: 38px;
          font-weight: 700;
          color: #000000;
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin-top: 0;
          margin-bottom: 24px;
        }

        .about3-heading span {
          color: #1a129d;
        }

        .about3-description {
          font-size: 18px;
          line-height: 1.6;
          color: #101828;
          margin-bottom: 28px;
          font-weight: 400;
        }

        /* Feature Pills */
        .about3-features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about3-feature-item {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          background-color: #f8faff;
          padding: 5px 26px;
          border-radius: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
     
        }

        

        .about3-feature-arrow {
          font-size: 16px;
          color: #000000;
          margin-right: 14px;
          font-weight: bold;
        }

        .about3-feature-text {
          font-size: 15px;
          font-weight: 600;
          color: #111111;
        }
      `}</style>

      {/* Markup */}
      <section className="about3-section">
        <div className="about3-container">
          
          {/* Left - Image Block with Overlays */}
          <div className="about3-image-wrapper">
            
            {/* Top-Left Circular Icon Badge */}
            <div className="about3-icon-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>

            {/* Main Background Image */}
            <img
              src={mainImg}
              alt="Team collaborating in office"
              className="about3-main-image"
            />

            {/* Bottom-Right Overlapping Image */}
            <img
              src={overlayImg}
              alt="Developer coding on laptop"
              className="about3-overlay-image"
            />
          </div>

          {/* Right - Text & Content */}
          <div className="about3-content">
            <p className="about3-subheading">
              WHO <span>WE</span> ARE
            </p>

            <h2 className="about3-heading">
              YOUR <span>VISION OUR</span> CODE
            </h2>

            <p className="about3-description">
              At Codes Thinker, we are a passionate team of developers, designers, and strategists dedicated to building smart, scalable, and user-focused digital solutions. We thrive on creativity, and cutting-edge technology to transform ideas into impactful products. With a commitment to quality, transparency, and client satisfaction, we don't just deliver code — we deliver value. Every project we take on reflects our belief in innovation, precision, and long-term partnerships.
            </p>

            {/* Feature Pills */}
            <div className="about3-features-list">
              {features.map((feature, index) => (
                <div key={index} className="about3-feature-item">
                  <span className="about3-feature-arrow">&rarr;</span>
                  <span className="about3-feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About3;