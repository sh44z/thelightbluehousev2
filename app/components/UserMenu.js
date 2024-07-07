"use client"
import { useCallback, useState } from "react"
import {AiOutlineMenu} from "react-icons/ai"
import {CiUser} from "react-icons/ci"

const UserMenu = () => {
  const[menuOpen, setMenuOpen] = useState(false);
  const openMenu = useCallback(() => {
     setMenuOpen((value) => !value)
  }, [])


  return (
    <div className="relative">
      <div className='flex flex-row items-center gap-3'>
        <div
            onClick={() => {}}
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          List Your Property
        </div>
        <div onClick={openMenu} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md">
          <AiOutlineMenu />
          <CiUser />
        </div>
      </div>
       {menuOpen && (
        <div>
          <ul>
            <li>Signup</li>
            <li>Login</li>
          </ul>
        </div>
        )}
    </div>
  )
}

export default UserMenu
