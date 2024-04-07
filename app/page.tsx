"use client";

import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Menu, X } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  
  return (
    <div>
      <div className='relative isolate pt-14'>
        <div className='py-24 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Renew your old code
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                This website uses AI tools to renew your ancient code and make it more efficient and suitable for the future.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                {!user && (
                <Link
                  href='/api/auth/login'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Get started
                </Link>
                )}
                {user && (
                <Link
                  href='/application'
                  className='rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Go to App
                </Link>
                )}
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'>
                  Our mission <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}