import Image from "next/image";
// import Logo from "../public/2.svg";
import "./globals.css";

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
            alt="Pickup Plug"
            width={250}
            height={250}
            src="/logoDark.gif"
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
