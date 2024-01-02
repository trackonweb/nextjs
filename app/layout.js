import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import MainHeader from "@/components/common/MainHeader";
import MainFooter from "@/components/common/MainFooter";
import Chat from "@/components/common/Chat";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "IT Solutions and Services for Your Business - Trackonweb",
  description:
    "Explore software development, web design, mobile app development, and more. Trust us for innovative IT solutions tailored to your needs.",
  keywords:
    "web development, graphic designing, digital marketing, full stack development, UI/UX design, mobile app development, software development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className={`${roboto.variable}`}>
        <MainHeader />
        {children}
        <Chat />
        <MainFooter />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
