/* eslint-disable @next/next/no-head-element */

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import "./globals.css";
import LogoGif from "../images/logoDark.gif";

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //       navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log(
  //             "Service Worker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, []);
  return (
    <html>
      <head>
        {" "}
        <title>Pickup Plug Store</title>
        <meta name="description" content="The best plug in SA" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col items-center content-center justify-between">
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
