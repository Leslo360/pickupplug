"use client";
import Image from "next/image";
import "./globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import useWindowDimensions from "../hooks/windowDimentions";

export default function RootLayout({ children }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const videoRef = useRef();
  const { height, width } = useWindowDimensions();

  console.log("Height: ", height, "Width: ", width);
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <html>
      <head>
        <title>Pickup Plug Store</title>
        <meta name="description" content="The best plug in SA" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div
          className={`flex flex-col sm:h-[600px] sm:w-[100vw] items-center content-center  z-[10]`}
        >
          <Link href="/">
            <Image
              alt="Pickup Plug"
              width={250}
              height={250}
              src="/2.svg"
              priority="true"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </Link>
          <SessionContextProvider
            supabaseClient={supabaseClient}
            // initialSession={pageProps.initialSession}
          >
            <video
              ref={videoRef}
              controls={false}
              loop
              muted
              autoPlay
              playsInline
              className="object-cover  w-[100vw] h-[100vh] fixed z-[-1] "
            >
              <source src="/smoke.mp4" />
            </video>
            {children}
          </SessionContextProvider>
        </div>
      </body>
    </html>
  );
}
