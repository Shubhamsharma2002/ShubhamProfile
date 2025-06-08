import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Shubham Sharma",
  description: "A detailed description of Shubham Sharma's learning and preparation journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
