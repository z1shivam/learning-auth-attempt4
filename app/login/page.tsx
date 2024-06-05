import LoginForm from "@/components/LoginFrom";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth"
import {
  ArrowLeftIcon,
  GitHubLogoIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex justify-center items-center h-screen p-4 flex-col gap-4">
      <div className="w-full md:w-96 md:max-w-96  h-fit border-2 border-slate-300 px-6 py-4 rounded-md flex flex-col gap-4">
        <LoginForm />
        <p className="text-center text-gray-600">or,</p>
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button className="w-full">
            <GitHubLogoIcon className="w-4 mr-2" />
            Login with Github
          </Button>
        </form>
      </div>
      <Button asChild>
        <Link href={"/"}>
          <ArrowLeftIcon className=" w-4 mr-2" />
          Go Home
        </Link>
      </Button>
    </main>
  );
};

export default LoginPage;
