import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import ProductGroup from "./ProductGroup";
import Totalizers from "./Totalizers";
import ButtonGroup from "./ButtonGroup";

const AddToCartInfo = () => {
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  }} = useOrderForm();

  console.log("Product Info:", productInfo);
  console.log("Order Form Info:", items, totalizers);

  return(
    <>
      <ProductGroup />
      <Totalizers />
      <ButtonGroup />
    </>
  )
}

export default AddToCartInfo
