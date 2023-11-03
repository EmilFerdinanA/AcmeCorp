import Image from "next/image";
import Link from "next/link";

import CompanyLogo from "@/assets/company-logo.png";
import Seacrh from "@/assets/search.svg";
import Setting from "@/assets/settings.svg";
import Bell from "@/assets/bell.svg";
import Avatar from "@/assets/Avatar.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 lg:px-28 py-5 border-b border-ternary z-50 sticky top-0 bg-white">
      <div className="flex items-center gap-7">
        <Link href={"/"}>
          <Image src={CompanyLogo} alt={"company logo"} priority />
        </Link>

        <ul className="hidden gap-4 font-semibold lg:flex">
          <Link href={"/"}>
            <li>Dashboard</li>
          </Link>
          <Link href={"/CRM"}>
            <li>CRM</li>
          </Link>
          <Link href={"/submission"}>
            <li>Submission</li>
          </Link>
          <Link href={"/commission"}>
            <li>Commission</li>
          </Link>
          <Link href={"/LMS"}>
            <li>LMS</li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-4">
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <Image src={Seacrh} alt={"Seacrh"} />
          </li>
          <li>
            <Image src={Bell} alt={"Bell"} />
          </li>
          <li>
            <Image src={Setting} alt={"Setting"} />
          </li>
        </ul>
        <Image src={Avatar} alt={"Avatar"} />
      </div>
    </nav>
  );
};

export default Navbar;
