export default async function getContactMetadata(
    params
) {
    const district = params?.district || "";

    const location = district
        ? district.replace(/-/g, " ")
        : "India";

    const url = district
        ? `https://qlyte.com/${district}/contact`
        : `https://qlyte.com/contact`;

    return {
        title: `Electrolyte Reagent Supplier Contact in ${location} | Qlyte`,

        description: `Contact trusted electrolyte reagent supplier in ${location}. Get premium Roche 9180, ERBA EC 90, Medica EasyLyte and compatible electrolyte analyzer reagents.`,

        keywords: [
            `electrolyte supplier in ${location}`,
            `electrolyte reagent in ${location}`,
            `electrolyte analyzer reagent ${location}`,
        ],

        alternates: {
            canonical: url,
        },

        openGraph: {
            title: `Electrolyte Supplier in ${location}`,
            description: `Trusted electrolyte reagent supplier in ${location}.`,
            url,
            siteName: "Qlyte",
            locale: "en_IN",
            type: "website",
        },
    };
}