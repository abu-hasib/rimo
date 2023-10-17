import { MainNav } from '@/components/main-nav'
import { DashboardNav } from '@/components/nav'
import Image from 'next/image'
import logo from "@/public/logo.png"
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'
import DefaultModal from '@/components/login'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="w-full grid flex-1 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex bg-[#303030]">
        <div className='py-8 px-4'>
          <div>
            <Image src={logo} width={100} height={100} alt='logo' />
          </div>

          <ul className='my-6'>
            {/*<div className='flex gap-2 items-center'>
              <span className='bg-[#3A3A3A] p-1 rounded-[8px]'>
              <Icons.waveform/>

                </span>
              <li className='font-semibold leading-[23px]'>Discover</li>
  </div> */}
            <DashboardNav items={siteConfig.sidebarNav} />
          </ul>
        </div>
      </aside>
      <header>
        <MainNav />
      </header>
    </main>
  )
}
