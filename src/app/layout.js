import BootstrapClinet from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Toastify from "@/components/libraries/Toastify";
import Footer from "@/components/layout/footer/footer";
import NextNprogress from "@/components/libraries/nextNprogress";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextNprogress>
          <Header />
          {children}
          <Footer />
          <BootstrapClinet />
          <Toastify />
        </NextNprogress>
      </body>
    </html>
  );
}
