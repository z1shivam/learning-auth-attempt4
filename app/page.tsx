"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type currentStateType = "loading" | "loggedIn" | "loggedOut";

const ButtonPanel = ({ status }: { status: currentStateType }) => {
  if (status === "loading") return <p>Loading...</p>;
  if (status === "loggedIn") return <Button>Sign Out</Button>;
  return (
    <div className="flex gap-4">
      <Button asChild>
        <Link href={"/login"}>Sign In</Link>
      </Button>
      <Button asChild>
        <Link href={"/signup"}>Sign Up</Link>
      </Button>
    </div>
  );
};

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<currentStateType>("loggedOut");
  return (
    <main className="flex justify-center items-center h-screen gap-6 flex-col">
      <p className="text-lg font-medium">
        <span className="text-indigo-700">Your Current Status: </span>
        <span>{isLoggedIn}</span>
      </p>
      <div className="border-2 bg-slate-100 border-slate-300 px-12 py-6 rounded-md flex items-center justify-center">
        <ButtonPanel status={isLoggedIn} />
      </div>
      <div>
        <Link href={"/secured"}>
          <Button>Visit Secured Route</Button>
        </Link>
      </div>
    </main>
  );
}
