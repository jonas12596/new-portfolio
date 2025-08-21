import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: [
    "400",
    "700"
  ],
  display: "swap",
});

export const metadata = {
  title: "Jonas | Frontend Developer & Content Manager",
  description: "This is my personal portfolio as a frontend developer and content manager.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} antialiased`} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
