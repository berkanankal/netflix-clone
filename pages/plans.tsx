import { CheckIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Table from "../components/Table";

const Plans = () => {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<
    "basic" | "standart" | "premium"
  >("premium");

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <Image
            src="/assets/images/netflix-logo.png"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            alt="Netflix Logo"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that&apos;s right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            <div
              className={`planBox ${
                selectedPlan === "basic" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => setSelectedPlan("basic")}
            >
              Basic
            </div>
            <div
              className={`planBox ${
                selectedPlan === "standart" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => setSelectedPlan("standart")}
            >
              Standart
            </div>{" "}
            <div
              className={`planBox ${
                selectedPlan === "premium" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => setSelectedPlan("premium")}
            >
              Premium
            </div>
          </div>

          <Table selectedPlan={selectedPlan} />

          <button
            className={`mx-auto w-11/12 cursor-pointer rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px]`}
          >
            Subscribe
          </button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
