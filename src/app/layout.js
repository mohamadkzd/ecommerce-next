import BootstrapClinet from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/header/header";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header/>
        {children}
        <BootstrapClinet/>
      </body>
    </html>
  );
}
