import GetModels from "@/fetchers/get-models";
import React from "react";
import ShopComponent from "@/components/shop/ShopComponent";

const ShopPage = async () => {
  const models = await GetModels();

  return (
    <>
      <ShopComponent models={models} />
    </>
  );
};

export default ShopPage;
