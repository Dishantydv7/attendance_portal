"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import React from "react"


export default function Header() {
  const {user} = useKindeBrowserClient();
  return (
      <div className=" p-4 shadow-sm border flex justify-between">
        <div>

        </div>
      <img alt="user" className="rounded-full" height={35} src={user?.picture} width={35} />
    </div>
  )
}

