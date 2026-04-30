import { Button } from "@/components/ui/button";
import { Baby, BookOpenCheck, MoveRight, School, Users } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "First School – Best School in Meral | English Medium Education",
  description:
    "First School is one of the best schools in Meral offering English medium education, experienced teachers, and modern facilities.",
  keywords: [
    "First School Meral",
    "Best school in Meral",
    "English medium school in Meral",
    "School admission Meral",
  ],
  openGraph: {
    title: "First School – Best School in Meral",
    description:
      "Top English medium school in Meral with modern facilities and experienced teachers.",
    url: "https://www.firstschools.in",
    siteName: "First School",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.firstschools.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import HomeClient from "./HomeClient";

export default function Home() {
  return (
    <>
      <section className="" style={{ background: "#fff8e8" }}>
        <div className="container flex flex-col-reverse pb-2 md:flex-row items-center justify-center">
          <div>
            <h1 className="text-6xl text-heading">
              We Prepare Your <br />
              <span className="text-primary">Child</span> For Life
            </h1>
            <p className="text-lg text-paragraph py-6 max-w-lg leading-snug">
              A Place Where Young Hearts Grow, Minds Explore, and Futures Take
              Shape!
            </p>
            <Button className="gap-2 rounded-full">
              Get In Touch <MoveRight />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image src={"/hero1.jpg"} alt="hero" width={600} height={600} />
          </div>
        </div>
      </section>

      {/* About school */}
      <section>
        <div className="container bg-[#fcf9f9] pb-5 flex flex-col md:flex-row items-center justify-center">
          <div>
            <h3 className="italic text-primary font-semibold mt-4 md:mt-2">
              Welcome to
            </h3>
            <h1 className="text-xl font-semibold text-heading">
              First School International, Garhwa
            </h1>
            <p className="leading-relaxed text-paragraph text-justify mt-4">
              At{" "}
              <span className="text-primary">
                First School International, Garhwa
              </span>
              , we are dedicated to creating a nurturing and stimulating
              environment where children can thrive both academically and
              personally. Our school focuses on fostering creativity, curiosity,
              and a love for learning from an early age. With a strong emphasis
              on holistic development, we provide a balanced curriculum that
              integrates core subjects with arts, sports, and hands-on
              activities. Our experienced and passionate educators work closely
              with each child, helping them build confidence, critical thinking
              skills, and strong social connections. At First School
              International, we believe in unlocking every child's potential,
              ensuring they are well-prepared for future academic success and
              personal growth.
            </p>
          </div>
          <div className="flex items-center justify-center pl-5 mt-5 md:mt-20">
            <Image
              src={"/school-building.jpg"}
              alt="school-building"
              height={5000}
              width={5000}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* number banners */}
      <section className="bg-cyan-700">
        <div className="grid grid-cols-2 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
          <div className="py-1 md:py-10">
            <div className="flex justify-center">
              <BookOpenCheck className="text-white h-11 w-11 stroke-white stroke-1" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-200 py-2">
              10+
            </h1>
            <p className="text-white text-center">Years of Experience</p>
          </div>

          <div className="py-1 md:py-10">
            <div className="flex justify-center">
              <Users className="text-white h-11 w-11 stroke-white stroke-1" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-200 py-2">
              30+
            </h1>
            <p className="text-white text-center">Experts Instructors</p>
          </div>

          <div className="py-1 md:py-10">
            <div className="flex justify-center">
              <Baby className="text-white h-11 w-11 stroke-white stroke-1" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-200 py-2">
              2500+
            </h1>
            <p className="text-white text-center">Students Enrolled</p>
          </div>

          <div className="py-1 md:py-10">
            <div className="flex justify-center">
              <School className="text-white h-11 w-11 stroke-white stroke-1" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-200 py-2">
              40+
            </h1>
            <p className="text-white text-center">Number of Classes</p>
          </div>
        </div>
      </section>
      {/* video player */}
      <section className="py-5 bg-[url('/video-bg.jpg')] bg-contain">
        <div className="container flex justify-center">
          <video
            className="rounded-lg"
            width="600"
            autoPlay
            loop
            muted
            controls
          >
            <source src="school_video.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </section>
      <HomeClient />
    </>
  );
}
