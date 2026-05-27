"use client";

import "./products.css";
import Link from "next/link";

const products = [
  {
    id: 1,
    slug: "roche-9180-electrolyte",
    title: "Roche 9180 Electrolyte Reagent",
    image: "/images/products/roche-9180.webp",
    short: "Compatible reagent for Roche 9180 electrolyte analyzers.",
    description:
      "Premium quality electrolyte analyzer reagent compatible with Roche 9180 systems for accurate sodium, potassium and chloride testing in hospitals, pathology labs and diagnostic centers.",
  },

  {
    id: 2,
    slug: "erba-ec-90-electrolyte",
    title: "ERBA EC 90 Electrolyte Reagent",
    image: "/images/products/erba-ec90.webp",
    short: "High-performance reagent for ERBA EC 90 analyzers.",
    description:
      "Reliable ERBA EC 90 compatible electrolyte reagent designed for stable analyzer performance and precise electrolyte testing results.",
  },

  {
    id: 3,
    slug: "medica-easylyte-electrolyte",
    title: "Medica EasyLyte Reagent",
    image: "/images/products/medica-easylyte.webp",
    short: "Trusted reagent for Medica EasyLyte analyzers.",
    description:
      "High-quality Medica EasyLyte compatible electrolyte reagent delivering consistent and accurate sodium, potassium and chloride measurements.",
  },

  {
    id: 4,
    slug: "hdc-lyte-electrolyte",
    title: "HDC Lyte Electrolyte Reagent",
    image: "/images/products/hdc-lyte.webp",
    short: "Premium electrolyte solution for HDC Lyte analyzers.",
    description:
      "Reliable electrolyte analyzer reagent ensuring stable testing performance and accurate diagnostic laboratory results.",
  },

  {
    id: 5,
    slug: "sensacore-st200-aqua",
    title: "Sensacore ST200 Aqua Reagent",
    image: "/images/products/sensacore.webp",
    short: "Compatible reagent for Sensacore analyzers.",
    description:
      "Premium quality electrolyte reagent designed for Sensacore ST200 Aqua analyzers with high precision and smooth analyzer compatibility.",
  },

  {
    id: 6,
    slug: "biosystem-diestro-electrolyte",
    title: "Biosystem Diestro Electrolyte Reagent",
    image: "/images/products/biosystem.webp",
    short: "Advanced electrolyte solution for Biosystem analyzers.",
    description:
      "High-quality electrolyte reagent for Biosystem Diestro analyzers delivering reliable performance for healthcare and pathology laboratories.",
  },
];

export default function Products() {
  return (
    <>
      <section className="products-page">
        <div className="container-custom">
          <div className="products-heading">
            <span>Our Products</span>

            <h1>Premium Electrolyte Analyzer Reagents In India</h1>

            <p>
              Explore premium electrolyte analyzer reagents compatible with
              Roche 9180, ERBA EC 90, Medica EasyLyte, HDC Lyte, Sensacore ST200
              Aqua, Biosystem Diestro and more. Trusted by hospitals, pathology
              laboratories and diagnostic centers across India.
            </p>
          </div>

          <div className="products-grid-page">
            {products.map((item) => (
              <div className="product-card-page" key={item.id}>
                <img src={item.image} alt={`${item.title} Supplier in India`} />

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  <Link href={`/products/${item.slug}`} className="more-btn">
                    More Info
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
