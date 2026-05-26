import { notFound } from "next/navigation";

const products = [
  {
    slug: "biosystem-diestro-electrolyte",
    name: "Biosystem Diestro Electrolyte",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200",
    description:
      "Buy genuine Biosystem Diestro Electrolyte reagent for accurate electrolyte analyzer testing in laboratories.",
  },

  {
    slug: "hdc-lyte-electrolyte",
    name: "HDC Lyte Electrolyte",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200",
    description:
      "Premium HDC Lyte Electrolyte reagent designed for accurate laboratory testing and diagnostics.",
  },

  {
    slug: "erma-el-120-electrolyte",
    name: "ERMA EL 120 Electrolyte",
    image:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1200",
    description:
      "ERMA EL 120 Electrolyte reagent for high precision laboratory electrolyte analysis.",
  },

  {
    slug: "erba-ec-90-electrolyte",
    name: "ERBA EC 90 Electrolyte",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200",
    description:
      "Buy ERBA EC 90 Electrolyte reagent for reliable laboratory electrolyte testing.",
  },

  {
    slug: "roche-9180-electrolyte",
    name: "Roche 9180 Electrolyte",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
    description:
      "Genuine Roche 9180 Electrolyte reagent trusted by hospitals and pathology labs.",
  },

  {
    slug: "medica-easylyte-electrolyte",
    name: "Medica EasyLyte Electrolyte",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200",
    description:
      "Premium Medica EasyLyte Electrolyte reagent for medical laboratories.",
  },

  {
    slug: "ab-lyte-electrolyte",
    name: "AB Lyte Electrolyte",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200",
    description:
      "Buy AB Lyte Electrolyte reagent for precise electrolyte testing.",
  },

  {
    slug: "avecon-maxlyte-electrolyte",
    name: "Avecon MaxLyte Electrolyte",
    image:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200",
    description:
      "High quality Avecon MaxLyte Electrolyte solution for laboratories.",
  },

  {
    slug: "edge-lab-edgelyte-electrolyte",
    name: "Edge Lab EdgeLyte Electrolyte",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
    description:
      "Premium Edge Lab EdgeLyte Electrolyte reagent for pathology labs.",
  },

  {
    slug: "sensacore-st200-aqua",
    name: "Sensacore ST200 Aqua",
    image:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1200",
    description:
      "Buy Sensacore ST200 Aqua electrolyte reagent for accurate diagnostics.",
  },

  {
    slug: "merilyzer-quantilyte-automated-electrolyte-analyzer",
    name:
      "Merilyzer Quantilyte Automated Electrolyte Analyzer",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200",
    description:
      "Merilyzer Quantilyte Automated Electrolyte Analyzer for modern laboratory testing.",
  },
];

export async function generateMetadata({
  params,
}) {
  const product = products.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const keywords = [
    product.name,
    `${product.name} reagent`,
    `${product.name} electrolyte`,
    `buy ${product.name}`,
    `${product.name} india`,
    `${product.name} supplier`,
    "electrolyte reagent",
    "electrolyte analyzer",
    "laboratory reagent",
    "pathology laboratory reagent",
    "medical laboratory reagent",
    "diagnostic reagent",
    "electrolyte solution",
    "buy electrolyte reagent online",
    "central biomedicals",
  ];

  return {
    title: `Buy ${product.name} in India | Central Biomedicals`,
    description: product.description,
    keywords,

    alternates: {
      canonical: `https://centralbiomedicals.com/products/${product.slug}`,
    },

    openGraph: {
      title: `Buy ${product.name} in India`,
      description: product.description,
      url: `https://centralbiomedicals.com/products/${product.slug}`,
      siteName: "Central Biomedicals",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProductPage({
  params,
}) {
  const product = products.find(
    (p) => p.slug === params.slug
  );

  if (!product) return notFound();

  return (
    <section className="product-detail-page">
      <div className="container-custom">

        <h1>{product.name}</h1>

        <img
          src={product.image}
          alt={`${product.name} Electrolyte Reagent in India`}
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "20px",
          }}
        />

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.9",
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <span>✔ Premium Quality</span>
          <br />
          <span>✔ ISO Certified</span>
          <br />
          <span>✔ Fast Delivery</span>
        </div>

      </div>
    </section>
  );
}