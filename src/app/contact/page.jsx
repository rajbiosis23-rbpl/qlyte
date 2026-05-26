import "./contact.css";

export const metadata = {
  title: "Contact Central Biomedicals | Electrolyte Reagent Supplier In India",

  description:
    "Contact Central Biomedicals for premium electrolyte analyzer reagents including Roche 9180, ERBA EC 90, Medica EasyLyte, Sensacore, HDC Lyte and more across India.",

  keywords: [
    "contact electrolyte reagent supplier",
    "electrolyte reagent supplier india",
    "electrolyte analyzer reagent supplier",
    "roche 9180 electrolyte reagent",
    "erba ec 90 reagent supplier",
    "medica easylyte reagent",
    "sensacore electrolyte reagent",
    "hdc lyte electrolyte",
    "pathology laboratory reagent supplier",
    "hospital electrolyte reagent supplier",
    "contact central biomedicals",
  ],

  alternates: {
    canonical: "https://centralbiomedicals.com/contact",
  },

  openGraph: {
    title: "Contact Central Biomedicals",
    description:
      "Get in touch for premium electrolyte analyzer reagents trusted by hospitals, pathology laboratories and diagnostic centers across India.",

    url: "https://centralbiomedicals.com/contact",
    siteName: "Central Biomedicals",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="container-custom">
          <span className="contact-tag">Contact Us</span>

          <h1> Contact Trusted Electrolyte Reagent Supplier In India</h1>

          <p>
            Need premium electrolyte analyzer reagents for Roche 9180, ERBA EC
            90, Medica EasyLyte, HDC Lyte, Sensacore or other analyzers? Contact
            our expert team today for reliable reagent solutions, technical
            support and fast PAN India delivery.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container-custom contact-grid">
          {/* LEFT */}
          <div className="contact-info">
            <span>Get In Touch</span>

            <h2> Get Expert Electrolyte Reagent Consultation</h2>

            <p>
              We are here to help you with premium electrolyte analyzer
              reagents, product guidance, compatibility support and trusted
              reagent supply for hospitals and laboratories.
            </p>

            <div className="info-cards">
              <div className="info-card">
                📍
                <div>
                  <h4>Office Address</h4>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="info-card">
                📞
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="info-card">
                ✉️
                <div>
                  <h4>Email Us</h4>
                  <p>info@centralbiomedicals.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-box">
            <h3>Send Message</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Company Name" />
              <textarea rows="5" placeholder="Write Message..." />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="seo-contact">
        <div className="container-custom">
          <h2> Trusted Electrolyte Reagent Supplier In India</h2>

          <p>
            Central Biomedicals is a trusted electrolyte analyzer reagent
            supplier in India providing premium compatible reagents for Roche
            9180, ERBA EC 90, Medica EasyLyte, HDC Lyte, Sensacore ST200 Aqua
            and Biosystem Diestro analyzers. Our products are trusted by
            hospitals, pathology labs, diagnostic centers and healthcare
            institutions for accurate sodium, potassium and chloride testing.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="container-custom">
          <div className="map-wrapper">
            <iframe
              src="https://maps.google.com/maps?q=Amrapali%20Vaishali%20Nagar%20Jaipur%20302021&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
