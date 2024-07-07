"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logo from "../../public/images/logo.png"
import Search from "./Search"
import UserMenu from "./UserMenu"

const Navbar = () => {
    const router = useRouter();

  return (
    <div className='fixed w-full bg-white z-10 shadow-md '>
      <div className="py-4 border-b-[1px]">
        <div className="container flex items-center justify-between gap-3 md:gap-0">
            <div>
                <Image
                 alt="Logo"
                 className="hidden md:block cursor-pointer"
                 height="150"
                 width="150"
                 src={logo}
                />
            </div>
            <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                <Search />
                <UserMenu />
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Navbar
