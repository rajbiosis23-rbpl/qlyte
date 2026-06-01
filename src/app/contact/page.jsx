import "./contact.css";

export async function generateMetadata({
  params,
}) {
  const district =
    params?.district || "";

  const location =
    district
      ? district
          .replace(/-/g, " ")
      : "India";

  const url = district
    ? `https://qlyte.com/${district}/contact`
    : `https://qlyte.com/contact`;

  return {
    title: `Electrolyte Reagent Supplier Contact in ${location} | Qlyte`,

    description: `Contact trusted electrolyte reagent supplier in ${location}. Get premium Roche 9180, ERBA EC 90, Medica EasyLyte and compatible electrolyte analyzer reagents.`,

    keywords: [
      `electrolyte supplier in ${location}`,
      `electrolyte reagent in ${location}`,
      `electrolyte analyzer reagent ${location}`,
      `contact electrolyte supplier ${location}`,
      `Roche reagent supplier ${location}`,
      `ERBA EC 90 reagent ${location}`,
      `Medica EasyLyte ${location}`,
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `Electrolyte Supplier in ${location}`,
      description: `Trusted electrolyte reagent supplier in ${location}.`,
      url,
      siteName: "Qlyte",
      locale: "en_IN",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Contact({
  districtData,
}) {

const districtName =
  districtData?.district ||
  "India";

const districtSlug =
  districtData?.slug || "";

const formattedDistrict =
  districtName
    .split("-")
    .map(
      (word) =>
        word.charAt(0)
          .toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const officeAddress =
  districtSlug
    ? `${formattedDistrict}, Rajasthan, India`
    : "Jaipur, Rajasthan, India";


  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="container-custom">
          <span className="contact-tag">Contact Us</span>

          <h1>Contact Trusted Electrolyte Reagent Supplier In {districtName}</h1>

          <p>
            Need premium electrolyte analyzer reagents for Roche 9180, ERBA EC
            90, Medica EasyLyte, HDC Lyte, Sensacore or other analyzers? Contact
            our expert team today for reliable reagent solutions, technical
            support and fast PAN {districtName} delivery.
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
                  <p>{officeAddress}</p>
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
                  <p>info@qlyte.com</p>
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
          <h2>Trusted Electrolyte Reagent Supplier In {districtName}</h2>

          <p>
            Central Biomedicals is a trusted electrolyte analyzer reagent
            supplier in {districtName} providing premium compatible reagents for Roche
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
            <div
              style={{
                border: "4px solid #2563eb",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${officeAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`}

                width="100%"
                height="500"

                style={{
                  border: 0,
                }}

                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
