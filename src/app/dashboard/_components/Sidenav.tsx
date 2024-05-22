"use client"
import Image from 'next/image'
import React from 'react'
import { Contact, HomeIcon, NotebookIcon, Settings } from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'


function Sidenav() {

  const { user } = useKindeBrowserClient();

  const MenuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: HomeIcon,
      link: '/dashboard'
    },

    {
      id: 2,
      name: 'Students',
      icon: Contact,
      link: '/dashboard'
    },

    {
      id: 3,
      name: 'Attendance Record',
      icon: NotebookIcon,
      link: '/dashboard'
    },
    {
      id: 4,
      name: 'Settings',
      icon: Settings,
      link: '/dashboard'
    }

  ]
  return (

    <div className='md:w-64 border shadow-md h-screen p-5'>
      <Image
        src={'/logo.svg'}
        alt='logo'
        width={100}
        height={100}
      />

      <hr className='my-5'></hr>

      {
        MenuList.map((menu, index) => (
          <h2 className='flex items-center gap-3 text-md p-4 hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg my-3'>
            <menu.icon />
            {menu.name}
          </h2>
        ))
      }

      <div className='flex gap-2 items-center bottom-5 fixed'>
        <Image
          src={user?.picture ?? ''}
          alt='user picture'
          width={35}
          height={35}
          className='rounded-full'
        />
        <div>
          <h1 className='text-sm font-bold'>{user?.given_name} {user?.family_name} </h1>
          <h1 className='text-sm font-bold'> {user?.email}</h1>
        </div>
      </div>

    </div>

  )
}

export default Sidenav