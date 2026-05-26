// "use client";

// import { useState } from "react";
// import "./products.css";

// const products = [
//   {
//     id: 1,
//     title: "Laboratory Microscope",
//     image:
//       "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200",
//     short:
//       "High precision microscope for laboratory research.",
//     description:
//       "Premium scientific microscope designed for hospitals, research labs, diagnostics, and educational institutions with ultra-clear optics and durable build quality.",
//   },

//   {
//     id: 2,
//     title: "Diagnostic Equipment",
//     image:
//       "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200",
//     short:
//       "Advanced diagnostic machine for laboratories.",
//     description:
//       "Advanced diagnostic laboratory systems with modern testing technology for healthcare and pathology laboratories.",
//   },

//   {
//     id: 3,
//     title: "Lab Testing Machine",
//     image:
//       "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1200",
//     short:
//       "Reliable testing machine for scientific analysis.",
//     description:
//       "Designed for precise laboratory testing with high-quality standards and industrial-grade reliability.",
//   },

//   {
//     id: 4,
//     title: "Medical Analyzer",
//     image:
//       "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200",
//     short:
//       "Modern analyzer for medical diagnostics.",
//     description:
//       "High-speed medical analyzer trusted by hospitals and healthcare institutions for precise diagnosis.",
//   },
// ];

// export default function Products() {
//   const [selectedProduct, setSelectedProduct] =
//     useState(null);

//   return (
//     <>
//       <section className="products-page">

//         <div className="container-custom">

//           <div className="products-heading">
//             <span>Our Products</span>

//             <h1>
//               Premium Laboratory Equipment
//               Products In India
//               </h1>

//             <p>
//         Explore premium laboratory products
//         including microscopes, diagnostic
//         equipment, medical analyzers,
//         scientific instruments and testing
//         machines for hospitals, healthcare
//         institutions and research laboratories.
//             </p>
//           </div>

//           <div className="products-grid-page">

//             {products.map((item) => (
//               <div
//                 className="product-card-page"
//                 key={item.id}
//               >
//                 <img
//                   src={item.image}
//                   alt={`${item.title} Laboratory Equipment in India`}
//                 />

//                 <div className="card-content">

//                   <h3>{item.title}</h3>

//                   <p>{item.short}</p>

//                   <button
//                     className="more-btn"
//                     onClick={() =>
//                       setSelectedProduct(item)
//                     }
//                   >
//                     More Info
//                   </button>

//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODAL */}

//       {selectedProduct && (
//         <div
//           className="modal-overlay"
//           onClick={() =>
//             setSelectedProduct(null)
//           }
//         >
//           <div
//             className="product-modal"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >
//             <button
//               className="close-btn"
//               onClick={() =>
//                 setSelectedProduct(null)
//               }
//             >
//               ✕
//             </button>

//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.title}
//             />

//             <div className="modal-content">

//               <h2>
//                 {selectedProduct.title}
//               </h2>

//               <p>
//                 {selectedProduct.description}
//               </p>

//               <div className="product-features">
//                 <span>✔ Premium Quality</span>
//                 <span>✔ ISO Certified</span>
//                 <span>✔ Fast Delivery</span>
//               </div>

//               <button className="quote-btn">
//                 Get Quote
//               </button>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



"use client";

import { useState } from "react";
import "./products.css";

const products = [
  {
    id: 1,
    title: "Roche 9180 Electrolyte Reagent",
    image:
      "/images/products/roche-9180.webp",
    short:
      "Compatible reagent for Roche 9180 electrolyte analyzers.",
    description:
      "Premium quality electrolyte analyzer reagent compatible with Roche 9180 systems for accurate sodium, potassium and chloride testing in hospitals, pathology labs and diagnostic centers.",
  },

  {
    id: 2,
    title: "ERBA EC 90 Electrolyte Reagent",
    image:
      "/images/products/erba-ec90.webp",
    short:
      "High-performance reagent for ERBA EC 90 analyzers.",
    description:
      "Reliable ERBA EC 90 compatible electrolyte reagent designed for stable analyzer performance and precise electrolyte testing results.",
  },

  {
    id: 3,
    title: "Medica EasyLyte Reagent",
    image:
      "/images/products/medica-easylyte.webp",
    short:
      "Trusted reagent for Medica EasyLyte analyzers.",
    description:
      "High-quality Medica EasyLyte compatible electrolyte reagent delivering consistent and accurate sodium, potassium and chloride measurements.",
  },

  {
    id: 4,
    title: "HDC Lyte Electrolyte Reagent",
    image:
      "/images/products/hdc-lyte.webp",
    short:
      "Premium electrolyte solution for HDC Lyte analyzers.",
    description:
      "Reliable electrolyte analyzer reagent ensuring stable testing performance and accurate diagnostic laboratory results.",
  },

  {
    id: 5,
    title: "Sensacore ST200 Aqua Reagent",
    image:
      "/images/products/sensacore.webp",
    short:
      "Compatible reagent for Sensacore analyzers.",
    description:
      "Premium quality electrolyte reagent designed for Sensacore ST200 Aqua analyzers with high precision and smooth analyzer compatibility.",
  },

  {
    id: 6,
    title: "Biosystem Diestro Electrolyte Reagent",
    image:
      "/images/products/biosystem.webp",
    short:
      "Advanced electrolyte solution for Biosystem analyzers.",
    description:
      "High-quality electrolyte reagent for Biosystem Diestro analyzers delivering reliable performance for healthcare and pathology laboratories.",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] =
    useState(null);

  return (
    <>
      <section className="products-page">

        <div className="container-custom">

          <div className="products-heading">
            <span>Our Products</span>

            <h1>
              Premium Electrolyte
              Analyzer Reagents
              In India
            </h1>

            <p>
              Explore premium electrolyte analyzer
              reagents compatible with Roche 9180,
              ERBA EC 90, Medica EasyLyte,
              HDC Lyte, Sensacore ST200 Aqua,
              Biosystem Diestro and more.
              Trusted by hospitals, pathology
              laboratories and diagnostic centers
              across India.
            </p>
          </div>

          <div className="products-grid-page">

            {products.map((item) => (
              <div
                className="product-card-page"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={`${item.title} Supplier in India`}
                />

                <div className="card-content">

                  <h3>{item.title}</h3>

                  <p>{item.short}</p>

                  <button
                    className="more-btn"
                    onClick={() =>
                      setSelectedProduct(item)
                    }
                  >
                    More Info
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}

      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            className="product-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-btn"
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />

            <div className="modal-content">

              <h2>
                {selectedProduct.title}
              </h2>

              <p>
                {selectedProduct.description}
              </p>

              <div className="product-features">
                <span>✔ Premium Quality</span>
                <span>✔ High Accuracy</span>
                <span>✔ Fast PAN India Delivery</span>
              </div>

              <button className="quote-btn">
                Get Free Quote
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}