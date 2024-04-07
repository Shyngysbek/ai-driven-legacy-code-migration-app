import Link from "next/link";
import { Button } from "./ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavigationRoutes = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div>
      <Button variant="link" size="lg">
        <Link
          href="/"
          className='text-base font-semibold leading-6 text-gray-900'>
          Home
        </Link>
      </Button>
      {user && (
        <Button variant="link" size="lg">
          <Link
            href="/application"
            className='text-base font-semibold leading-6 text-gray-900'>
            App
          </Link>
        </Button>
      )}
      <Button variant="link" size="lg">
        <Link
          href="/price"
          className='text-base font-semibold leading-6 text-gray-900'>
          Pricing
        </Link>
      </Button>
      {user && (
        <Button variant="link" size="lg">
          <Link
            href="/account"
            className='text-base font-semibold leading-6 text-gray-900'>
            Account
          </Link>
        </Button>
      )}
      <Button variant="link" size="lg">
        <Link
          href="/contact"
          className='text-base font-semibold leading-6 text-gray-900'>
          Contact
        </Link>
      </Button>
    </div>
  )
}

export default NavigationRoutes;