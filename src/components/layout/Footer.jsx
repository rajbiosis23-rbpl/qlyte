"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import "./footer.css";

export default function Footer() {

  const params =
    useParams();

  const district =
    params?.district;

  const getLink = (path) => {

    return district
      ? `/${district}${path}`
      : path;
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

              Premium laboratory
              equipment,
              scientific instruments
              and healthcare
              solutions trusted by
              hospitals,
              laboratories and
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

            <h3>
              Quick Links
            </h3>

            <Link
              href={getLink("/")}
            >
              Home
            </Link>

            <Link
              href={getLink("/about")}
            >
              About
            </Link>

            <Link
              href={getLink("/products")}
            >
              Products
            </Link>

            <Link
              href={getLink("/services")}
            >
              Services
            </Link>

            <Link
              href={getLink("/contact")}
            >
              Contact
            </Link>

          </div>

          {/* SERVICES */}

          <div className="footer-column">

            <h3>
              Our Services
            </h3>

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

            <h3>
              Contact Info
            </h3>

            <p>
              📍 Jaipur,
              Rajasthan
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              ✉️ info@centralbio.com
            </p>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="footer-bottom">

          <p>
            © 2026 Qlyte.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
} 