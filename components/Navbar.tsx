import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-[#0F0715]">
      <nav className="flex justify-between items-center py-4 max-w-screen-xl mx-auto">
        <div className="text-xl">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Fazil Tirtana"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <ul className="flex justify-center space-x-10 font-semibold">
          <li>
            <Link href="/">About me</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/">Resume</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
