// import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import MainHeader from "@/components/common/MainHeader";
import MainFooter from "@/components/common/MainFooter";
import Chat from "@/components/common/Chat";

// const roboto = Roboto({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });

export const metadata = {
  title: "IT Solutions and Services for Your Business - Trackonweb",
  description:
    "Transform your online presence with Trackonweb: Web Development, Graphic Design, Digital Marketing, Mobile App Development, UI/UX. Experience quality service, on-time delivery, and 24/7 support.",
  keywords:
    "IT solutions, web development, graphic design, digital marketing, mobile app development, UI/UX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="keywords" content={metadata.keywords} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KWC6DV5B');
            `,
          }}
        />
      </head>
      <body className="font-roboto">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWC6DV5B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MainHeader />
        {children}
        <Chat />
        <MainFooter />
        <ToastContainer
          position="bottom-center"
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
