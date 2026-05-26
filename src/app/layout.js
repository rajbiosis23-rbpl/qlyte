import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),

  title: {
    default: "Premium Laboratory Equipment Supplier",
    template: "%s | Laboratory Equipment",
  },

  description:
    "Premium laboratory equipment supplier offering scientific instruments, medical lab equipment, diagnostic systems, and industrial testing solutions.",

  keywords: [
    "Laboratory Equipment",
    "Lab Equipment Supplier",
    "Scientific Instruments",
    "Medical Lab Equipment",
    "Diagnostic Equipment",
    "Research Laboratory Equipment",
  ],

  openGraph: {
    title: "Premium Laboratory Equipment Supplier",
    description:
      "Leading supplier of laboratory equipment and scientific instruments.",
    url: "https://www.yourdomain.com",
    siteName: "Lab Equipments",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}