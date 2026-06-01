import { db } from "@/lib/firebase";

import Services
    from "@/app/services/page";

import {
    doc,
    getDoc,
} from "firebase/firestore";

import {
    notFound,
} from "next/navigation";

export default async function DistrictServices({
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

    const data =
        snap.data();

    const districtData = {

        district:
            data.district,

        slug:
            data.slug,

        state:
            data.state,
    };

    return (

        <Services
            districtData={
                districtData
            }
        />

    );
}