// import Link from "next/link";
// import "../products/products.css";

// const products = [
//   {
//     slug: "roche-9180-electrolyte",
//     title:
//       "Roche 9180 Electrolyte Reagent",
//     image:
//       "/images/products/roche-9180.webp",
//   },

//   {
//     slug: "erba-ec-90-electrolyte",
//     title:
//       "ERBA EC 90 Electrolyte Reagent",
//     image:
//       "/images/products/erba-ec90.webp",
//   },

//   {
//     slug:
//       "medica-easylyte-electrolyte",
//     title:
//       "Medica EasyLyte Reagent",
//     image:
//       "/images/products/medica-easylyte.webp",
//   },

//   {
//     slug:
//       "hdc-lyte-electrolyte",
//     title:
//       "HDC Lyte Electrolyte Reagent",
//     image:
//       "/images/products/hdc-lyte.webp",
//   },

//   {
//     slug:
//       "biosystem-diestro-electrolyte",
//     title:
//       "Biosystem Diestro Electrolyte Reagent",
//     image:
//       "/images/products/biosystem.webp",
//   },
// ];

// export async function generateMetadata({
//   params,
// }) {

//   const { district } =
//     await params;

//   const districtName =
//     district.charAt(0).toUpperCase() +
//     district.slice(1);

//   return {
//     title:
//       `Electrolyte Analyzer Reagents in ${districtName} | Global Biomedical`,

//     description:
//       `Buy premium electrolyte analyzer reagents in ${districtName}. Trusted supplier for hospitals, pathology labs and diagnostic centers.`,

//     keywords: [
//       `electrolyte analyzer reagents in ${districtName}`,
//       `${districtName} pathology reagent`,
//       `${districtName} electrolyte supplier`,
//     ],
//   };
// }

// export default async function DistrictPage({
//   params,
// }) {

//   const { district } =
//     await params;

//   const districtName =
//     district.charAt(0).toUpperCase() +
//     district.slice(1);

//   return (
//     <section
//       className="products-page"
//     >
//       <div className="container-custom">

//         <div
//           className="products-heading"
//         >
//           <span>
//             Available in{" "}
//             {districtName}
//           </span>

//           <h1>
//             Premium Electrolyte
//             Analyzer Reagents in{" "}
//             {districtName}
//           </h1>

//           <p>
//             Explore premium
//             electrolyte analyzer
//             reagents trusted by
//             hospitals and
//             pathology labs in{" "}
//             {districtName}.
//           </p>
//         </div>

//         <div
//           className="products-grid-page"
//         >

//           {products.map(
//             (item) => (
//               <div
//                 className="product-card-page"
//                 key={item.slug}
//               >

//                 <img
//                   src={
//                     item.image
//                   }
//                   alt={
//                     item.title
//                   }
//                 />

//                 <div
//                   className="card-content"
//                 >

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <Link
//                     href={`/${district}/products/${item.slug}`}
//                     className="more-btn"
//                   >
//                     More Info
//                   </Link>

//                 </div>
//               </div>
//             )
//           )}

//         </div>

//       </div>
//     </section>
//   );
// }
import Home from "../page";

import { db }
  from "@/lib/firebase";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  notFound,
} from "next/navigation";

export default async function DistrictHome({
  params,
}) {

  const { district } =
    await params;

  const docRef = doc(
    db,
    "websites",
    "qlyte",
    "districts",
    district
  );

  const snap =
    await getDoc(docRef);

  if (!snap.exists()) {

    return notFound();
  }

  const districtData =
    snap.data();

  return (

    <Home
      districtData={
        districtData
      }
    />

  );
}