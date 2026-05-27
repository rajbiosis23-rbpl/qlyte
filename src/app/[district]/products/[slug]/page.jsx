import { notFound } from "next/navigation";
import Link from "next/link";

const products = [
  {
    slug: "roche-9180-electrolyte",
    name: "Roche 9180 Electrolyte Reagent",
    image:
      "/images/products/roche-9180.webp",
    description:
      "Premium quality electrolyte analyzer reagent compatible with Roche 9180 systems.",
  },

  {
    slug: "erba-ec-90-electrolyte",
    name: "ERBA EC 90 Electrolyte Reagent",
    image:
      "/images/products/erba-ec90.webp",
    description:
      "Reliable ERBA EC 90 compatible electrolyte reagent for accurate diagnostic testing.",
  },

  {
    slug: "medica-easylyte-electrolyte",
    name: "Medica EasyLyte Reagent",
    image:
      "/images/products/medica-easylyte.webp",
    description:
      "High-quality Medica EasyLyte compatible electrolyte reagent.",
  },

  {
    slug: "hdc-lyte-electrolyte",
    name: "HDC Lyte Electrolyte Reagent",
    image:
      "/images/products/hdc-lyte.webp",
    description:
      "Premium electrolyte solution for HDC Lyte analyzers.",
  },

  {
    slug: "sensacore-st200-aqua",
    name: "Sensacore ST200 Aqua Reagent",
    image:
      "/images/products/sensacore.webp",
    description:
      "Premium quality reagent for Sensacore analyzers.",
  },

  {
    slug: "biosystem-diestro-electrolyte",
    name: "Biosystem Diestro Electrolyte Reagent",
    image:
      "/images/products/biosystem.webp",
    description:
      "Advanced electrolyte solution for Biosystem analyzers.",
  },
];

export async function generateMetadata({
  params,
}) {

  const { district, slug } =
    await params;

  const product = products.find(
    (item) =>
      item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const districtName =
    district.charAt(0).toUpperCase() +
    district.slice(1);

  return {
    title:
      `${product.name} in ${districtName} | Global Biomedical`,

    description:
      `Buy ${product.name} in ${districtName}. Trusted supplier for hospitals, pathology labs and diagnostic centers.`,

    keywords: [
      `${product.name} in ${districtName}`,
      `electrolyte reagent in ${districtName}`,
      `buy ${product.name}`,
      `${districtName} pathology reagent`,
    ],
  };
}

export default async function ProductPage({
  params,
}) {

  const { district, slug } =
    await params;

  const product = products.find(
    (item) =>
      item.slug === slug
  );

  if (!product) {
    return notFound();
  }

  const districtName =
    district.charAt(0).toUpperCase() +
    district.slice(1);

  return (
    <section
      style={{
        padding:
          "80px 0",
        background:
          "#f8fbff",
      }}
    >
      <div className="container-custom">

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "60px",
            alignItems:
              "center",
          }}
        >

          <div>
            <img
              src={
                product.image
              }
              alt={
                product.name
              }
              style={{
                width: "100%",
                borderRadius:
                  "30px",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,.12)",
              }}
            />
          </div>

          <div>

            <span
              style={{
                background:
                  "#eaf4ff",
                color:
                  "#0f6cbd",
                padding:
                  "12px 20px",
                borderRadius:
                  "999px",
                fontWeight:
                  "600",
              }}
            >
              Available in{" "}
              {
                districtName
              }
            </span>

            <h1
              style={{
                fontSize:
                  "55px",
                marginTop:
                  "24px",
                lineHeight:
                  "1.1",
                fontWeight:
                  "700",
              }}
            >
              {
                product.name
              }
            </h1>

            <p
              style={{
                marginTop:
                  "24px",
                lineHeight:
                  "2",
                color:
                  "#6b7280",
                fontSize:
                  "18px",
              }}
            >
              {
                product.description
              }

              {" "}
              Available in{" "}
              <strong>
                {
                  districtName
                }
              </strong>
              . Trusted by
              hospitals,
              pathology
              labs and
              healthcare
              centers.
            </p>

            <div
              style={{
                display:
                  "flex",
                gap: "15px",
                marginTop:
                  "30px",
              }}
            >
              <button
                style={{
                  background:
                    "#1565d8",
                  color:
                    "#fff",
                  border:
                    "none",
                  padding:
                    "18px 34px",
                  borderRadius:
                    "999px",
                  cursor:
                    "pointer",
                  fontWeight:
                    "600",
                }}
              >
                Get Quote
              </button>

              <Link
                href="/contact"
                style={{
                  border:
                    "2px solid #1565d8",
                  color:
                    "#1565d8",
                  padding:
                    "16px 34px",
                  borderRadius:
                    "999px",
                  fontWeight:
                    "600",
                }}
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}