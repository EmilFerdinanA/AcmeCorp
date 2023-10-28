import Image from "next/image";

import CompanyLogo from "@/assets/company-logo.png";
import Seacrh from "@/assets/search.svg";
import Setting from "@/assets/settings.svg";
import Bell from "@/assets/bell.svg";
import Avatar from "@/assets/Avatar.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 lg:px-28 py-5 border-b border-ternary">
      <div className="flex items-center gap-7">
        <Image src={CompanyLogo} alt={"company logo"} />

        <ul className="hidden gap-4 font-semibold lg:flex">
          <li>Dashboard</li>
          <li>CRM</li>
          <li>Submission</li>
          <li>Commission</li>
          <li>LMS</li>
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
