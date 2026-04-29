import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
  title: "About First School | Best School in Meral, Jharkhand",
  description:
    "Learn about First School Meral, our mission, vision, and leadership under Principal Shivani Gupta. One of the leading schools in Meral, Jharkhand.",
  keywords: [
    "First School Meral",
    "Best school in Meral Jharkhand",
    "School in Garhwa district",
    "First School principal Shivani Gupta",
    "Top school in Meral",
  ],
  alternates: {
    canonical: "https://www.firstschools.in/about",
  },
  openGraph: {
    title: "About First School Meral",
    description:
      "Discover First School Meral, our mission, vision, and commitment to quality education.",
    url: "https://www.firstschools.in/about",
    siteName: "First School",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const About = () => {
  return (
    <section className="container bg-[#fcf9f9] py-6 min-h-screen">
      {/* MAIN TITLE (IMPORTANT FOR SEO) */}
      <h1 className="text-cyan-800 text-center text-3xl font-bold">
        About First School, Meral
      </h1>

      {/* INTRO (SEO BOOST) */}
      <p className="text-center mt-3 text-gray-700 max-w-3xl mx-auto">
        First School is one of the leading schools in Meral, Jharkhand,
        dedicated to providing quality education and overall student
        development.
      </p>

      {/* PRINCIPAL SECTION */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center text-cyan-700">
          Message from the Principal
        </h2>

        <h3 className="my-4 font-bold text-xl w-full p-2 text-white bg-orange-500 text-center">
          Shivani Gupta
        </h3>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Image
            src="/principal.jpg"
            alt="Principal Shivani Gupta First School Meral"
            height={350}
            width={350}
            priority
            className="rounded-lg"
          />

          <div>
            <p className="text-heading font-semibold mb-3">
              “Learning gives creativity, creativity leads to thinking, thinking
              provides knowledge, knowledge makes you great.”
            </p>

            <p className="text-justify text-heading">
              प्रिय अभिभावकों और छात्रों,
              <br />
              हमारे विद्यालय में आपका स्वागत है! शिक्षा का उद्देश्य केवल ज्ञान
              अर्जित करना नहीं, बल्कि छात्रों के सर्वांगीण विकास को सुनिश्चित
              करना है। हम शैक्षणिक उत्कृष्टता के साथ-साथ नैतिक, मानसिक और
              शारीरिक विकास पर भी ध्यान देते हैं।
              <br />
              <br />
              हमारा लक्ष्य है कि हर छात्र आत्मनिर्भर, जिम्मेदार और समाज के प्रति
              संवेदनशील नागरिक बने। हम एक सुरक्षित और प्रेरणादायक वातावरण प्रदान
              करने के लिए प्रतिबद्ध हैं।
              <br />
              <br />
              धन्यवाद!
            </p>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="mt-12">
        <h2 className="bg-cyan-700 text-2xl font-semibold text-white p-3">
          Our Mission
        </h2>

        <p className="text-heading text-justify mt-4">
          हमारा मिशन प्रत्येक विद्यार्थी को समग्र शिक्षा प्रदान करना है, जो उनके
          बौद्धिक, नैतिक और सामाजिक विकास को बढ़ावा दे। हम छात्रों में
          आत्मविश्वास, सृजनात्मकता और नेतृत्व क्षमता विकसित करने के लिए
          प्रतिबद्ध हैं, ताकि वे भविष्य की चुनौतियों का सामना कर सकें।
        </p>
      </div>

      {/* VISION */}
      <div className="mt-10">
        <h2 className="bg-cyan-700 text-2xl font-semibold text-white p-3">
          Our Vision
        </h2>

        <p className="text-heading text-justify mt-4">
          हमारी दृष्टि एक ऐसे शिक्षण संस्थान का निर्माण करना है जहाँ प्रत्येक
          छात्र अपनी प्रतिभा को विकसित कर सके। हम छात्रों को जीवन कौशल, नैतिक
          मूल्यों और जिम्मेदार नागरिकता के लिए तैयार करते हैं।
        </p>
      </div>

      {/* INTERNAL LINKS (SEO BOOST) */}
      <div className="mt-12 text-center">
        <p className="text-gray-700">
          Want to know more?{" "}
          <Link href="/contact" className="text-blue-600 underline">
            Contact Us
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
