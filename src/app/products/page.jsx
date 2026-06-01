"use client";

import "./products.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
export default function Products({
  districtData,
}) {
  const [products, setProducts] = useState([]);
  const district =
    districtData?.slug;
  const location =
    districtData?.district;
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const snap = await getDoc(
          doc(
            db,
            "websites",
            "qlyte",
            "pages",
            "products"
          )
        );

        if (snap.exists()) {

          const allProducts =
            snap.data().products || [];

          const publishedProducts =
            allProducts.filter(
              (item) => item.isPublished
            );

          setProducts(publishedProducts);

        }

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);
  return (
    <>
      <section className="products-page">
        <div className="container-custom">
          <div className="products-heading">
            <span>Our Products</span>

            <h1>Premium Electrolyte Analyzer Reagents In {location}</h1>

            <p>
              Explore premium electrolyte analyzer reagents compatible with
              Roche 9180, ERBA EC 90, Medica EasyLyte, HDC Lyte, Sensacore ST200
              Aqua, Biosystem Diestro and more. Trusted by hospitals, pathology
              laboratories and diagnostic centers across {location}.
            </p>
          </div>

          <div className="products-grid-page">
            {products.map((item) => (
              <div className="product-card-page" key={item.id}>
                <img src={item.image} alt={`${item.title} Supplier in ${districtData?.district || "{location}"
                  }`} />

                <div className="card-content">
                  <h3>Product: {item.title}</h3>
                  <h3> Brand: {item.brand}</h3>
                  <p>
                    {item.desc || item.short}
                  </p>
                  {/* <Link href={`/products/${item.slug}`} className="more-btn"> */}
                  <Link
                    href={
                      district
                        ? `/${district}/products/${item.slug}`
                        : `/products/${item.slug}`
                    }

                    className="more-btn"
                  >
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
