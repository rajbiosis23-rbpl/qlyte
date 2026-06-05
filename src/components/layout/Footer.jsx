"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

import "./footer.css";

export default function Footer({
  districtData,
}) {
  const [contactInfo, setContactInfo] =
    useState([]);

  const [stateName, setStateName] =
    useState("");

  const params = useParams();

  const district =
    params?.district || "";

  const getLink = (path) => {
    return district
      ? `/${district}${path}`
      : path;
  };

  const districtName =
    district || "India";

  const districtSlug =
    district || "";

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

  useEffect(() => {
    const loadData = async () => {
      try {
        // Contact Info
        const contactSnap = await getDoc(
          doc(
            db,
            "websites",
            "qlyte",
            "pages",
            "contact"
          )
        );

        if (contactSnap.exists()) {
          setContactInfo(
            contactSnap.data()
              .contactInfo || []
          );
        }

        // District State
        if (district) {
          const districtSnap =
            await getDoc(
              doc(
                db,
                "websites",
                "qlyte",
                "districts",
                district
              )
            );

          if (
            districtSnap.exists()
          ) {
            setStateName(
              districtSnap.data()
                ?.state || ""
            );
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, [district]);

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
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-top">
          {/* COMPANY */}
          <div className="footer-column">
            <h2 className="footer-logo">
              Qlyte
            </h2>

            <p className="footer-text">
              Premium laboratory equipment,
              scientific instruments and
              healthcare solutions trusted by
              hospitals, laboratories and
              research centers.
            </p>

            <div className="social-icons">
              <span>📘</span>
              <span>📸</span>
              <span>💼</span>
              <span>▶️</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link href={getLink("/")}>
              Home
            </Link>

            <Link href={getLink("/about")}>
              About
            </Link>

            <Link href={getLink("/products")}>
              Products
            </Link>

            <Link href={getLink("/services")}>
              Services
            </Link>

            <Link href={getLink("/contact")}>
              Contact
            </Link>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="#">
              Laboratory Equipment
            </a>

            <a href="#">
              Installation
            </a>

            <a href="#">
              Maintenance
            </a>

            <a href="#">
              Technical Support
            </a>

            <a href="#">
              Calibration
            </a>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h3>Contact Info</h3>

            <p>
              📍{officeAddress}
            </p>

            <p>
              📞{" "}
              {getValue("phone") ||
                "+91 XXXXX XXXXX"}
            </p>

            <p>
              ✉️{" "}
              {getValue("email") ||
                "info@qlyte.com"}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Qlyte. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}