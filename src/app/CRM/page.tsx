"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const CRM = () => {
  const searchParams = useSearchParams();
  const currentPath = usePathname();

  const activeTab = searchParams.get("tab");

  const createQueryParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="mt-2 px-6 sm:px-10 lg:px-28 flex flex-col gap-5">
      <h2 className="py-5 border-b border-ternary">CRM</h2>

      <ul className="flex gap-2 items-center">
        <li>
          <Link
            href={`${currentPath}?${createQueryParams("tab", "clients")}`}
            className={`py-2 px-3 text-sm font-semibold rounded-md ${
              activeTab === "clients" || activeTab === null
                ? "bg-primary text-primary2"
                : "text-gray-500"
            }`}
          >
            Clients
          </Link>
        </li>
        <li>
          <Link
            href={`${currentPath}?${createQueryParams("tab", "policy")}`}
            className={`py-2 px-3 text-sm font-semibold rounded-md ${
              activeTab === "policy"
                ? "bg-primary text-primary2"
                : "text-gray-500"
            }`}
          >
            Policy
          </Link>
        </li>
        <li>
          <Link
            href={`${currentPath}?${createQueryParams("tab", "support")}`}
            className={`py-2 px-3 text-sm font-semibold rounded-md ${
              activeTab === "support"
                ? "bg-primary text-primary2"
                : "text-gray-500"
            }`}
          >
            Support
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CRM;
