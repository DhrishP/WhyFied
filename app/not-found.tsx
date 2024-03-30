import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Component() {
  return (
    <>
    <Image
    src={"/images/meta.svg"}
    className="-z-10 left-10 top-40 absolute opacity-50"
    alt={""}
    width={80}
    height={80}
  />
  <Image
    src={"/images/meta2.svg"}
    className="-z-10 right-10 top-20 rotate-180 absolute opacity-50"
    alt={""}
    width={80}
    height={80}
  />
  <Image
    src={"/images/meta2.svg"}
    className="-z-10 top-[40vh] right-10 absolute opacity-50"
    alt={""}
    width={90}
    height={90}
  />
  <Image
    src={"/images/meta3.svg"}
    className="-z-10 top-[65vh] left-32 rotate-180 opacity-50 absolute"
    alt={""}
    width={100}
    height={100}
  />
  <Image
    src={"/images/meta4.svg"}
    className="-z-10 bottom-10  opacity-40 fixed "
    alt={""}
    width={100}
    height={100}
  />
    <div className="flex flex-col items-center justify-center w-full min-h-[400px] space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Uh oh! Something went wrong.</h1>
        <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Do not worry, our team has been notified. You can try refreshing the page or return to the
          <Link className="underline" href="#">
            homepage
          </Link>
          .
        </p>
      </div>
    </div>
    </>
  )
}

