import Image from "next/image";
import Link from "next/link";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

import LogoImage from "~/public/images/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container flex flex-col items-center justify-center text-center">
        {/* Logo & Description Section */}
        <div className="mb-12 max-w-[360px] lg:mb-16">
          <Link href="/" className="mb-8 inline-block">
            <div className="h-24 w-24">
              <Image
                src={LogoImage}
                alt="logo"
                className="w-full"
                width={300}
                height={300}
              />
            </div>
          </Link>
          <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            Lokomu - Local communities
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-x-3">
            <Link href="https://instagram.com/lokomuapp">
              <InstagramLogoIcon color="red" width="20" height="20" />
            </Link>
            <Link href="https://www.linkedin.com/company/lokomu/">
              <LinkedInLogoIcon color="blue" width="20" height="20" />
            </Link>
            <Link href="https://github.com/lokomu">
              <GitHubLogoIcon color="black" width="20" height="20" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        {/* Copyright Section */}
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            {"© "}
            <Link className="font-bold text-primary" href="https://lokomu.com/">
              Lokomu&nbsp;
            </Link>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
