import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Steel Root Studios",
  description: "We build vibrant, deeply engaging, and chaotic experiences on Roblox.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* We can import our specific font configurations here if needed */}
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
