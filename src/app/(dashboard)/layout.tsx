import Menu from "@/components/dashboard/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // <div>dashboard{children}</div>
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} height={32} width={32} alt="logo" />
          <span className="hidden lg:block">First School</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] bg-red-200 md:w-[92%] lg:w-[84%] xl:w-[86%]">
        right
      </div>
    </div>
  );
}
