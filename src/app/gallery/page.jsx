import Image from "next/image";
import React from "react";
import { gallery } from "@/app/db/gallery.json";
import Link from "next/link";

const Gallery = () => {
  return (
    <>
      <div className="">
        {gallery.map((img, index) => (
          <Image
            key={`${img.id}`}
            src={`/gallery/${img.name}`}
            width={300}
            height={250}
            alt={`${img.name}`}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
