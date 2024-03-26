import React from "react";
import Image from "next/image";

const CoinImage = ({ width, height }: { width: number; height: number }) => {
  return (
    <Image
      className="animate-bounce "
      src={"/images/coin.png"}
      alt={"coin"}
      width={width}
      height={height}
    />
  );
};

export default CoinImage;
