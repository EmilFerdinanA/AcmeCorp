import { useState } from "react";
import Image from "next/image";

import plus from "@/assets/plus-circle.svg";

interface SearchSpecificProps {
  placeholder: string;
  className: string;
  dropdownMenus: string[];
}

const SearchSpecific: React.FC<SearchSpecificProps> = ({
  placeholder,
  className,
  dropdownMenus,
}) => {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  return (
    <section className={`relative w-full ${className}`}>
      {dropdownMenu && (
        <div
          onClick={() => setDropdownMenu(!dropdownMenu)}
          className="fixed h-screen w-screen top-0 left-0 z-20"
        />
      )}

      <div className="flex items-center justify-center text-sm font-medium gap-1 border border-gray-200 px-3 py-3 sm:py-1 rounded-2xl cursor-pointer">
        <Image src={plus} alt={"plus"} />
        <div onClick={() => setDropdownMenu(!dropdownMenu)}>{placeholder}</div>
      </div>

      {dropdownMenu && (
        <div className="absolute w-full sm:w-64 rounded-lg bg-white top-14 sm:top-10 px-4 py-3 shadow-lg border flex flex-col gap-5 justify-center z-30">
          {dropdownMenus.map((menu) => (
            <div key={menu} className="flex gap-3 items-center">
              <input
                type="checkbox"
                // checked={selectAll}
                // onChange={(e) => handleSelectAllChange(e.target.checked)}
                className="border border-gray-300 h-5 w-5 appearance-none rounded-md relative bg-white checked:bg-[#d1e9ff] hover:bg-[#d1e9ff] checked:border-primary2 hover:border-primary2 checked:bg-[url('/checkmark.png')] bg-center bg-cover cursor-pointer"
              />
              <div>{menu}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchSpecific;
