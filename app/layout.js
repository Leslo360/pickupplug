/* eslint-disable @next/next/no-head-element */

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import "./globals.css";
import LogoGif from "../images/2.svg";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {" "}
        <title>Pickup Plug Store</title>
        <meta name="description" content="The best plug in SA" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col items-center content-center justify-between ">
          <Image
            alt="Pickup Plug Logo Gif"
            width={200}
            height={200}
            src={LogoGif}
            priority="true"
            blurDataURL="data:..."
            placeholder="blur"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
