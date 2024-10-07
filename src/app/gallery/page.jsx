import Image from "next/image";
import React from "react";

const gallery = [
  {
    id: 1,
    name: "images.jpg",
    events: "no bag day",
  },
  {
    id: 2,
    name: "images(1).jpg",
    events: "no bag day",
  },
  {
    id: 16,
    name: "images(15).jpg",
    events: "no bag day",
  },
  {
    id: 17,
    name: "images(17).jpg",
    events: "no bag day",
  },
  {
    id: 18,
    name: "images(1).jpg",
    events: "no bag day",
  },
  {
    id: 19,
    name: "images(10).jpg",
    events: "no bag day",
  },
  {
    id: 20,
    name: "images.jpg",
    events: "no bag day",
  },
  {
    id: 21,
    name: "images18.jpg",
    events: "no bag day",
  },
];

const Gallery = () => {
  return (
    <>
      <div>
        <Image
          src={"/gellery/images.jpg"}
          width={300}
          height={250}
          alt={`images.name`}
        />
        <Image src={"/hero1.jpg"} width={300} height={250} alt={`hero`} />;
        {/* {gallery.map((images) => {
            <a href="">
          <Image
            src={`/gellery/images.jpg`}
            width={300}
            height={250}
            alt={`images.name`}
          />;
             </a>;
        })} */}
      </div>
    </>
  );
};

export default Gallery;
