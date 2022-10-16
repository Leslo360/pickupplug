/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pickup Plug Store</title>
        <meta name="description" content="The best plug in SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          alt="Pickup Plug Logo Gif"
          width={200}
          height={200}
          src={"/logoDark.gif"}
        />

        <div className="text-center">
          <h1>Congrats on making it this far </h1>
          <p className="text-xs text-gray-700 w-2/4 ml-auto mr-auto mb-2">
            It's not that easy to move to the next step, but we can make it
            simple{" "}
          </p>
          <div className="flex flex-col items-center">
            <input placeholder="Provide a secret phrase" className="p-2" />
            <button className="p-2 bg-white text-black m-3 text-sm">
              Login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
