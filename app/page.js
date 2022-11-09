/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { IoIosRocket } from "react-icons/io";
import styles from "./Home.module.css";
import Link from "next/link";
import LogoGif from "../images/logoDark.gif";
import Welcome from "../components/Welcome";
export default function Home() {
  return (
    <div className="flex flex-col items-center content-center justify-between">
      <Welcome />
    </div>
  );
}
