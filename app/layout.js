import { mainFont } from "@/lib/font";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased   `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
