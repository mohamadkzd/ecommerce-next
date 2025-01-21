import BootstrapClinet from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Toastify from "@/components/libraries/Toastify";
import Footer from "@/components/layout/footer/footer";
import NextNprogress from "@/components/libraries/nextNprogress";
import { AuthProvider } from "@/context/authContext";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>
          <NextNprogress>
            <Header />
            {children}
            <Footer />
            <BootstrapClinet />
            <Toastify />
          </NextNprogress>
        </AuthProvider>
      </body>
    </html>
  );
}
