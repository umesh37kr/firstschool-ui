import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const gallery = [
  {
    id: 1,
    name: "image 1",
    image: "/images1.jpg",
  },
  {
    id: 2,
    name: "image 2",
    image: "/images2.jpg",
  },
  {
    id: 3,
    name: "image 3",
    image: "/images3.jpg",
  },
  {
    id: 4,
    name: "image 4",
    image: "/images4.jpg",
  },
  {
    id: 5,
    name: "image 5",
    image: "/images8.jpg",
  },
  {
    id: 6,
    name: "image 6",
    image: "/images6.jpg",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl bg-slate-800 py-10 px-4 sm:px-6 text-heading sm:flex justify-between mx-auto">
          <div className=" sm:w-4/12">
            <div className="flex justify-start items-center">
              <Image src="/logo.png" alt="logo" height={100} width={100} />
              <h3 className="font-bold text-lg text-slate-200 mb-4">
                First School, Garhwa
              </h3>
            </div>

            <p className="text-gray-400 text-base text-justify mb-5">
              First School is dedicated to nurturing young minds, fostering
              holistic development, and empowering students to achieve academic
              excellence and personal growth in a supportive and inclusive
              environment.
            </p>
            <div className="flex-row flex gap-5">
              <Link
                target="_blank"
                href="https://www.youtube.com/"
                className="w-6 mx-1"
              >
                <div className="flex justify-center">
                  <FaYoutube className="text-white h-11 w-11  stroke-white stroke-center" />
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/"
                className="w-6 mx-1"
              >
                <div className="flex justify-center">
                  <FaInstagram className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/"
                className="w-6 mx-1"
              >
                <div className="flex justify-center">
                  <FaFacebook className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
                </div>
              </Link>
              <Link target="_blank" href="https://x.com/" className="w-6 mx-1">
                <div className="flex justify-center">
                  <FaXTwitter className="text-white h-11 w-11  stroke-white stroke-1 stroke-center" />
                </div>
              </Link>
            </div>
          </div>
          {/* quick links */}
          <div className="p-5 sm:w-5/12 flex flex-col md:items-center">
            <div className=" text-slate-200 font-bold mb-5">Quick Links</div>
            <ul className="text-gray-400 text-sm tracking-wide leading-6">
              <li>
                <Link className="hover:text-white" href="/gallery">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/admission">
                  Admission
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/noticeboard">
                  Notice Board
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-slate-200 font-bold mb-5">Our Galleries</div>
            <ul className="grid grid-cols-3 gap-2">
              {gallery.map((item) => (
                <li key={item.id}>
                  <Link href="/gallery">
                    <Image
                      src={`/gallery${item.image}`}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto bg-slate-800 text-gray-200 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
