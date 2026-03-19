import "./styles/WhatIDo.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Startup Founder",
      role: "UI/UX & Branding Client",
      text: "Hasin completely transformed our user interface. Our conversion rates spiked noticeably after launching the new design. Truly a designer who understands both aesthetics and business goals.",
      initial: "S"
    },
    {
      name: "Product Manager",
      role: "Web Development Client",
      text: "The web development work was lightning fast and bug-free. Hasin seamlessly bridged the gap between complex UI designs and fully functional engineering. Delivered ahead of schedule.",
      initial: "P"
    },
    {
      name: "Creative Director",
      role: "Video & AI Automation Client",
      text: "The video editing and AI automation workflows Hasin implemented saved our team hundreds of hours every month. An incredibly versatile and modern skillset — highly recommended.",
      initial: "C"
    }
  ];

  return (
    <section id="reviews" className="testimonials-section section-container" style={{ margin: '80px auto' }}>
      <div className="process-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 className="section-title">Client Feedback</h2>
        <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Real feedback from founders and teams that I've had the pleasure of working with.
        </p>
      </div>

      <div className="testimonials-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {reviews.map((review, i) => (
          <div key={i} className="process-step" style={{ 
            background: 'linear-gradient(145deg, #18181b 0%, #09090b 100%)',
            border: '1px solid #27272a',
            borderRadius: '24px',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(-10px)', borderColor: '#52525b' })}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(0)', borderColor: '#27272a' })}
          >
            <div>
              <div style={{ color: '#667eea', fontSize: '32px', marginBottom: '20px', lineHeight: 1 }}>"</div>
              <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.7', margin: '0 0 30px 0' }}>{review.text}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ 
                width: '45px', height: '45px', borderRadius: '50%', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 'bold', fontSize: '18px'
              }}>
                {review.initial}
              </div>
              <div>
                <h4 style={{ color: '#fafafa', margin: 0, fontSize: '16px', fontWeight: 600 }}>{review.name}</h4>
                <div style={{ color: '#71717a', fontSize: '13px', marginTop: '4px' }}>{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
