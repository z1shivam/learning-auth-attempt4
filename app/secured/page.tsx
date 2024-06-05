import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Secured = () => {
  return (
    <main className="flex justify-center items-center flex-col h-screen gap-4">
      <p className="text-lg text-green-800 font-medium bg-green-200 border-2 border-green-500 px-4 py-3 rounded-md">
        Welcome to the secured route. You are authorised to visit this route.
      </p>
      <Button asChild>
        <Link href={'/'}>
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Go Back
        </Link>
      </Button>
    </main>
  );
};

export default Secured;
