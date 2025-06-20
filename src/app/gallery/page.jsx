"use client";
import Image from "next/image";
import React, { useState } from "react";
import { gallery } from "@/app/db/gallery.json";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [imgPop, setImgPop] = useState(false);
  const swipeImg = (moveType) => {
    if (moveType == "prev") {
      if (selectedImg == 0) setSelectedImg(gallery.length - 1);
      else setSelectedImg(selectedImg - 1);
    }
    if (moveType == "next") {
      if (selectedImg == gallery.length - 1) setSelectedImg(0);
      else setSelectedImg(selectedImg + 1);
    }
  };
  return (
    <>
      <div className="flex flex-wrap items-center justify-center pt-5 pb-5 bg-slate-100">
        {gallery.map((img, index) => (
          <a
            onClick={() => {
              setSelectedImg(index);
              setImgPop(true);
            }}
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
      {imgPop && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-85 z-50 flex justify-center items-center gap-3">
          <a
            onClick={() => setImgPop(false)}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <CircleX width={40} height={40} color="red" />
          </a>
          <a
            onClick={() => swipeImg("prev")}
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
            onClick={() => swipeImg("next")}
            className="absolute right-6 bg-green-500 rounded-full hover:-translate-x-2 transition-all ease-linear"
          >
            <ChevronRight width={40} height={40} color="white" />
          </a>
          <nav className="absolute left-0 bottom-0 right-0 flex justify-center gap-3">
            {gallery.map((img, index) => (
              <a
                onClick={() => {
                  setSelectedImg(index);
                  setImgPop(true);
                }}
                key={`${index}`}
                className={`hover:-translate-y-2 cursor-pointer transition-all ease-linear ${
                  selectedImg == index ? "-translate-y-2" : ""
                } `}
              >
                <Image
                  src={`/gallery/${img.name}`}
                  width={500}
                  height={650}
                  alt={`${img.name}`}
                />
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Gallery;
