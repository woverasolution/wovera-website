import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-7">
      <Image src="/images/lion-404.png" alt="404" width={400} height={400} />
      <Link href="/">
        <Button variant={"outline"} className="mt-2 rounded-full" size={"lg"}>
          Go Home <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default page;
