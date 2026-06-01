"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {

  const params =
    useParams();

  const district =
    params?.district;

  return (

    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">

      <nav className="container-custom flex items-center justify-between py-5">

        {/* <h2 className="text-2xl font-bold text-blue-700">
          Qlyte
        </h2> */}
        <img
          src="/qlyte.png"
          alt="Qlyte logo"
          className="logo"
        />

     <div className="hidden md:flex gap-8">

  {navLinks.map((link) => {

    const href =
      district
        ? link.path === "/"
          ? `/${district}`
          : `/${district}${link.path}`
        : link.path;

    return (
      <Link
        key={link.name}
        href={href}
        className="font-medium hover:text-blue-600 transition"
      >
        {link.name}
      </Link>
    );
  })}

</div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}

          className="bg-blue-700 text-white px-5 py-3 rounded-full"
        >

          Get Quote

        </motion.button>

      </nav>

    </header>
  );
}