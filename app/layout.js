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
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Trackonweb IT Courses and Services",
              "url": "https://trackonweb.com/",
              "logo": "https://trackonweb.com/_next/image?url=%2Flogo.png&w=128&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 8233330466",
                "contactType": "customer service",
                "areaServed": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/company/trackonweb/",
                "https://www.instagram.com/trackonweb/",
                "https://www.facebook.com/trackonweb/",
                "https://www.youtube.com/@Trackonweb"
              ]
            }
          `}
        </script>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "IT Solutions and Services for Your Business - Trackonweb",
                  "item": "https://trackonweb.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Courses",
                  "item": "https://trackonweb.com/explore-courses"
                },
                {
                  "@type": "ListItem", 
                  "position": 3, 
                  "name": "Services",
                  "item": "https://trackonweb.com/explore-services"  
                },{
                  "@type": "ListItem", 
                  "position": 4, 
                  "name": "Blog",
                  "item": "https://trackonweb.com/blog"  
                },{
                  "@type": "ListItem", 
                  "position": 5, 
                  "name": "Contact Us",
                  "item": "https://trackonweb.com/contact"  
                },{
                  "@type": "ListItem", 
                  "position": 6, 
                  "name": "About Us",
                  "item": "https://trackonweb.com/about"  
                }
              
              ]
            }
          `}
        </script>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                "@type": "Question",
                "name": "What services does Trackonweb IT Solutions offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trackonweb IT Solutions provides a wide range of services including web development, mobile app development, digital marketing, cloud solutions, and IT consulting."
                }
              },{
                "@type": "Question",
                "name": "How can I request a quote for my project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To get a quote for your project, you can fill out the contact form on our website, and our team will get in touch with you to discuss your requirements or you can contact us at +91 8233330466"
                }
              },{
                "@type": "Question",
                "name": "How can I enroll in the course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "• Visit our courses page https://trackonweb.com/explore_courses
            • Select your course
            • Fill Book a free demo form"
                }
              },{
                "@type": "Question",
                "name": "How can I contact Trackonweb?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For contact, you can visit our Contact Us page or reach us through our email at trackonwebIT@gmail.com and by phone at +91 8233330466"
                }
         
     
            
              ]
            }
          `}
        </script>
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
