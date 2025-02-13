import Image from "next/image";
import Link from "next/link";

import LogoImage from "~/public/images/logo/lokomu-logo.svg";

export function Header() {
  return (
    <header className="z-40 flex h-16 w-full items-center justify-center border-b-[1px] border-gray-300 md:h-24">
      <div>
        <Link href="/">
          <Image
            src={LogoImage}
            alt="Lokomu logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
