import React from "react";
import { Link } from "vtex.render-runtime"
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css';

const ButtonGroup = ({ blockClass } : {blockClass:  string}) => {
const container__buttons = generateBlockClass(styles.container__buttons, blockClass),
      button__redirect = generateBlockClass(styles.button__redirect, blockClass)

  return(
    <div className={container__buttons}>
      <Link to="/">
          <button className={button__redirect}>
            CONTINÚA COMPRANDO
          </button>
      </Link>
       <Link to="/checkout">
          <button className={button__redirect}>
            FINALIZA TU COMPRA
          </button>
      </Link>
    </div>

  )
}

export default ButtonGroup
