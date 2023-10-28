import Image from "next/image";

import CompanyLogo from "@/assets/company-logo.png";
import Seacrh from "@/assets/search.svg";
import Setting from "@/assets/settings.svg";
import Bell from "@/assets/bell.svg";
import Avatar from "@/assets/Avatar.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-28 py-5 border-b border-ternary">
      <div className="flex items-center gap-7">
        <Image src={CompanyLogo} alt={"company logo"} />
        <ul className="flex gap-4 font-semibold">
          <li>Dashboard</li>
          <li>CRM</li>
          <li>Submission</li>
          <li>Commission</li>
          <li>LMS</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Image src={Seacrh} alt={"Seacrh"} />
        <Image src={Setting} alt={"Setting"} />
        <Image src={Bell} alt={"Bell"} />
        <Image src={Avatar} alt={"Avatar"} />
      </div>
    </nav>
  );
};

export default Navbar;
