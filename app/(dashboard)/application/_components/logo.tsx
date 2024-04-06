import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href='/api/auth/logout'>
      <Image
        height={130}
        width={130}
        alt="logo"
        src="/logo.svg"
      />
    </Link>
  )
}