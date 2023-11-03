import { Fragment, useCallback, useEffect, useState } from "react";
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

const initialFilters = {
  Male: false,
  Female: false,
};

const gender = ["Male", "Female"];

const Table: React.FC<TableProps> = ({ clients }) => {
  const [client, setClient] = useState<IClients[] | undefined>(clients);

  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [checkedClients, setCheckedClients] = useState<{
    [key: string]: boolean;
  }>({});

  const [dataFilteredClient, setDataFilteredClient] = useState<
    IClients[] | undefined
  >([]);
  const [filteredClient, setFilteredClient] = useState<IClients[] | undefined>(
    []
  );
  const [filters, setFilters] = useState<{ [key: string]: boolean }>(
    initialFilters
  );

  const [page, setPage] = useState<number>(1);

  const data = clients?.slice(
    page === 1 ? 0 : (page - 1) * 3,
    clients.length - page * 3 < 0 ? clients.length : page * 3
  );

  const dataFilter = dataFilteredClient?.slice(
    page === 1 ? 0 : (page - 1) * 3,
    dataFilteredClient.length - page * 3 < 0
      ? dataFilteredClient.length
      : page * 3
  );

  useEffect(() => {
    if (clients) {
      setClient(clients.slice(0, 3));
    }
  }, [clients]);

  useEffect(() => {
    if (isSearch) {
      setFilteredClient(dataFilter);
    } else {
      setClient(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const isSearchSpecific = Object.values(filters).some(
      (value) => value === true
    );
    setIsSearch(isSearchSpecific);

    const filtered = clients?.filter((item) => {
      return (
        (filters.Male && item.gender === "Male") ||
        (filters.Female && item.gender === "Female") ||
        (!filters.Male && !filters.Female)
      );
    });

    setDataFilteredClient(filtered);
    setFilteredClient(filtered?.slice(0, 3));
  }, [clients, filters]);

  const handleCheckedClients = (clientId: string, isChecked: boolean) => {
    setCheckedClients((prevCheckedClients) => ({
      ...prevCheckedClients,
      [clientId]: isChecked,
    }));
  };

  const SearchByGender = (gender: string, isChecked: boolean) => {
    setPage(1);
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [gender]: isChecked,
    }));
    setSelectedClient(null);
    setClient(data);
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

  const SearchByName = (name: string | null) => {
    setDataFilteredClient([]);

    const updatedFilters = { ...filters };

    for (const key in updatedFilters) {
      updatedFilters[key] = false;
    }
    setFilters(updatedFilters);

    if (name == null) {
      setPage(1);
      setClient(data);
    } else {
      setClient(clients?.filter((client) => client.name === name));
    }
  };

  return (
    <Fragment>
      <section className="mb-5 flex flex-col lg:flex-row lg:items-center gap-6">
        <Search
          clients={clients}
          SearchByName={SearchByName}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
        />
        <div className="flex flex-col sm:flex-row gap-6">
          <SearchSpecific
            placeholder={"Gender"}
            className="sm:w-24"
            dropdownMenus={gender}
            Search={SearchByGender}
            initFilter={filters}
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

          {(isSearch ? filteredClient || [] : client || []).map(
            (client: IClients) => {
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
                        handleCheckedClients(client.id, isChecked);
                      }}
                      className="border border-gray-300 h-5 w-5 appearance-none rounded-md relative checked:bg-[#d1e9ff] hover:bg-[#d1e9ff] checked:border-primary2 hover:border-primary2 checked:bg-[url('/checkmark.png')] bg-center bg-cover cursor-pointer"
                    />
                    <Image src={Avatar} alt={"avatar"} />
                    <div className="text-gray-900 font-medium">
                      {client.name}
                    </div>
                  </div>
                  <div className="col-span-1">{client.gender}</div>
                  <div className="col-span-1">{FormattedDate(client.dob)}</div>
                  <div className="col-span-2">{client.maritalStatus}</div>
                  <div className="col-span-2">{client.employmentStatus}</div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Table;
