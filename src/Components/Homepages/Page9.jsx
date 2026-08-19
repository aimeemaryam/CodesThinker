import React, { useState } from 'react'

const Page9 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
  }

  // Left side info feature list
  const infoList = [
    {
      title: 'Discuss Your Project',
      desc: 'Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 9h-4v-2h4v2zm2-4H8V5h8v2z"/>
        </svg>
      )
    },
    {
      title: 'Get a Free Consultation',
      desc: 'Offer a no-obligation consultation to understand the client\'s needs and propose tailored solutions.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      )
    },
    {
      title: 'Reach Us Anytime',
      desc: 'Provide multiple contact channels, ensuring clients can connect with you at their convenience.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    }
  ]

  return (
    <div style={{
      width: '100%',
      minHeight: '70vh',
      backgroundColor: '#f2f6fa',
      display: 'flex',
      marginTop: '6vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 40px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Roboto, -apple-system, sans-serif"
    }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{
          fontSize: '17px',
          fontWeight: '600',
          color: '#64748b',
          display: 'block',
          marginBottom: '5px'
        }}>
          Let's Talk
        </span>
        <h1 style={{
          fontSize: '41px',
          fontWeight: '560',
          color: '#1e293b',
          margin: 0,
          letterSpacing: '-0.5px'
        }}>
          <span style={{ color: '#0300bf' }}>Let's Collaborate</span> and Innovate
        </h1>
      </div>

      {/* Main Content Split Grid */}
      <div style={{
        maxWidth: '1060px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Side: Information List */}
        <div style={{ flex: '1 1 420px', maxWidth: '480px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {infoList.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                {/* Circular Blue Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#0300bf',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(3, 0, 191, 0.25)'
                }}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 style={{
                    fontSize: '23px',
                    fontWeight: '700',
                    color: '#0f172a',
                    margin: '0 0 6px 0'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '17px',
                    color: '#64748b',
                    lineHeight: '1.2',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div style={{
          flex: '1 1 450px',
          maxWidth: '590px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '36px 36px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
          boxSizing: 'border-box'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '800',
            color: '#0f172a',
            textAlign: 'center',
            marginBottom: '32px',
            letterSpacing: '0.5px'
          }}>
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Full Name & Phone Row */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 180px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  👤
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 42px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '15px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 180px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  📞
                </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 42px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '15px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Email Input */}
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                ✉️
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '15px',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '15px',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  resize: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Submit Button aligned to bottom right */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 40px',
                  borderRadius: '50px',
                  backgroundColor: '#02005c',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(2, 0, 92, 0.3)',
                  transition: 'transform 0.2s ease, backgroundColor 0.2s ease'
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Page9