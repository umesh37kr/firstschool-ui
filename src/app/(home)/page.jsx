import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="" style={{ background: "#fff8e8" }}>
        <div className="container flex items-center justify-center">
          <div className=" ">
            <h1 className="text-6xl text-gray-700">
              We Prepare Your <br />
              <span className="text-primary">Child</span> For Life
            </h1>
            <p className="text-lg text-gray-600 py-6 leading-snug">
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
    </>
  );
}
