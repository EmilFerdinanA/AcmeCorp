import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { IClients } from "@/constant/type";
import { FormattedDate } from "@/utils/FormattedDate";
import ArrowUp from "@/assets/arrow-up.svg";
import Avatar from "@/assets/Avatar.png";
import Search from "./Search";
import SearchSpecific from "./SearchSpecific";

interface TableProps {
  clients: IClients[] | undefined;
}

const Table: React.FC<TableProps> = ({ clients }) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [client, setClient] = useState(clients);
  const [checkedClients, setCheckedClients] = useState<{
    [key: string]: boolean;
  }>({});
  const [page, setPage] = useState<number>(1);

  const gender = ["Male", "Female"];
  const martialStatus = ["Single", "Married", "Divorced"];
  const employment = ["Unemployed", "Employed"];

  useEffect(() => {
    if (clients) {
      setClient(
        clients?.slice(
          page === 1 ? 0 : (page - 1) * 3,
          clients.length - page * 3 < 0 ? clients.length : page * 3
        )
      );
    }
  }, [clients, page]);

  const handleCheckboxChange = (clientId: string, isChecked: boolean) => {
    setCheckedClients((prevCheckedClients) => ({
      ...prevCheckedClients,
      [clientId]: isChecked,
    }));
  };

  const handleSelectAllChange = (isChecked: boolean) => {
    setSelectAll(isChecked);

    const updatedCheckedClients: { [key: string]: boolean } = {};

    if (isChecked) {
      clients?.map((client: IClients) => {
        updatedCheckedClients[client.id] = true;
      });
    }

    setCheckedClients(updatedCheckedClients);
  };

  const data = clients?.slice(
    page === 1 ? 0 : (page - 1) * 3,
    clients.length - page * 3 < 0 ? clients.length : page * 3
  );

  const SearchByName = (name: string | null) => {
    if (name == null) {
      setClient(data);
    } else {
      setClient(clients?.filter((client) => client.name === name));
    }
  };

  return (
    <Fragment>
      <section className="mb-5 flex flex-col lg:flex-row lg:items-center gap-6">
        <Search clients={clients} SearchByName={SearchByName} />
        <div className="flex flex-col sm:flex-row gap-6">
          <SearchSpecific
            placeholder={"Gender"}
            className="sm:w-24"
            dropdownMenus={gender}
          />
          <SearchSpecific
            placeholder={"Marital Status"}
            className="sm:w-36"
            dropdownMenus={martialStatus}
          />
          <SearchSpecific
            placeholder={"Employment"}
            className="sm:w-32"
            dropdownMenus={employment}
          />
        </div>
      </section>

      <section className="overflow-auto">
        <div className="shadow-sm border border-gray-200 rounded-xl w-[1280px] xl:w-full ">
          <div className="grid grid-cols-12 items-center px-6 py-3 text-gray-600 text-xs font-medium bg-gray-50 rounded-t-xl">
            <div className="col-span-6 flex gap-3 items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={(e) => handleSelectAllChange(e.target.checked)}
                className="border border-gray-300 h-5 w-5 appearance-none rounded-md relative bg-white checked:bg-[#d1e9ff] hover:bg-[#d1e9ff] checked:border-primary2 hover:border-primary2 checked:bg-[url('/checkmark.png')] bg-center bg-cover cursor-pointer"
              />
              <div>Name</div>
            </div>
            <div className="col-span-1 flex gap-1">
              Gender{" "}
              <span>
                <Image src={ArrowUp} alt={"arrow up"} />
              </span>
            </div>
            <div className="col-span-1">DOB</div>
            <div className="col-span-2">Marital Status</div>
            <div className="col-span-2">Employment</div>
          </div>

          {client?.map((client: IClients) => {
            return (
              <div
                key={client.id}
                className="grid grid-cols-12 items-center px-6 py-4 text-gray-600 text-sm font-normal"
              >
                <div className="col-span-6 flex gap-3 items-center">
                  <input
                    type="checkbox"
                    checked={checkedClients[client.id] || false}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      handleCheckboxChange(client.id, isChecked);
                    }}
                    className="border border-gray-300 h-5 w-5 appearance-none rounded-md relative checked:bg-[#d1e9ff] hover:bg-[#d1e9ff] checked:border-primary2 hover:border-primary2 checked:bg-[url('/checkmark.png')] bg-center bg-cover cursor-pointer"
                  />
                  <Image src={Avatar} alt={"avatar"} />
                  <div className="text-gray-900 font-medium">{client.name}</div>
                </div>
                <div className="col-span-1">{client.gender}</div>
                <div className="col-span-1">{FormattedDate(client.dob)}</div>
                <div className="col-span-2">{client.maritalStatus}</div>
                <div className="col-span-2">{client.employmentStatus}</div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Table;
