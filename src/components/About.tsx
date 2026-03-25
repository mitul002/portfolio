import "./styles/About.css";

const About = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="about-section" id="about">
      <div className="about-me" style={{ display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', gap: '40px', alignItems: 'center' }}>

        <div className="about-photo" style={{ flexShrink: 0, width: '280px', height: '350px', borderRadius: '20px', background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
          <img src={`${baseUrl}images/mitul.jpg`} alt="Md. Hasin Almas Mitul" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="about-content" style={{ flex: 1 }}>
          <h3 className="title">About Me</h3>
          <p className="para">
            I am <b>Md. Hasin Almas Mitul</b>, a passionate <b>professional graphic designer</b> with 5+ years of experience delivering creative solutions for brands worldwide. My expertise spans logo design, branding, illustration, and commercial design assets for top microstock platforms.
          </p>
          <p className="para">
            As a <b>web developer</b>, I build modern, responsive websites and web apps that blend aesthetics with functionality. I love transforming ideas into engaging digital experiences using the latest technologies.
          </p>
          <p className="para">
            I am also a <b>video editor</b>, bringing stories to life through dynamic visuals and seamless editing. My goal is to help clients stand out with unique, high-quality creative work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
