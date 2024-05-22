"use client"
import { useEffect } from "react";
import { redirect } from "next/navigation";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import ModeToggle from "@/components/theme-toggler";

export default function Home() {
  useEffect(() => {
redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  }, [])
  
  return (
    <>
    
    </>
  );
}
