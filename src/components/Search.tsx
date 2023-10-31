import { useState } from "react";
import Image from "next/image";

import { IClients } from "@/constant/type";
import search from "@/assets/search.svg";
import checkmark from "@/assets/checkmark.png";

interface SearchProps {
  clients: IClients[] | undefined;
  SearchByName: (name: string | null) => void;
}

const Search: React.FC<SearchProps> = ({ clients, SearchByName }) => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const handleSelectClient = (name: string) => {
    if (name === selectedClient) {
      setSelectedClient(null);
      SearchByName(null);
    } else {
      setSelectedClient(name);
      SearchByName(name);
    }
  };

  const searchNameValue = () => {
    if (selectedClient !== null) {
      return (
        <div>
          {selectedClient}{" "}
          <span className="text-black text-opacity-50">
            @{selectedClient!.split(" ")[0]}
          </span>
        </div>
      );
    } else {
      return <div className="text-gray-500">Search</div>;
    }
  };

  return (
    <section className="relative">
      {dropdownMenu && (
        <div
          onClick={() => setDropdownMenu(!dropdownMenu)}
          className="fixed h-screen w-screen top-0 left-0"
        />
      )}

      <div className="flex  gap-2 relative items-center cursor-pointer">
        <Image src={search} alt={"search"} className="absolute left-3" />
        <div
          onClick={() => setDropdownMenu(!dropdownMenu)}
          className={`w-full sm:w-80 border border-gray-300 font-normal text-base outline-none rounded-lg shadow py-3 px-4 pl-10 ${
            dropdownMenu && "outline-[#84caff] ring-8 ring-[#f4ebff]"
          }`}
        >
          {searchNameValue()}
        </div>
      </div>

      {dropdownMenu && (
        <div className="absolute rounded-lg bg-white w-full sm:w-80 top-[60px] px-4 py-3 shadow-lg border overflow-y-scroll h-[35vh] flex flex-col z-10">
          {clients?.map((client: IClients) => (
            <div
              onClick={() => handleSelectClient(client.name)}
              className={`px-3 py-2 text-sm flex justify-between rounded cursor-pointer ${
                selectedClient === client.name ? "bg-primary" : ""
              }`}
              key={client.id}
            >
              <div>
                {client.name}{" "}
                <span className="text-black text-opacity-50">
                  @{client.name.split(" ")[0]}
                </span>
              </div>
              {selectedClient === client.name && (
                <Image
                  src={checkmark}
                  alt={"checkmark"}
                  height={20}
                  width={20}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
