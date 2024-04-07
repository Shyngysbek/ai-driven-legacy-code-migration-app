"use client";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import NavigationRoutes from "./navigation-routes";

const Header = () => {
  const { user, error, isLoading } = useUser();

  const [Authenticated, isAuthenticated] = useState(false);

  return (
    <>
      <header className='absolute inset-x-0 top-0 z-100 h-[80px]'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Watt</span>
              <Image
                height={130}
                width={130}
                alt="logo"
                src="/logo.svg"
              />
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
              <Menu className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div>
            <NavigationRoutes />
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-x-5'>
            {!user && (
              <Link
                href="/api/auth/login"
                className='text-sm font-semibold leading-6 text-gray-900'>
                Log in <span aria-hidden='true'>&rarr;</span>
              </Link>
            )}

            {user && (
              <Link
                href="/api/auth/logout"
                className='text-sm leading-6 text-gray-900'>
                <Button variant="ghost" size="sm" className="font-semibold">
                  <LogOut className="mr-2" />
                  Logout
                </Button>
              </Link>
            )}
            {user && (
              <img
                className="h-10 w-10 rounded-full"
                src={user.picture!}
                alt="profile image"
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;