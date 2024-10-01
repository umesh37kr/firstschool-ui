import Image from "next/image";
import React from "react";

const Admissions = () => {
  return (
    <>
      <section>
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
