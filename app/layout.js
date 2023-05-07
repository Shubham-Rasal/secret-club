import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute w-screen bg-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
