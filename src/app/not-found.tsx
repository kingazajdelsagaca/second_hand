import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const Page404: React.FC = () => {
  return (
    <html>
      <body className={inter.className}>
        <main className="w-full bg-white h-screen flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/logo-lg v0.png"
              width={400}
              height={45}
              sizes="(max-width: 768px): 100px, 180px"
              className="mb-5 w-fit"
              alt="SAGACA Logo"
              priority
            />
            <h1 className="font-bold text-black text-center text-xl lg:text-2xl">
              Page not found
            </h1>
            <Link href="/" className="mt-1 text-primary font-semibold">
              Back to home page
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Page404;

/*
            {params.locale === "pl"
            ? <><h1 className="font-bold text-black text-center text-xl lg:text-2xl">
              Strona nie istnieje
            </h1>
            <Link href="/" className="mt-1 text-primary font-semibold">
              Powrót do strony głównej
            </Link></>
            :
            params.locale === "de"
            ? <><h1 className="font-bold text-black text-center text-xl lg:text-2xl">
              Seite nicht gefunden
            </h1>
            <Link href="/" className="mt-1 text-primary font-semibold">
              Zurück zur Startseite
            </Link></>
            :
            <><h1 className="font-bold text-black text-center text-xl lg:text-2xl">
              Page not found
            </h1>
            <Link href="/" className="mt-1 text-primary font-semibold">
              Back to home page
            </Link></>
            }
*/
