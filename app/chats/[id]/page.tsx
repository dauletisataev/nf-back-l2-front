"use client";

import { ChatPage } from "@/components/chat-page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <ChatPage id={params.id as string} />
      <ToastContainer />
    </main>
  );
}
