import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import GetQuoteForm from "@/components/GetQuoteForm";
import "../product-details.css";
export async function generateMetadata({
  params,
}) {
  const { slug, district } = await params;

  const snap = await getDoc(
    doc(
      db,
      "websites",
      "qlyte",
      "pages",
      "products"
    )
  );

  const products = snap.exists()
    ? snap.data().products || []
    : [];

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description:
        "The requested product could not be found.",
    };
  }

  const location = district
    ? district
    : "India";

  const url = district
    ? `https://qlyte.com/${district}/products/${slug}`
    : `https://qlyte.com/products/${slug}`;

  return {
    title: `${product.title} Supplier in ${location} | Buy ${product.title} Online | Qlyte`,

    description: `Buy ${product.title} in ${location}. Trusted supplier of electrolyte analyzer reagents for hospitals, pathology labs, diagnostic centres and healthcare facilities across India.`,

    keywords: [
      product.title,
      `${product.title} supplier`,
      `${product.title} in ${location}`,
      `${product.title} in India`,
      `Buy ${product.title}`,
      `Electrolyte in ${location}`,
      `Electrolyte Analyzer Reagents`,
      `Diagnostic Laboratory Reagent`,
      `Hospital Lab Reagent`,
      `Pathology Lab Reagent`,
      `Medical Equipment Supplier`,
      `Electrolyte Reagent Supplier`,
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${product.title} Supplier in ${location} | Qlyte`,
      description: `Trusted supplier of ${product.title} for hospitals and pathology labs in ${location}.`,
      url,
      siteName: "Qlyte",
      images: [
        {
          url:
            typeof product.image ===
              "string" &&
              product.image.startsWith(
                "http"
              )
              ? product.image
              : "/images/products/default.webp",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Qlyte`,
      description: `Buy ${product.title} in ${location}.`,
      images: [
        typeof product.image ===
          "string" &&
          product.image.startsWith("http")
          ? product.image
          : "/images/products/default.webp",
      ],
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview":
          "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProductPage({
  params,
}) {
  const { district, slug } = await params;

  const snap = await getDoc(
    doc(db, "websites", "qlyte", "pages", "products")
  );

  const products = snap.exists()
    ? snap.data().products || []
    : [];

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const schemaData = {
    "@context":
      "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.desc,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Qlyte",
    },
    category:
      "Electrolyte Analyzer Reagent",
    offers: {
      "@type": "Offer",
      availability:
        "https://schema.org/InStock",
      priceCurrency: "INR",
    },
  };

  return (
    <section className="product-page">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaData
          ),
        }}
      />

      <div className="container-custom">

        <div className="product-grid">

          {/* Image */}
          <div className="product-image-box">
            <img
              src={
                typeof product.image ===
                  "string" &&
                  product.image.startsWith(
                    "http"
                  )
                  ? product.image
                  : "/images/products/default.webp"
              }
              alt={product.title}
            />
          </div>

          {/* Content */}
          <div className="product-content">

            <span className="product-tag">
              Available in{" "}
              {district || "India"}
            </span>

            <h1>
              {product.title} electrolyte
            </h1>

            <p>
              {product.desc}. Trusted
              supplier of{" "}
              {product.title} for
              hospitals, pathology labs
              and healthcare centres in{" "}
              {district || "India"}.
            </p>

            <div className="product-features">
              <span>
                ✔ Premium Quality
              </span>

              <span>
                ✔ Fast Delivery
              </span>

              <span>
                ✔ Technical Support
              </span>

              <span>
                ✔ Accurate Results
              </span>
            </div>
            <div className="product-details">
              {product.title && (
                <p>
                  <strong>Product:</strong> {product.title}
                </p>
              )}

              {product.brand && (
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
              )}

              {product.instrument && (
                <p>
                  <strong>Instrument:</strong> {product.instrument}
                </p>
              )}
            </div>
            <div className="product-btns">

              <GetQuoteForm />

              <Link
                href={
                  district
                    ? `/${district}/contact`
                    : "/contact"
                }
                className="secondary-btn"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="info-box">

          <h2>
            Electrolyte Reagent Supplier
            in {district || "India"}
          </h2>

          <p>
            We provide premium quality{" "}
            {product.title} electrolyte
            reagent for hospitals,
            pathology laboratories and
            diagnostic centres in{" "}
            {district || "India"}.
            Trusted quality, stable
            performance, competitive
            pricing and fast delivery.
          </p>

        </div>

      </div>
    </section>
  );
}