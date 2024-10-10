import Image from "next/image";
import React from "react";
import { gallery } from "@/app/db/gallery.json";
import Link from "next/link";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {gallery.map((img, index) => (
          <a
            href=""
            key={`${img.id}`}
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
    </>
  );
};

export default Gallery;
