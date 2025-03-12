import { Righteous, Lora } from "next/font/google";
import "@/styles/globals.css";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Coco Mountain Resort - Luxury, Tranquility, and Adventure Await",
  description:
    "Escape to Coco Mountain Resort, where luxury meets nature. Discover stunning accommodations, world-class dining, tailored event spaces, and unparalleled relaxation. Book your mountain getaway today!",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Add any additional head elements here */}</head>
      <body
        className={`${lora.className} ${righteous.className} antialiased transition-colors duration-300`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
