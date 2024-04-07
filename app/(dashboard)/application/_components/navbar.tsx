'use client';
// import { NavbarRoutes } from "@/components/navbar-routes"
// import { MobileSidebar } from "./mobile-sidebar"

import { useUser } from '@auth0/nextjs-auth0/client';

import { Button } from "@/components/ui/button"
import { getSession } from '@auth0/nextjs-auth0';
import { LogOut } from "lucide-react"
import Link from "next/link"
import { Logo } from './logo';

export const Navbar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className=" p-4 border-b-0 h-full flex items-center">
        <Logo />
        <div className='ml-auto flex flex-row items-center gap-8'>

          <Link href="/api/auth/logout">
            <Button variant="ghost" size="default" className="font-bold text-md">
              Pricing
            </Button>
          </Link>
          <Link href="/api/auth/logout">
            <Button variant="ghost" size="default" className="font-bold text-md">
              Account
            </Button>
          </Link>
          <Link href="/api/auth/logout">
            <Button variant="ghost" size="default" className="font-bold text-md">
              Contact
            </Button>
          </Link>
          <Link href="/api/auth/logout">
            <Button variant="ghost" size="default" className="font-bold text-md">
              <LogOut />
              Exit
            </Button>
          </Link>
          {user && (
            <div>
              <img
                className='rounded-full w-10 h-10'
                src={user.picture!}
                alt={user.name!} />
            </div>
          )}

        </div>
      </div>
    </>
  )
}