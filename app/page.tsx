"use client";

import { ChatPage } from "@/components/chat-page";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";

let socket = null;

export default function Home() {
  // useEffect(() => {
  //   socket = io("http://localhost:3000");

  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });

  //   socket.on("hello", (arg) => {
  //     console.log(arg); // world
  //     toast(arg);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("disconnected");
  //   });
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToastContainer />
    </main>
  );
}
