import BootstrapClinet from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Toastify from "@/components/libraries/Toastify";
import Footer from "@/components/layout/footer/footer";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapClinet />
        <Toastify />
      </body>
    </html>
  );
}
