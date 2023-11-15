"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IProfilteData } from "@/constant/type";

import Avatar from "@/assets/Avatar.png";
import Avatar1 from "@/assets/Avatar1.png";
import ErrorLoadData from "@/components/ErrorLoadData";
import { FormattedDate } from "@/utils/FormattedDate";
import { formatCurrency } from "@/utils/FormattedCurrency";

const Detail = () => {
  const [dataProfile, setDataProfile] = useState<IProfilteData | undefined>();
  const [error, setError] = useState<boolean>(false);

  const pathname = usePathname();

  const client = pathname.split("/")[2];
  const cleanedName = decodeURIComponent(client).replace(/%20/g, " ");

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          "https://interview-test-mock-api.azurewebsites.net/profile"
        );
        setDataProfile(response.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchClient();
  }, []);

  return (
    <section className="mt-2 px-6 sm:px-10 lg:px-28 flex flex-col gap-5 pb-24">
      <h2 className="py-5 border-b border-ternary text-3xl font-semibold">
        {cleanedName}
      </h2>

      {error ? (
        <ErrorLoadData page={"profile"} />
      ) : (
        <div>
          <div className="bg-gray-50 rounded-xl py-5 px-6 text-gray-600 text-sm flex flex-col sm:flex-row gap-14 mt-8">
            <div>
              <div className="mb-2">Gender</div>
              <div>{dataProfile?.clientInformation.gender}</div>
            </div>

            <div>
              <div className="mb-2">DOB</div>
              <div>{FormattedDate(dataProfile?.clientInformation.dob)}</div>
            </div>

            <div>
              <div className="mb-2">Marital Status</div>
              <div>{dataProfile?.clientInformation.maritalStatus}</div>
            </div>

            <div>
              <div className="mb-2">Employment</div>
              <div>{dataProfile?.clientInformation.employmentStatus}</div>
            </div>
          </div>

          <div>
            <h2 className="py-5 border-b border-ternary text-lg font-semibold">
              Financials
            </h2>

            <div className=" rounded-xl border border-gray-200 mt-8">
              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">Income</div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.income)}
                </div>
              </div>

              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">
                  Expenses
                </div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.expenses)}
                </div>
              </div>

              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">Savings</div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.savings)}
                </div>
              </div>

              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">
                  Invesment
                </div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.investment)}
                </div>
              </div>

              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">Debt</div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.debt)}
                </div>
              </div>

              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">
                  Cashflow
                </div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.cashflow)}
                </div>
              </div>

              <div className="py-4 px-6 flex justify-between items-center">
                <div className="text-sm font-medium text-gray-900">
                  Networth
                </div>
                <div className="text-sm font-normal text-gray-600">
                  {formatCurrency(dataProfile?.financials.networth)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="py-5 border-b border-ternary text-lg font-semibold">
              Goals
            </h2>

            <div className="mt-8 flex flex-col lg:flex-row gap-8">
              <div className="w-fulll lg:w-1/2 p-6 flex justify-between items-center rounded-xl border border-gray-200 shadow">
                <div className="flex items-center justify-center gap-3">
                  <Image src={Avatar} alt={"Avatar"} />
                  <div>
                    <h6 className="text-base font-semibold text-gray-900">
                      Emergency Fund
                    </h6>
                    <p className="text-sm font-normal text-gray-600">
                      {formatCurrency(dataProfile?.goals.emergencyFund)}
                    </p>
                  </div>
                </div>
                <button className="shadow border border-gray-300 rounded-lg px-3 py-2">
                  Edit
                </button>
              </div>

              <div className="w-full lg:w-1/2 p-6 flex justify-between items-center rounded-xl border border-gray-200 shadow">
                <div className="flex items-center justify-center gap-3">
                  <Image src={Avatar1} alt={"Avatar"} />
                  <div>
                    <h6 className="text-base font-semibold text-gray-900">
                      Travel
                    </h6>
                    <p className="text-sm font-normal text-gray-600">
                      {formatCurrency(dataProfile?.goals.travel)}
                    </p>
                  </div>
                </div>
                <button className="shadow border border-gray-300 rounded-lg px-3 py-2">
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="py-5 border-b border-ternary text-lg font-semibold">
              Insurances
            </h2>

            <div className="mt-8 flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 p-6 flex justify-between items-center rounded-xl border border-gray-200 shadow">
                <div className="flex items-center justify-center gap-3">
                  <Image src={Avatar1} alt={"Avatar"} />
                  <div>
                    <h6 className="text-base font-semibold text-gray-900">
                      Life Insurance
                    </h6>
                    <p className="text-sm font-normal text-gray-600">
                      {formatCurrency(dataProfile?.insurances.lifeInsurance)}
                    </p>
                  </div>
                </div>
                <button className="shadow border border-gray-300 rounded-lg px-3 py-2">
                  View insurance
                </button>
              </div>

              <div className="w-full lg:w-1/2 p-6 flex justify-between items-center rounded-xl border border-gray-200 shadow">
                <div className="flex items-center justify-center gap-3">
                  <Image src={Avatar1} alt={"Avatar"} />
                  <div>
                    <h6 className="text-base font-semibold text-gray-900">
                      Personal Accident
                    </h6>
                    <p className="text-sm font-normal text-gray-600">
                      {`Plan A ${formatCurrency(
                        dataProfile?.insurances.personalAccident
                      )}`}
                    </p>
                  </div>
                </div>
                <button className="shadow border border-gray-300 rounded-lg px-3 py-2">
                  View insurance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
