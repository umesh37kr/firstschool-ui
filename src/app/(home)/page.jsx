"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Baby,
  BabyIcon,
  BookOpenCheck,
  MoveRight,
  School,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 2,
    name: "- पवन कुमार",
    avatar: "https://github.com/shadcn.png",
    fallback: "PK",
    description: `"हमने इस स्कूल को चुनकर सही निर्णय लिया है। यहाँ न केवल
                      पढ़ाई पर ध्यान दिया जाता है बल्कि बच्चों के व्यक्तिगत
                      विकास पर भी बहुत ध्यान दिया जाता है। शिक्षकों की मेहनत और
                      प्रतिबद्धता अद्भुत है।"`,
  },
  {
    id: 3,
    name: "- अभिषेक मौर्य",
    avatar: "https://github.com/shadcn.png",
    fallback: "AM",
    description: `"इस स्कूल में आने के बाद मेरे बच्चे में आत्मविश्वास और अनुशासन में
              बहुत सुधार हुआ है। यहाँ की सुविधाएँ और वातावरण बच्चों के सर्वांगीण
              विकास के लिए बहुत उपयुक्त हैं।"`,
  },
  {
    id: 4,
    name: "- अंजलि शर्मा",
    avatar: "https://github.com/shadcn.png",
    fallback: "AS",
    description: `"स्कूल का शिक्षण स्तर और यहाँ के शिक्षकों की मेहनत काबिल-ए-तारीफ
              है। मेरा बच्चा यहाँ न केवल पढ़ाई में बेहतर कर रहा है, बल्कि अन्य
              गतिविधियों में भी रुचि लेने लगा है। यह देख कर मैं बहुत खुश हूँ।"`,
  },
  {
    id: 5,
    name: "- Sujit Sah",
    avatar: "",
    fallback: "SS",
    description: `"The school feels like an extended family. The open communication with teachers and the involvement in our child's learning journey make us feel secure and happy about our decision to enroll here. Highly recommended!"`,
  },
  {
    id: 6,
    name: "- Ranjeet Kumar",
    avatar: "",
    fallback: "RK",
    description: `"The engaging curriculum and caring environment have made a world of difference for our child. We are amazed by the progress she has made in academics and character development. Kudos to the entire team!"`,
  },
  {
    id: 7,
    name: "- Suman",
    avatar: "https://github.com/shadcn.png",
    fallback: "S",
    description: `"We are thrilled with the quality of education our child is receiving! The teachers are so nurturing, and the school truly fosters a love for learning. We couldn't have chosen a better place for our child to grow academically and socially."`,
  },
];
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
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
      </section>
      {/* video player */}
      <section className="py-5 bg-[url('/video-bg.jpg')] bg-contain">
        <div className="flex justify-center">
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
      {/* parent Testimonials */}
      <section className="bg-heroBg py-5">
        <div>
          <h2 className="text-2xl text-heading font-bold text-center py-5">
            Here's what Parents said
          </h2>
        </div>
        <div className="mx-auto max-w-xs">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[plugin.current]}
            className="w-[950px] -ml-[300px] p-5"
          >
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="m-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="">
                    <Card className="min-h-80">
                      <CardContent className="flex items-center justify-center py-6">
                        <span className="leading-relaxed text-paragraph text-justify">
                          {item.description}
                        </span>
                      </CardContent>
                      <CardFooter className="flex justify-start">
                        <Avatar>
                          <AvatarImage src={item.avatar} />
                          <AvatarFallback>{item.fallback}</AvatarFallback>
                        </Avatar>
                        <p className=" ml-1">{item.name}</p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* contact us */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-heading">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-heading text-2xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-md text-primary">
                Do you have anything to ask? Just let me know
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-5 text-md leading-relaxed text-paragraph text-justify">
                  "We value open communication and are here to assist with any
                  questions or concerns you may have. Whether you are a parent
                  inquiring about admissions, a student seeking information, or
                  a community member interested in our programs, we invite you
                  to get in touch with us. Feel free to fill out the form below,
                  give us a call, or visit us at the school during office hours.
                  We look forward to connecting with you!"
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Our Address
                      </h3>
                      <p className="text-gray-600">
                        1230 Maecenas Street Donec Road
                      </p>
                      <p className="text-gray-600">Garhwa, Jharkhand</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Contact
                      </h3>
                      <p className="text-gray-600">Mobile: +91-8569740025 </p>
                      <p className="text-gray-600">
                        Mail: firstschool@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Working hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 08:00 - 17:00
                      </p>
                      <p className="text-gray-600">Sunday: Holiday</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-heading">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
