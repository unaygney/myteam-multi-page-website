import { mainFont } from "@/lib/font";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased  `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
