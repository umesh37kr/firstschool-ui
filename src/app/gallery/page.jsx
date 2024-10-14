"use client";
import Image from "next/image";
import React, { useState } from "react";
import { gallery } from "@/app/db/gallery.json";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleX,
} from "lucide-react";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  console.log("galary::", gallery);
  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {gallery.map((img, index) => (
          <a
            href=""
            key={`${index}`}
            className="w-1/5 cursor-pointer hover:scale-110 transition-all ease-linear"
          >
            <Image
              src={`/gallery/${img.name}`}
              width={300}
              height={250}
              alt={`${img.name}`}
              // className="w-full h-64 object-cover"
            />
          </a>
        ))}
      </div>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-85 z-50 flex justify-center items-center gap-3">
        <a href="" className="absolute top-4 right-4 cursor-pointer">
          <CircleX width={40} height={40} color="red" />
        </a>
        <a
          href=""
          className="absolute left-6 bg-green-500 rounded-full hover:translate-x-2 transition-all ease-linear"
        >
          <ChevronLeft width={40} height={40} color="white" />
        </a>
        <div>
          <Image
            src={`/gallery/${gallery[selectedImg].name}`}
            width={650}
            height={500}
            alt={`/gallery/${gallery[selectedImg].name}`}
          />
        </div>
        <a
          href=""
          className="absolute right-6 bg-green-500 rounded-full hover:-translate-x-2 transition-all ease-linear"
        >
          <ChevronRight width={40} height={40} color="white" />
        </a>
      </div>
    </>
  );
};

export default Gallery;
