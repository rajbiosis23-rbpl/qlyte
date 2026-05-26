"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="container-custom flex items-center justify-between py-5">
        <h2 className="text-2xl font-bold text-blue-700">
          Global Biomedical
        </h2>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="font-medium hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-700 text-white px-5 py-3 rounded-full"
        >
          Get Quote
        </motion.button>
      </nav>
    </header>
  );
}