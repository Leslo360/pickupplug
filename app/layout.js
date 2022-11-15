"use client";
import Image from "next/image";
import "./globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

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
            alt="Pickup Plug"
            width={250}
            height={250}
            src="/2.svg"
            priority="true"
            blurDataURL="data:..."
            placeholder="blur"
          />
          <SessionContextProvider
            supabaseClient={supabaseClient}
            // initialSession={pageProps.initialSession}
          >
            {children}
          </SessionContextProvider>
        </div>
      </body>
    </html>
  );
}
