import { db } from "@/lib/firebase";

import AboutPage
    from "@/app/about/page";

import {
    doc,
    getDoc,
} from "firebase/firestore";

import {
    notFound,
} from "next/navigation";

export async function generateMetadata({
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

        return {
            title:
                "District Not Found",
        };
    }

    const districtData =
        snap.data();

    return {

        title:
            `Electrolyte Analyzer Reagents in ${districtData.district} | Global Biomedical`,

        description:
            `Buy premium electrolyte analyzer reagents in ${districtData.district}, ${districtData.state}. Trusted supplier for hospitals and pathology labs.`,
    };
}

export default async function About({
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

        <AboutPage
            districtData={
                districtData
            }
        />

    );
}