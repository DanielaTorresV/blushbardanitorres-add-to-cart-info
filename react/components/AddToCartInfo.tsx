import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
//import ProductGroup from "./ProductGroup";
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css';

const AddToCartInfo = ({ blockClass } : {blockClass:  string}) => {
  const container = generateBlockClass(styles.container, blockClass),
        container__item = generateBlockClass(styles.container__item, blockClass),
        container__resumen = generateBlockClass(styles.container__resumen, blockClass),
        container__resumenTitle = generateBlockClass(styles.container__resumenTitle, blockClass)

  const productInfo = useProduct();
  const {orderForm: {
    items
  }} = useOrderForm();

  console.log("Product Info:", productInfo);

  return(
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x}/>
              </div>
              <div>
                <p>{item.name}</p>
                <p>Precio: ${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div className={container__resumen} >
        <div>
          <h3 className={container__resumenTitle}>¡Resumen de tu compra!</h3>
          <p>Tenemos {items.length} items en tu compra</p>
          <p>Total: Por Calcular</p>
        </div>
        <ButtonGroup blockClass={blockClass}/>
      </div>
    </div>
  )
}

export default AddToCartInfo
