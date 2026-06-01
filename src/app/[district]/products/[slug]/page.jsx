import { notFound } from "next/navigation";
import Link from "next/link";
import GetQuoteForm from "@/components/GetQuoteForm";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function generateMetadata({
  params,
}) {
  const { district, slug } =
    await params;

  const snap = await getDoc(
    doc(
      db,
      "websites",
      "qlyte",
      "pages",
      "products"
    )
  );

  const products =
    snap.exists()
      ? snap.data().products || []
      : [];

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
    title: `${product.title} in ${districtName} | Global Biomedical`,

    description: `Buy ${product.title} in ${districtName}. Trusted supplier for hospitals, pathology labs and diagnostic centers.`,

    keywords: [
      `${product.title} in ${districtName}`,
      `electrolyte reagent in ${districtName}`,
      `buy ${product.title}`,
      `${districtName} pathology reagent`,
    ],
  };
}

export default async function ProductPage({
  params,
}) {
  const { district, slug } =
    await params;

  const snap = await getDoc(
    doc(
      db,
      "websites",
      "qlyte",
      "pages",
      "products"
    )
  );

  const products =
    snap.exists()
      ? snap.data().products || []
      : [];

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
        padding: "80px 0",
        background: "#f8fbff",
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
                product.image ||
                "/images/products/default.webp"
              }
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "30px",
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
              Available in {districtName}
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
              {product.title}
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
              {product.desc}
              {" "}
              Available in{" "}
              <strong>
                {districtName}
              </strong>
              . Trusted by hospitals,
              pathology labs and
              healthcare centers.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "30px",
                alignItems: "flex-start",
              }}
            >
              <GetQuoteForm />

              <Link
                href={`/${district}/contact`}
                style={{
                  border: "2px solid #1565d8",
                  color: "#1565d8",
                  padding: "16px 34px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  alignSelf: "flex-start",
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