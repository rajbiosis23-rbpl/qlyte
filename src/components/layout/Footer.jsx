import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-top">
          {/* COMPANY */}
          <div className="footer-column">
            <h2 className="footer-logo">Global Biomedical</h2>

            <p className="footer-text">
              Premium laboratory equipment, scientific instruments and
              healthcare solutions trusted by hospitals, laboratories and
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

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="#">Laboratory Equipment</a>

            <a href="#">Installation</a>

            <a href="#">Maintenance</a>

            <a href="#">Technical Support</a>

            <a href="#">Calibration</a>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h3>Contact Info</h3>

            <p>📍 Jaipur, Rajasthan</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ info@centralbio.com</p>
          </div>
        </div>

        {/* NEWSLETTER */}
        {/* <div className="newsletter-box">

          <div>
            <h2>
              Subscribe Our Newsletter
            </h2>

            <p>
              Get latest laboratory
              equipment updates.
            </p>
          </div>

          <div className="newsletter-input">

            <input
              type="email"
              placeholder="Enter email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div> */}

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© 2026 Global Biomedical. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
