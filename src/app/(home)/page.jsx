"use client";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Baby, BookOpenCheck, MoveRight, School, Users } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    description: "The school has a fantastic curriculum and amazing staff!",
    avatar: "/profile_pic_19.avif",
    name: "Pawan Kumar",
  },
  {
    id: 2,
    description:
      "My child loves going to school every day. Highly recommended!",
    avatar: "/profile_pic_13.avif",
    name: "Jane Smith",
  },
  {
    id: 3,
    description: "Great focus on academics and extracurricular activities.",
    avatar: "/profile_pic_10.avif",
    name: "Neha Sharma",
  },
  {
    id: 4,
    description:
      "We’ve seen incredible growth in our child’s confidence and skills.",
    avatar: "/profile_pic_20.avif",
    name: "Anjali Mishra",
  },
  {
    id: 5,
    name: "Sujeet Sah",
    avatar: "/profile_pic_18.avif",
    description: `"हमने इस स्कूल को चुनकर सही निर्णय लिया है। यहाँ न केवल
                      पढ़ाई पर ध्यान दिया जाता है बल्कि बच्चों के व्यक्तिगत
                      विकास पर भी बहुत ध्यान दिया जाता है। शिक्षकों की मेहनत और
                      प्रतिबद्धता अद्भुत है।"`,
  },
  {
    id: 6,
    name: "- Payal",
    avatar: "/profile_pic_16.avif",
    description: `"इस स्कूल में आने के बाद मेरे बच्चे में आत्मविश्वास और अनुशासन में
              बहुत सुधार हुआ है। यहाँ की सुविधाएँ और वातावरण बच्चों के सर्वांगीण
              विकास के लिए बहुत उपयुक्त हैं।"`,
  },
];
export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsSubmitting(true);
    try {
      console.log(formData);
      const response = await fetch("http://localhost:4000/api/contact/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          className: "bg-green-300",
          description: "Your message has been sent.",
        });
        setFormData({
          name: "",
          mobile: "",
          message: "",
        });
      } else {
        toast({
          variant: "destructive",
          description: "something went wrong. Try again..",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        description: "something went wrong. Try again..",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
      {/* parent Testimonials */}
      <section className="bg-heroBg py-5">
        <div>
          <h2 className="text-2xl text-heading font-bold text-center py-5">
            Here's what Parents say
          </h2>
        </div>
        <div className="py-10">
          <div className="mx-auto max-w-7xl px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 1 }, // 1 card for smaller screens
                1024: { slidesPerView: 3 }, // 3 cards for larger screens
              }}
              className="w-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                    <div className="flex flex-col items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        width={80}
                        height={80}
                        className="rounded-full object-cover aspect-square mb-4"
                      />
                      <p className="leading-relaxed text-paragraph text-justify mb-4">
                        {testimonial.description}
                      </p>
                      <h4 className="text-lg text-heading font-bold">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* slider swiper js */}

      {/* contact us */}
      <section id="contact">
        <div className="mx-auto bg-[#fcf9f9] max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="mobile"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="mobile"
                          id="mobile"
                          autocomplete="mobile"
                          placeholder="Your mobile number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        value={formData.message}
                        onChange={handleChange}
                        required
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
