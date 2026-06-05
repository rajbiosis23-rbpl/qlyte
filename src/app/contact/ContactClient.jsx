"use client";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./contact.css";
import { Toaster } from "react-hot-toast";
export default function ContactClient({
    districtData,
}) {
    const [contactInfo, setContactInfo] = useState([]);

    const districtName =
        districtData?.district || "India";

    const stateName =
        districtData?.state || "";

    const districtSlug =
        districtData?.slug || "";

    const formattedDistrict =
        districtName
            .split("-")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
            )
            .join(" ");

    const officeAddress =
        districtSlug
            ? stateName
                ? `${formattedDistrict}, ${stateName}, India`
                : `${formattedDistrict}, India`
            : "Jaipur, Rajasthan, India";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phoneRegex =
            /^[6-9]\d{9}$/;

        if (!formData.name.trim()) {
            toast.error("Name is required");
            return;
        }

        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email address");
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            toast.error("Enter a valid 10 digit mobile number");
            return;
        }

        if (formData.message.trim().length < 10) {
            toast.error("Message must be at least 10 characters");
            return;
        }
        try {
            await addDoc(
                collection(
                    db,
                    "websitesQueries",
                    "qlyte",
                    "contactQueries"
                ),
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    message: formData.message,
                    district: districtName,
                    createdAt: serverTimestamp(),
                }
            );

            toast.success("Message sent successfully");

            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });

        } catch (error) {
            console.log(error);
            toast.error("Failed to send message");
        }
    };
    useEffect(() => {
        const loadContact = async () => {
            try {
                const snap = await getDoc(
                    doc(
                        db,
                        "websites",
                        "qlyte",
                        "pages",
                        "contact"
                    )
                );

                if (snap.exists()) {
                    setContactInfo(
                        snap.data().contactInfo || []
                    );
                }
            } catch (err) {
                console.log(err);
            }
        };

        loadContact();
    }, []);

    const getValue = (key) => {
        return (
            contactInfo.find((item) =>
                item.label
                    ?.toLowerCase()
                    .includes(key.toLowerCase())
            )?.value || ""
        );
    };

    return (
        <>
            <Toaster position="top-right" />
            {/* HERO */}
            <section className="contact-hero">
                <div className="container-custom">
                    <span className="contact-tag">
                        Contact Us
                    </span>

                    <h1>
                        Contact Trusted Electrolyte
                        Reagent Supplier In{" "}
                        {districtName}
                    </h1>

                    <p>
                        Need premium electrolyte
                        analyzer reagents for Roche
                        9180, ERBA EC 90, Medica
                        EasyLyte, HDC Lyte,
                        Sensacore or other
                        analyzers? Contact our
                        expert team today for
                        reliable reagent solutions,
                        technical support and fast
                        PAN {districtName} delivery.
                    </p>
                </div>
            </section>

            {/* CONTACT */}
            <section className="contact-section">
                <div className="container-custom contact-grid">
                    <div className="contact-info">
                        <span>Get In Touch</span>

                        <h2>
                            Get Expert Electrolyte
                            Reagent Consultation
                        </h2>

                        <p>
                            We are here to help you
                            with premium electrolyte
                            analyzer reagents, product
                            guidance, compatibility
                            support and trusted
                            reagent supply for
                            hospitals and
                            laboratories.
                        </p>

                        <div className="info-cards">
                            <div className="info-card">
                                📍
                                <div>
                                    <h4>
                                        Office Address
                                    </h4>
                                    <p>
                                        {officeAddress}
                                    </p>
                                </div>
                            </div>

                            <div className="info-card">
                                📞
                                <div>
                                    <h4>Call Us</h4>
                                    <p>
                                        {getValue(
                                            "Phone"
                                        ) ||
                                            "+91 XXXXX XXXXX"}
                                    </p>
                                </div>
                            </div>

                            <div className="info-card">
                                ✉️
                                <div>
                                    <h4>Email Us</h4>
                                    <p>
                                        {getValue(
                                            "Email"
                                        ) ||
                                            "info@qlyte.com"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="contact-form-box">
                        <h3>Send Message</h3>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    setFormData({
                                        ...formData,
                                        phone: value,
                                    });
                                }}
                                placeholder="Phone Number"
                                maxLength={10}
                                required
                            />

                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write Message..."
                                required
                            />
                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* SEO */}
            <section className="seo-contact">
                <div className="container-custom">
                    <h2>
                        Trusted Electrolyte Reagent
                        Supplier In {districtName}
                    </h2>

                    <p>
                        Central Biomedicals is a
                        trusted electrolyte analyzer
                        reagent supplier in{" "}
                        {districtName} providing
                        premium compatible reagents
                        for Roche 9180, ERBA EC 90,
                        Medica EasyLyte, HDC Lyte,
                        Sensacore ST200 Aqua and
                        Biosystem Diestro
                        analyzers.
                    </p>
                </div>
            </section>

            {/* MAP */}
            <section className="map-section">
                <div className="container-custom">
                    <div className="map-wrapper">
                        <div
                            style={{
                                border:
                                    "4px solid #2563eb",
                                borderRadius: "20px",
                                overflow: "hidden",
                            }}
                        >
                            <iframe
                                src={`https://maps.google.com/maps?q=${officeAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                width="100%"
                                height="500"
                                style={{
                                    border: 0,
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}