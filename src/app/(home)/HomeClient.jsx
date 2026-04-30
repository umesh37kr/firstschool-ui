"use client";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoWarning } from "react-icons/io5";
import { motion } from "framer-motion";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";

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

export default function HomeClient() {
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
    <div>
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
                      <p className="text-gray-600">Dandai Road, Meral</p>
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
                      <p className="text-gray-600">Name: Umesh Kumar </p>
                      <p className="text-gray-600">Mobile: +91-8310259800 </p>
                      <p className="text-gray-600">Mail: umesh37kr@gmail.com</p>
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
                <form id="contactForm" onSubmit={handleSubmit}>
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
                          className="mb-2 w-full rounded-md border text-gray-700 border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="mobile"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="mobile"
                          id="mobile"
                          autoComplete="mobile"
                          placeholder="Your mobile number"
                          className="mb-2 w-full rounded-md border text-gray-700 border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border text-gray-700 border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
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
      {/* warning school does not exist */}
      <section className="py-5 bg-red-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-14 max-w-4xl mx-auto px-4"
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg p-8">
            {/* Heading */}
            <div className="flex items-center gap-2 mb-4 text-red-600">
              {/* Floating Icon */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute top-5 right-5 bg-red-600 text-white p-2 rounded-full shadow-md"
              >
                <IoWarning size={22} />
              </motion.div>
              <HiOutlineInformationCircle size={22} />
              <h3 className="text-lg font-semibold tracking-wide">
                Demo Website Disclaimer
              </h3>
            </div>

            {/* English Text */}
            <p className="text-gray-700 text-sm leading-relaxed">
              This is a demo school website created to showcase design and
              features. The institution shown here does not exist.
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="font-medium text-gray-900 ml-1 bg-amber-500"
              >
                Contact us to build a custom website for your school or
                business.
              </motion.span>
            </p>

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {/* Hindi Text */}
            <p className="text-gray-700 text-sm leading-relaxed">
              यह एक डेमो स्कूल वेबसाइट है जिसे डिज़ाइन और फीचर्स दिखाने के लिए
              बनाया गया है। यहाँ दिखाई गई संस्था वास्तविक नहीं है।
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="font-medium text-gray-900 ml-1 inline-block bg-amber-500"
              >
                अपने स्कूल या व्यवसाय के लिए कस्टम वेबसाइट बनवाने हेतु हमसे
                संपर्क करें।
              </motion.span>
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-full shadow-md transition"
              >
                <FaLaptopCode />
                Build Your Website
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
