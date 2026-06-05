import "./about.css";

import Link from "next/link";

export const metadata = {
  title:
    "About Central Biomedicals | Trusted Electrolyte Reagent Supplier in {location}",

  description:
    "Learn about Central Biomedicals, a trusted electrolyte reagent supplier in {location} offering premium electrolyte analyzer reagents for Roche 9180, ERBA EC 90, Medica EasyLyte, Sensacore, HDC Lyte and more.",

  keywords: [
    "about central biomedicals",
    "electrolyte reagent supplier india",
    "electrolyte analyzer reagent",
    "roche 9180 electrolyte reagent",
    "erba ec 90 reagent",
    "medica easylyte reagent",
    "sensacore electrolyte reagent",
    "hdc lyte electrolyte",
    "biosystem diestro electrolyte",
    "electrolyte consumables india",
    "hospital electrolyte reagent supplier",
    "pathology lab electrolyte solutions",
    "diagnostic laboratory reagent supplier",
    "electrolyte solutions india",
  ],

  alternates: {
    canonical: "https://centralbiomedicals.com/about",
  },

  openGraph: {
    title: "About Central Biomedicals | Electrolyte Reagent Supplier",

    description:
      "Trusted supplier of electrolyte analyzer reagents for hospitals, pathology labs and diagnostic centers across India.",

    url: "https://centralbiomedicals.com/about",
    siteName: "Central Biomedicals",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage({
  districtData,
}) {
  const location =
    districtData?.district || "India";
  return (
    <>
      {/* HERO */}
      {/* <section className="about-hero">
        <div className="container-custom">

        
        </div>
      </section> */}

      <section className="seo-about">
        <div className="container-custom">
          <span className="page-tag">About Central Biomedicals In {location}</span>
          <h2>Trusted Electrolyte Reagent Supplier In {location}</h2>

          <p>
            Central Biomedicals is a trusted supplier of premium electrolyte
            analyzer reagents in {location}, delivering reliable and high-quality
            solutions for hospitals, pathology laboratories, diagnostic centers
            and healthcare institutions. We provide compatible electrolyte
            reagents for Roche 9180, ERBA EC 90, Medica EasyLyte, HDC Lyte,
            Biosystem Diestro, Sensacore ST200 Aqua and other leading
            electrolyte analyzers ensuring stable performance, accurate results
            and reliable testing.
          </p>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="company-section">
        <div className="container-custom company-grid">
          <div className="company-image">
            <img
              src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1200"
              alt="Trusted Electrolyte Reagent Supplier in {location}"
            />
          </div>

          <div className="company-content">
            <span>Who We Are</span>

            <h2>Leading Supplier Of Electrolyte Analyzer Reagents In {location}</h2>

            <p>
              Central Biomedicals is a trusted supplier of premium electrolyte
              analyzer reagents designed for hospitals, diagnostic centers,
              pathology laboratories and healthcare institutions. Our goal is to
              provide highly reliable and compatible electrolyte solutions that
              deliver precise sodium, potassium and chloride testing results.
            </p>

            <p>
              We believe in quality, performance and customer trust. Our focus
              is to provide premium-quality electrolyte reagents with fast
              delivery, technical support and consistent laboratory accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="container-custom stats-about-grid">
          <div className="stat-card">
            <h2>10K+</h2>
            <p>Reagents Delivered</p>
          </div>

          <div className="stat-card">
            <h2>50k+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Technical Support</p>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="mission-section">
        <div className="container-custom mission-grid">
          <div className="mission-card">
            <h2>Our Mission</h2>

            <p>
              To provide premium quality electrolyte analyzer reagents that
              ensure accurate testing, stable performance and reliable
              healthcare diagnostics for laboratories and hospitals.
            </p>
          </div>

          <div className="mission-card">
            <h2>Our Vision</h2>

            <p>
              To become {location}'s most trusted electrolyte reagent supplier by
              delivering innovation, quality products and unmatched customer
              service.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-about">
        <div className="container-custom">
          <div className="section-heading">
            <span>Why Choose Us</span>
            <h2>Why Hospitals & Laboratories Trust Us</h2>
          </div>

          <div className="why-grid-about">
            <div className="why-card">🧪 Premium Quality Reagents</div>

            <div className="why-card">✅ Reliable Test Accuracy</div>

            <div className="why-card">🚚 Fast PAN India Delivery</div>

            <div className="why-card">🎧 Technical Support</div>

            <div className="why-card">🏥 Trusted By Hospitals</div>

            <div className="why-card">⚡ Compatible With Leading Analyzers</div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>Our Journey</span>
            <h2>Electrolyte Solutions We Specialize In {location}</h2>
          </div>

          <div className="timeline">
            <div className="timeline-card">
              <h3>2010</h3>
              <p>Company Founded</p>
            </div>

            <div className="timeline-card">
              <h3>2015</h3>
              <p>500+ Hospitals Served</p>
            </div>

            <div className="timeline-card">
              <h3>2020</h3>
              <p>Expanded Research Solutions</p>
            </div>

            <div className="timeline-card">
              <h3>2025</h3>
              <p>Leading Lab Supplier</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container-custom cta-box-about">
          <h2>Looking For Premium Electrolyte Reagents?</h2>

          <p>
            Contact our experts for high-quality electrolyte analyzer reagents
            with reliable quality and fast PAN {location} delivery.
          </p>

          <Link
            href={
              districtData?.slug
                ? `/${districtData.slug}/contact`
                : "/contact"
            }
          >
            <button>Contact Us</button>
          </Link>
        </div>
      </section>
    </>
  );
}
