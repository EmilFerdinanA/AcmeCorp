import { Fragment } from "react";
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

      <section className="overflow-x-auto">
        <div className="shadow-sm border border-gray-200 rounded-xl h-[40vh] sm:h-[50vh] lg:h-[60vh] w-[1110px] sm:w-full">
          <input
            type="checkbox"
            className="border border-gray-300 h-5 w-5 appearance-none rounded-md relative checked:bg-[#d1e9ff] hover:bg-[#d1e9ff] checked:border-primary2 hover:border-primary2 checked:bg-[url('/checkmark.png')] bg-center bg-cover cursor-pointer"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Table;
