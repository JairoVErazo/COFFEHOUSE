import { Inter } from "next/font/google";
import NavBar from "@/Components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffe House - Home",
  description: "Coffe House, Coffe, Café, Cafeteria, Coffe shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
