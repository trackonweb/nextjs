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

        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Organization","name":"Trackonweb","url":"https://trackonweb.com","logo":"https://trackonweb.com/_next/image?url=%2Flogo.png&w=128&q=75","contactPoint":{"@type":"ContactPoint","telephone":"+91 8233330466","contactType":"customer service","areaServed":"IN","availableLanguage":"en"},"sameAs":["https://www.facebook.com/trackonweb","https://twitter.com/trackonweb","https://www.instagram.com/trackonweb","https://www.youtube.com/@Trackonweb","https://www.linkedin.com/company/trackonweb","https://in.pinterest.com/trackonwebit/","https://trackonweb.com/"]}`}</script>

        <script type="application/ld+json">{`{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"IT Solutions and Services for Your Business - Trackonweb","item":"https://trackonweb.com/"},{"@type":"ListItem","position":2,"name":"Explore Courses","item":"https://trackonweb.com/explore-courses"},{"@type":"ListItem","position":3,"name":"Explore Services","item":"https://trackonweb.com/explore-services"},{"@type":"ListItem","position":4,"name":"Blog","item":"https://trackonweb.com/blog"},{"@type":"ListItem","position":5,"name":"Contact Us","item":"https://trackonweb.com/contact"},{"@type":"ListItem","position":6,"name":"About Us","item":"https://trackonweb.com/about"}]}`}</script>

        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What services does Trackonweb IT Solutions offer?","acceptedAnswer":{"@type":"Answer","text":"Trackonweb IT Solutions provides a wide range of services including web development, mobile app development, digital marketing, cloud solutions, and IT consulting."}},{"@type":"Question","name":"How can I request a quote for my project?","acceptedAnswer":{"@type":"Answer","text":"To get a quote for your project, you can fill out the contact form on our website, and our team will get in touch with you to discuss your requirements or you can contact us at +91 8233330466"}},{"@type":"Question","name":"How can I enroll in the course?","acceptedAnswer":{"@type":"Answer","text":"• Visit our courses page https://trackonweb.com/explore_courses
• Select your course
• Fill Book a free demo form"}},{"@type":"Question","name":"How can I contact Trackonweb?","acceptedAnswer":{"@type":"Answer","text":"For contact, you can visit our Contact Us page or reach us through our email at trackonwebIT@gmail.com and by phone at +91 8233330466"}}]}`}</script>
        <script type="application/ld+json">{`{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Courses","item":"https://trackonweb.com/explore-courses"},{"@type":"ListItem","position":2,"name":"Web Development Course","item":"https://trackonweb.com/explore-courses/web-development"},{"@type":"ListItem","position":3,"name":"Graphic Designing Course","item":"https://trackonweb.com/explore-courses/graphic-design"},{"@type":"ListItem","position":4,"name":"Web Designing Course","item":"https://trackonweb.com/explore-courses/web-design"},{"@type":"ListItem","position":5,"name":"Digital Marketing Course","item":"https://trackonweb.com/explore-courses/digital-marketing"},{"@type":"ListItem","position":6,"name":"Application development Course","item":"https://trackonweb.com/explore-courses/mobile-app-development"},{"@type":"ListItem","position":7,"name":"UI UX Designer Course","item":"https://trackonweb.com/explore-courses/ui-ux"}]}`}</script>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which course is best for career development?","acceptedAnswer":{"@type":"Answer","text":"Fill out our contact form to get free career counseling, our courses cater to various career paths. Explore the \"Mastery in Web Development 2024,\" \"The Ultimate 2024 Graphic Design,\" \"Flutter Revolution: Mobile App Development,\" \"Excellence in Digital Marketing,\" \"Become a Senior UI/UX Designer,\" and \"Responsive Web Design Expert\" for options that align with your career goals."}},{"@type":"Question","name":"What are the course benefits?","acceptedAnswer":{"@type":"Answer","text":"Enrolling in Trackonweb courses offers numerous benefits, including hands-on skill development, expert guidance, real-world project experience, and personalized support. Additionally, our commitment to industry exposure and lifetime access ensures a transformative and comprehensive learning experience."}},{"@type":"Question","name":"Will I get a job if I enroll in the Trackonweb course?","acceptedAnswer":{"@type":"Answer","text":"Trackonweb has a solid track record of 100% placement. While job placement is subject to individual effort and market conditions, our courses are designed to equip you with the skills and knowledge sought after by employers, enhancing your chances of securing a job in your chosen field."}},{"@type":"Question","name":"How much time does it take to receive the certificate?","acceptedAnswer":{"@type":"Answer","text":"Once you complete the course, you will receive the certificate within 1-2 days."}}]}`}</script>
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": "1",
      "item": {
        "@type": "Course",
        "url": "https://trackonweb.com/explore-courses/web-development",
        "name": "Mastery in Web Development 2024",
        "description": "Boost up your career by gaining skills in HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, Redux, MongoDB, Mongoose, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Trackonweb",
          "sameAs": "https://trackonweb.com/explore-courses"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "2",
      "item": {
        "@type": "Course",
        "url": "https://trackonweb.com/explore-courses/graphic-design",
        "name": "The Ultimate 2024 Graphic Design",
        "description": "Specialize in crafting logos to mastering design skills with Adobe Photoshop, Illustrator, Coral Draw, Lightroom, Canva, Sketch, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Trackonweb",
          "sameAs": "https://trackonweb.com/explore-courses"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "3",
      "item": {
        "@type": "Course",
        "url": "https://trackonweb.com/explore-courses/mobile-app-development",
        "name": "Flutter Revolution: Mobile App Development",
        "description": "Learn, Code, and Innovate the techniques to create cross-platform mobile apps for Android and iOS, start your journey now",
        "provider": {
          "@type": "Organization",
          "name": "Trackonweb",
          "sameAs": "https://trackonweb.com/explore-courses"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "4",
      "item": {
        "@type": "Course",
        "url": "https://trackonweb.com/explore-courses/digital-marketing",
        "name": "Excellence in Digital Marketing",
        "description": "Become an expert in Digital Marketing with the latest tools in 2024. Gain knowledge of SEO, SMM, SEM, Affiliate Mkt., WordPress, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Trackonweb",
          "sameAs": "https://trackonweb.com/explore-courses"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "5",
      "item": {
        "@type": "Course",
        "url": "https://trackonweb.com/explore-courses/ui-ux",
        "name": "Become a Senior UI/UX Designer",
        "description": "Get ready to start with Figma, Canva, Sketch, Illustrator, HTML, CSS, Web Design, and AI tools to become a certified Senior UI UX Designer",
        "provider": {
          "@type": "Organization",
          "name": "Trackonweb",
          "sameAs": "https://trackonweb.com/explore-courses"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": "6",
      "item": {
        "@type": "Course",
        "url": "https://trackonweb.com/explore-courses/web-design",
        "name": "Responsive Web Design Expert",
        "description": "Start your journey by creating the most fascinating Responsive web design by using HTML5, CSS, Tailwind CSS, SCSS, and Bootstrap",
        "provider": {
          "@type": "Organization",
          "name": "Trackonweb",
          "sameAs": "https://trackonweb.com/explore-courses"
        }
      }
    }
  ]
}`}</script>
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
