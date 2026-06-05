export const dynamic = "force-static";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export default async function sitemap() {
  try {
    // Products Fetch
    const productSnap =
      await getDoc(
        doc(
          db,
          "websites",
          "qlyte",
          "pages",
          "products"
        )
      );

    const products =
      productSnap.exists()
        ? productSnap.data()
          .products || []
        : [];

    // Districts Fetch Dynamic
    const districtSnapshot =
      await getDocs(
        collection(
          db,
          "websites",
          "qlyte",
          "districts"
        )
      );

    const districts =
      districtSnapshot.docs.map(
        (doc) => doc.id
      );

    console.log(
      "Total Districts:",
      districts.length
    );

    // Product URLs
    const productUrls =
      products.map((product) => ({
        url: `https://qlyte.com/products/${product.slug}`,
        lastModified:
          new Date(),
        priority: 0.9,
      }));

    // District + Product URLs
    const districtProductUrls =
      districts.flatMap(
        (district) =>
          products.map(
            (product) => ({
              url: `https://qlyte.com/${district}/products/${product.slug}`,
              lastModified:
                new Date(),
              priority: 0.8,
            })
          )
      );

    return [
      {
        url: "https://qlyte.com",
        lastModified:
          new Date(),
        priority: 1,
      },

      ...productUrls,
      ...districtProductUrls,
    ];
  } catch (error) {
    console.error(
      "Sitemap Error:",
      error
    );

    return [
      {
        url: "https://qlyte.com",
        lastModified:
          new Date(),
        priority: 1,
      },
    ];
  }
}