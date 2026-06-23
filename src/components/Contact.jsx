import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">

        <h2 className="text-center mb-5">Get in Touch</h2>

        <div className="contact-form">

          <form>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="0400 000 000"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Service Required</label>
              <select className="form-select">
                <option>Dog Walking</option>
                <option>Pet Sitting</option>
                <option>Puppy Visits</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Tell us a little about your pet and how we can help..."
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;