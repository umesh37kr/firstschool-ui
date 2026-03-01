import Image from "next/image";
import React from "react";

// import { Metadata } from "next";

// export const metadata = {
//   title: "Admission First School Meral | School Admission Enquiry",
//   description:
//     "Contact First School Meral for admission details, school timings, and other enquiries. Call or visit our campus today.",
//   keywords: [
//     "First School Umesh Kumar",
//     "Admission First School",
//     "Umesh Kumar First School Meral",
//     "Umesh Kumar Meral",
//     "Meral Umesh Kumar",
//     "school admission open Meral",
//     "school admission open Meral",
//     "First School address",
//   ],
// };

const Admissions = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-10 bg-slate-100">
        <h1 className="mt-5 text-center text-2xl text-heading">
          Admission is closed now!
        </h1>
        <p className="py-3 text-center text-md text-primary">
          For more info you can call on this number: +91-8976513261
        </p>
        <div className="flex justify-center items-center py-5">
          <Image
            src={"/board-closed.jpg"}
            alt="closed"
            height={500}
            width={500}
          />
        </div>
      </section>
    </>
  );
};

export default Admissions;
