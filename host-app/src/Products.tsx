import React from "react";

import { lazyLoad } from "./lazyLoad";

const Products = () => {
  //@ts-expect-error products is loaded remotely
  const Products = lazyLoad(() => import("products/ProductIndex"));
  return <Products />;
};

export default Products;
