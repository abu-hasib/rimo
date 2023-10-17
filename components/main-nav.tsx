"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { NavItem } from "@/types";
// import { cn } from "@/lib/util"
// import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons";
import LoginDialog from "./login";
// import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex items-center justify-between gap-6 md:gap-10 bg-[#272727] h-[77px] w-full px-4">
      <div className="relative flex items-center rounded-[12px] gap-4 h-[46px] w-[482px] text-[#5A5A5A] px-8 bg-white">
        <input
          className="flex-1 h-[36px] border-0 outline-0 outline focus:outline-0 focus:border-0"
          placeholder="Search by Podcast Name, Host name, Categories, Tags..."
        />
        <Icons.search />
      </div>
      <div className="flex gap-2 items-center rounded-[18px] border border-[#1EAEA3] p-4 h-[42px] text-[#1EAEA3]">
        <Icons.mobile />
        <p>Download the app</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center rounded-[18px] bg-[#1EAEA3] p-4 h-[42px] text-[#fff]">
          <Icons.miclines />
          <p>SIGN UP</p>
        </div>
        <Link href="/?modal=true">
          <div className="flex gap-2 items-center rounded-[18px] border border-[#FFF] p-4 h-[42px] text-[#fff]">
            <Icons.miclines />
            <p>LOG IN</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
