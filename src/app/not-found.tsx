import Image from "next/image";

import ArrowLeft from "@/assets/arrow-left.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-28 flex flex-col gap-3 h-[100vh] justify-center">
      <h3 className="text-primary2 font-semibold">404 error</h3>
      <h2 className="text-6xl text-gray/900 font-semibold mb-3">
        We can’t find that page
      </h2>
      <p className="text-gray/600 text-xl mb-9">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-3">
        <button className="flex gap-3 px-7 text-lg font-semibold py-4 text-gray-700 border border-grey-300 rounded-lg shadow-sm">
          <span>
            <Image src={ArrowLeft} alt={"ArrowLeft"} />
          </span>
          Go Back
        </button>
        <Link
          href={"/"}
          className="px-7 py-4 text-lg text-white border font-semibold border-primary2 bg-primary2 rounded-lg shadow-sm"
        >
          Take me home
        </Link>
      </div>
    </section>
  );
}
