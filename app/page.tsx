import { MainNav } from "@/components/main-nav";
import { DashboardNav } from "@/components/nav";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import DefaultModal from "@/components/modal";
import Link from "next/link";
import welcome from "@/public/welcome.png";
import biga from "@/public/biga.jpg";
import Login from "@/components/login";

interface Props {
  searchParams: Record<string, string> | null | undefined;
}

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <main className="w-full grid flex-1 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex bg-[#303030]">
        <div className="py-8 px-4">
          <div>
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>
          <DashboardNav items={siteConfig.sidebarNav} />
        </div>
      </aside>
      <div>
        <MainNav />
        <section className="px-4 py-8">
          <div className="flex items-center gap-1">
            <Icons.bigstar />
            <h1 className="text-[28px] font-bold">Pick of the week</h1>
          </div>
          <div className="w-[508px]">
            <Image
              src={biga}
              style={{ width: "100%", height: "100%" }}
              height={100}
              width={100}
              alt="bifg"
              objectFit="cover"
            />
          </div>
        </section>
      </div>
      {showModal && (
        <div className="fixed inset-0 grid h-screen w-screen place-items-center backdrop-brightness-[80%]">
          <div className="bg-[#000000] h-[511px] w-[1003px] shadow-[0px_0px_4px_2px rgba(30, 174, 163, 0.50)] rounded-[12px] relative">
            <div className="px-12 py-12 h-full">
              <div className="grid place-items-center flex-1 gap-12 md:grid-cols-[400px_1fr] w-full h-full">
                <Login />
                <section className="w-[404px]">
                  <Image
                    src={welcome}
                    style={{ height: "100%", width: "100%" }}
                    height={100}
                    width={100}
                    alt="welco"
                  />
                </section>
              </div>
            </div>
            <div className="absolute right-2 top-2 grid place-items-center rounded-full bg-[#525252]">
              <Link href="/">
                <Icons.x />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
