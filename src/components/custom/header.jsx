import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src={"/logo.png"} alt="logo" height={100} width={100} />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-between space-x-5">
            <li>
              <Link className="hover:text-primary" href="/login">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/admission">
                Admission
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/login">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Button size={"sm"}>
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
