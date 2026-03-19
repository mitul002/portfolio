import { useState } from "react";
import { MdClose, MdSend, MdInfoOutline } from "react-icons/md";
import "./styles/ContactModal.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "Not Sure Yet",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // NOTE: Replace YOUR_WEB3FORMS_ACCESS_KEY with an actual Web3Forms access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", 
          subject: `New Service Request from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          setFormData({ name: "", email: "", service: "Web Development", budget: "Not Sure Yet", message: "" });
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} data-cursor="disable">
          <MdClose />
        </button>
        
        <div className="modal-header">
          <h3>Let's build something.</h3>
          <p>Securely submit your project details directly to our team.</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service">Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Full Agency Retainer</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>AI Automation</option>
                <option>Graphic/Video Design</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Project Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option>Not Sure Yet</option>
                <option>&lt; $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>&gt; $5,000</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Tell us about your project goals, timeline, and requirements..."
            ></textarea>
          </div>

          <div className="form-notice">
            <MdInfoOutline className="info-icon" />
            <span>To receive emails, please replace <strong>YOUR_WEB3FORMS_ACCESS_KEY</strong> in the code.</span>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Sending Details...</span>
            ) : (
              <>
                <span>Send Secure Request</span>
                <MdSend />
              </>
            )}
          </button>

          {submitStatus === "success" && (
            <div className="submit-status success">
              Message sent successfully! We'll be in touch soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="submit-status error">
              Failed to send. Please ensure the Web3Forms access key is configured correctly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
