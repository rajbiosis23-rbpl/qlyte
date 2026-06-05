import "./services.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
export const metadata = {
  title: "Electrolyte Reagent Supplier Services in India | Central Biomedicals",

  description:
    "Premium electrolyte reagent supply services in India for Roche 9180, ERBA EC 90, Medica EasyLyte, Sensacore, HDC Lyte and other electrolyte analyzers for hospitals and laboratories.",

  keywords: [
    "electrolyte reagent supplier india",
    "electrolyte analyzer reagent supplier",
    "roche 9180 electrolyte reagent",
    "erba ec 90 reagent supplier",
    "medica easylyte reagent",
    "sensacore electrolyte solution",
    "hdc lyte electrolyte",
    "electrolyte consumables india",
    "hospital electrolyte reagent supplier",
    "pathology laboratory reagent supplier",
    "diagnostic laboratory electrolyte reagent",
    "electrolyte solutions india",
  ],

  alternates: {
    canonical: "https://centralbiomedicals.com/services",
  },

  openGraph: {
    title: "Electrolyte Reagent Services In India",

    description:
      "Trusted supplier of premium electrolyte analyzer reagents for hospitals, pathology laboratories and diagnostic centers across India.",

    url: "https://centralbiomedicals.com/services",
    siteName: "Central Biomedicals",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function Services({
  districtData,
}) {

  const districtName =
    districtData?.district ||
    "India";
  const snap = await getDoc(
    doc(db, "websites", "qlyte", "pages", "services")
  );

  const firebaseServices = snap.exists()
    ? snap.data().services || []
    : [];

  const icons = [
    "🧪",
    "⚡",
    "🔬",
    "🏥",
    "🚚",
    "🎧",
  ];

  return (
    <>
      {/* HERO */}
      <section className="services-hero">
        <div className="container-custom">
          <span className="service-tag">Our Services</span>

          <h1>
            Premium Electrolyte Analyzer Reagents In {districtName} For Hospitals &
            Laboratories
          </h1>

          <p>
            We provide premium electrolyte analyzer reagents compatible with
            Roche 9180, ERBA EC 90, Medica EasyLyte, Sensacore, HDC Lyte and
            more for hospitals, pathology laboratories, diagnostic centers and
            healthcare institutions across {districtName}.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>What We Offer</span>
            <h2>Premium Electrolyte Reagent Solutions</h2>
          </div>

          <div className="services-grid">
            {firebaseServices.slice(0, 6).map((item, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  {icons[index] || "🧪"}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>How We Work</span>
            <h2>Our Supply Process</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <h3>01</h3>
              <h4>Requirement Analysis</h4>
              <p>Understanding your electrolyte analyzer requirements.</p>
            </div>

            <div className="process-card">
              <h3>02</h3>
              <h4>Product Selection</h4>
              <p>
                Selecting compatible electrolyte reagents for your analyzer.
              </p>
            </div>

            <div className="process-card">
              <h3>03</h3>
              <h4>Fast Delivery</h4>
              <p>Secure and quick reagent delivery across {districtName}.</p>
            </div>

            <div className="process-card">
              <h3>04</h3>
              <h4>Customer Support</h4>
              <p>Continuous support and reagent guidance whenever required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-service">
        <div className="container-custom why-grid-service">
          <div className="why-service-image">
            <img
              src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1200"
              alt="Premium Electrolyte Reagent Supplier In {districtName}"
            />
          </div>

          <div className="why-service-content">
            <span>Why Choose Us</span>

            <h2>Trusted Electrolyte Reagent Supplier You Can Trust</h2>

            <p>
              Our experienced team delivers premium quality electrolyte analyzer
              reagents trusted by hospitals, pathology labs and diagnostic
              centers for reliable testing performance.
            </p>

            <div className="service-features">
              <div>🧪 Premium Quality Reagents</div>
              <div>🚚 Fast PAN {districtName} Delivery</div>
              <div>🎧 Dedicated Support</div>
              <div>⚡ High Test Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-services">
        <div className="container-custom">
          <h2>Trusted Electrolyte Reagent Supplier In {districtName}</h2>

          <p>
            Central Biomedicals provides trusted electrolyte analyzer reagents
            in {districtName} including Roche 9180, ERBA EC 90, Medica EasyLyte,
            Sensacore, HDC Lyte and Biosystem Diestro compatible solutions. Our
            premium quality electrolyte reagents are trusted by hospitals,
            diagnostic laboratories, pathology centers and healthcare
            institutions for accurate sodium, potassium and chloride testing.
          </p>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="service-cta">
        <div className="container-custom service-cta-box">

          <h2>
            Need Premium Laboratory
            Equipment Services?
          </h2>

          <p>
            Contact our experts today for
            scientific and healthcare
            equipment solutions.
          </p>

          <button>
            Contact Us
          </button>

        </div>
      </section> */}
    </>
  );
}
