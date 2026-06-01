import "./homr.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const district = params?.district;

  const location = district || "India";

  const url = district ? `https://qlyte.com/${district}` : "https://qlyte.com";

  return {
    title: `Electrolyte Reagent Supplier in ${location} | Roche, ERBA, Medica EasyLyte | Qlyte`,

    description: `Trusted supplier of electrolyte analyzer reagents in ${location}. Compatible with Roche 9180, ERBA EC 90, Medica EasyLyte, HDC Lyte, Sensacore ST200 Aqua and more.`,

    keywords: [
      `electrolyte in ${location}`,
      `electrolyte supplier in ${location}`,
      `electrolyte reagent in ${location}`,
      `electrolyte analyzer reagent in ${location}`,
      `electrolyte reagent supplier ${location}`,
      `buy electrolyte reagent in ${location}`,
      "Roche 9180 electrolyte",
      "ERBA EC 90 electrolyte",
      "Medica EasyLyte reagent",
      "Electrolyte analyzer reagent",
      "Pathology lab reagent",
      "Hospital laboratory supplier",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `Electrolyte Reagent Supplier in ${location}`,
      description: `Premium electrolyte analyzer reagents for hospitals and pathology labs in ${location}.`,
      url,
      siteName: "Qlyte",
      locale: "en_IN",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function Home({ districtData }) {
  const docRef = doc(db, "websites", "qlyte", "pages", "home");
  const snap = await getDoc(docRef);

  const savedData = snap.exists() ? snap.data() : {};
  const location = districtData?.district || "India";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",

    name: `Qlyte ${location}`,

    description: `Electrolyte reagent supplier in ${location}`,

    areaServed: location,

    url: districtData?.slug
      ? `https://qlyte.com/${districtData.slug}`
      : "https://qlyte.com",

    medicalSpecialty: "Pathology",

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrolyte Analyzer Reagents",
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container-custom hero-grid">
          <div className="hero-content">
            <span className="hero-badge">
              Trusted Electrolyte Supplier in {location}
            </span>

            <h1>
              {savedData.title} in {location}
            </h1>

            <p>
              {savedData.description} in {location}
            </p>

            <div className="hero-buttons">
              <Link
                href={
                  districtData?.slug
                    ? `/${districtData.slug}/products`
                    : "/products"
                }
                className="primary-btn"
              >
                {savedData.button1Text}
              </Link>
              <Link
                href={
                  districtData?.slug
                    ? `/${districtData.slug}/contact`
                    : "/contact"
                }
                className="primary-btn"
              >
                {savedData.button2Text}
              </Link>
            </div>

            <div className="stats-grid">
              <div>
                <h3>10K+</h3>
                <p>Reagents Delivered</p>
              </div>

              <div>
                <h3>50K</h3>
                <p>Our Clients Family</p>
              </div>

              <div>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={
                savedData.imageUrl ||
                "https://images.unsplash.com/photo-1532187643603-ba119ca4109e"
              }
              alt={`Premium Laboratory Equipment Supplier in ${location}`}
            />
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <div className="container-custom">
          <h2>Trusted By Hospitals, Pathology Labs & Diagnostic Centers</h2>

          <div className="trust-grid">
            <div className="trust-card">Certified Quality Reagents</div>

            <div className="trust-card">Reliable Test Accuracy</div>

            <div className="trust-card">Fast PAN {location} Delivery</div>

            <div className="trust-card">Technical Expert Support</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>Our Products</span>
            <h2>Compatible Electrolyte Analyzer Reagents</h2>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200"
                alt="Scientific Microscope Laboratory Equipment"
              />

              <h3>Roche 9180 Electrolyte Reagent</h3>
              <p>
                Premium quality electrolyte reagent compatible with Roche 9180
                analyzers, designed for highly accurate sodium, potassium and
                chloride testing.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200"
                alt="Roche 9180 Electrolyte Reagent"
              />

              <h3>ERBA EC 90 Electrolyte Reagent</h3>
              <p>
                High-performance ERBA EC 90 compatible reagent ensuring stable
                electrolyte analysis and consistent laboratory results.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200"
                alt="Medical Diagnostic Laboratory Equipment"
              />

              <h3>Medica EasyLyte Reagent</h3>
              <p>
                Reliable electrolyte reagent for Medica EasyLyte analyzers
                offering superior testing precision and smooth analyzer
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container-custom cta-box">
          <h2>Looking For Premium Electrolyte Reagents?</h2>

          <p>
            Get high-quality electrolyte analyzer reagents with trusted quality,
            competitive pricing, technical support and fast PAN {location}{" "}
            delivery.
          </p>

          <button className="primary-btn">Request Free Quote</button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container-custom why-grid">
          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1200"
              alt="Laboratory Equipment"
            />
          </div>

          <div className="why-content">
            <span>Why Choose Us</span>

            <h2>
              Trusted Electrolyte Reagent Supplier For Hospitals & Laboratories
            </h2>

            <p>
              Central Biomedicals provides high-quality electrolyte analyzer
              reagents that deliver stable performance, accurate test results
              and reliable compatibility with leading electrolyte analyzers. We
              focus on premium quality, fast delivery and customer satisfaction.
            </p>

            <div className="why-features">
              <div className="feature-box">✅ Premium Quality Reagents</div>

              <div className="feature-box">🚚 Fast PAN {location} Delivery</div>

              <div className="feature-box">🧪 Accurate Test Results</div>

              <div className="feature-box">🎧 Dedicated Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="industry-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>Industries We Serve</span>
            <h2>Trusted Across Healthcare & Diagnostic Industries</h2>
          </div>

          <div className="industry-grid">
            <div className="industry-card">🏥 Hospitals & Clinics</div>

            <div className="industry-card">🧪 Pathology Laboratories</div>

            <div className="industry-card">🔬 Diagnostic Centers</div>

            <div className="industry-card">💊 Pharmaceutical Laboratories</div>

            <div className="industry-card">🎓 Research Institutions</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>What Our Clients Say</span>
            <h2>Trusted By 500+ Happy Clients</h2>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p>
                Excellent quality electrolyte reagents with fast delivery and
                consistent performance. Their support team is highly
                professional.
              </p>

              <div className="client-info">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />

                <div>
                  <h4>Dr. Rajesh Sharma</h4>
                  <span>Senior Pathologist</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p>
                Reliable electrolyte solutions for our diagnostic laboratory.
                Product quality and test accuracy are excellent.
              </p>

              <div className="client-info">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                />

                <div>
                  <h4>Dr. Anita Verma</h4>
                  <span>Research Specialist</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>

              <p>
                One of the best electrolyte reagent suppliers in {location}.
                Competitive pricing and outstanding service.
              </p>

              <div className="client-info">
                <img
                  src="https://randomuser.me/api/portraits/men/50.jpg"
                  alt="Client"
                />

                <div>
                  <h4>Mr. Amit Patel</h4>
                  <span>Lab Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container-custom">
          <div className="section-heading">
            <span>Frequently Asked Questions</span>

            <h2>Common Questions About Electrolyte Reagents</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h3>Do you provide compatible electrolyte analyzer reagents?</h3>

              <p>
                Yes, we provide premium compatible electrolyte reagents for
                Roche 9180, ERBA EC 90, Medica EasyLyte, HDC Lyte, Biosystem
                Diestro, Sensacore ST200 Aqua and many more analyzers.
              </p>
            </div>

            <div className="faq-card">
              <h3>Do you provide PAN {location} delivery?</h3>

              <p>
                Yes, we provide secure and fast delivery of electrolyte reagents
                across {location}.
              </p>
            </div>

            <div className="faq-card">
              <h3>Who can use your electrolyte reagents?</h3>

              <p>
                Our electrolyte analyzer reagents are widely used in hospitals,
                pathology labs, diagnostic centers, research laboratories and
                healthcare institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        <Link
          href={
            districtData?.slug ? `/${districtData.slug}/products` : "/products"
          }
          style={{
            color: "#1565d8",
            fontSize: "18px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Explore Electrolyte Products in {location}
        </Link>
      </section>

      <section
        style={{
          padding: "50px 0",
          background: "#fff",
        }}
      >
        <div className="container-custom">
          <h2>Electrolyte Reagent Supplier in {location}</h2>

          <p>
            Qlyte supplies premium electrolyte analyzer reagents in {location}{" "}
            for hospitals, pathology labs, diagnostic centres and healthcare
            institutions. Compatible products include Roche 9180, ERBA EC 90,
            Medica EasyLyte, HDC Lyte, Sensacore ST200 Aqua and more.
          </p>
        </div>
      </section>
    </>
  );
}
