"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link className="hover:text-primary" href="/about">
            About us
          </Link>
          <Link className="hover:text-primary" href="/admission">
            Admission
          </Link>
          <Link className="hover:text-primary" href="/gallery">
            Gallery
          </Link>
          <Link className="hover:text-primary" href="/noticeboard">
            Notice Board
          </Link>
          <Link className="hover:text-primary" href="/contact">
            Contact
          </Link>
          <Button size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul
            className="flex flex-col items-start p-4 space-y-4 text-heading"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <li>
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/admission">
                Admission
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/noticeboard">
                Notice Board
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Button size="sm" className="w-full">
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
