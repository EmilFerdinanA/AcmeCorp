import Image from "next/image";
import alert from "@/assets/alert-triangle.svg";

import React, { Fragment } from "react";
import Search from "./Search";
import { IClients } from "@/constant/type";

interface TableProps {
  clients: IClients[] | undefined;
}

const Table: React.FC<TableProps> = ({ clients }) => {
  return (
    <Fragment>
      <section className="mb-5">
        <Search clients={clients} />
      </section>

      <section className="bg-white shadow-sm border border-gray-200 rounded-xl flex flex-col gap-6 items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[60vh] text-center px-4">
        <Image src={alert} alt={"alert"} />
        <div>
          <h4 className="mb-1 text-rose-900 text-base font-semibold">
            Opps! Unable to load clients
          </h4>
          <p className="text-rose-900 text-sm font-normal">
            Something went wrong that we didn’t anticipate.
          </p>
        </div>
        <button className="shadow border-gray-300 rounded-lg text-base text-gray-700 font-semibold px-5 py-3 bg-white">
          Retry
        </button>
      </section>
    </Fragment>
  );
};

export default Table;
