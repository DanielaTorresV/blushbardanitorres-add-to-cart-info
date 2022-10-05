import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
//import ProductGroup from "./ProductGroup";
import ButtonGroup from "./ButtonGroup";

const AddToCartInfo = () => {
  const productInfo = useProduct();
  const {orderForm: {
    items
  }} = useOrderForm();

  console.log("Product Info:", productInfo);

  return(
    <>
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index}>
              <div>
                <img src={item.imageUrls.at1x}/>
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
      </div>
      <ButtonGroup />
    </>
  )
}

export default AddToCartInfo
