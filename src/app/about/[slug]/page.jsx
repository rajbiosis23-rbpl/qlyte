import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}) {

  const { slug } = await params;

  const q = query(
    collection(
      db,
      "websites",
      "qlyte",
      "districts"
    ),
    where("slug", "==", slug)
  );

  const snap = await getDocs(q);

  const district =
    snap.docs[0]?.data();

  if (!district) {
    return {
      title: "District Not Found",
    };
  }

  return {
    title: `Electrolyte Analyzer Reagents in ${district.district} | Global Biomedical`,
    description:
      `Buy premium electrolyte analyzer reagents in ${district.district}, ${district.state}. Trusted supplier for hospitals and pathology labs.`,
  };
}

export default async function AboutDistrict({
  params,
}) {

  const { slug } = await params;

  const q = query(
    collection(
      db,
      "websites",
      "qlyte",
      "districts"
    ),
    where("slug", "==", slug)
  );

  const snap = await getDocs(q);

  const district =
    snap.docs[0]?.data();

  if (!district) {
    return notFound();
  }

  return (
    <section
      style={{
        padding: "80px 0",
      }}
    >
      <div className="container-custom">

        <h1>
          Electrolyte Analyzer
          Reagents in{" "}
          {district.district}
        </h1>

        <p>
          Looking for premium
          electrolyte analyzer
          reagents in{" "}
          {district.district},
          {district.state}?
          Global Biomedical supplies
          trusted laboratory
          reagents for hospitals,
          pathology labs and
          diagnostic centers.
        </p>

      </div>
    </section>
  );
}