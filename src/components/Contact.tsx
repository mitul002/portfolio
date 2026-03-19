import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hasinalmasmitul@gmail.com" data-cursor="disable">
                hasinalmasmitul@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+8801740741351</p>
            <h4>Location</h4>
            <p>Monipur, Mirpur, Dhaka</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mitul002/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/hasinalmas"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/hasinalmas"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://www.shutterstock.com/g/HasinAlmas"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Shutterstock <MdArrowOutward />
            </a>
            <a
              href="https://www.freepik.com/author/hasinalmas"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Freepik <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Md. Hasin Almas Mitul</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
