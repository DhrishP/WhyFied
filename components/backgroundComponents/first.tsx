import React from 'react'
import Image from 'next/image'
const FirstBgComp = () => {
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
  </>
  )
}

export default FirstBgComp
