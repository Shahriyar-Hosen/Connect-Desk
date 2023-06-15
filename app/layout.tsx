import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Footer, Header } from "@Components/Shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connect Desk",
  description: "Generated by Baitul Hikmah Team",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
