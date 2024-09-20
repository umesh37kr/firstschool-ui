import { Button } from "@/components/ui/button";
import {
  Baby,
  BabyIcon,
  BookOpenCheck,
  MoveRight,
  School,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="" style={{ background: "#fff8e8" }}>
        <div className="container flex items-center justify-center">
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
        <div className="container py-5 flex items-center justify-center">
          <div>
            <h3 className="italic text-primary font-semibold">Welcome to</h3>
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
          <div className="flex items-center justify-center pl-5 mt-20">
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
        {/* <div className="container "> */}
        <div className="grid grid-cols-4 gap-5">
          <div className="py-10">
            <div className="flex justify-center">
              <BookOpenCheck className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-200 py-2">
              10+
            </h1>
            <p className="text-white text-center">Years of Experience</p>
          </div>
          <div className="py-10">
            <span className="items-center"></span>
            <div className="flex justify-center">
              <Users className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-200 py-2">
              15+
            </h1>
            <p className="text-white text-center">Experts Instructors</p>
          </div>
          <div className="py-10 ">
            <div className="flex justify-center">
              <Baby className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-200 py-2">
              1200+
            </h1>
            <p className="text-white text-center">Students Enrolled</p>
          </div>
          <div className="py-10">
            <div className="flex justify-center">
              <School className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-200 py-2">
              25+
            </h1>
            <p className="text-white text-center">Number of Classes</p>
          </div>
        </div>
        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className=""
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div> */}
        {/* </div> */}
      </section>
      <div className="-mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#0e7490"
            // fill="#0e7400"
            fill-opacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
