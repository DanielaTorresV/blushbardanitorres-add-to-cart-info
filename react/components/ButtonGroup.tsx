import React from "react";
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css';

const ButtonGroup = ({ blockClass } : {blockClass:  string}) => {
const container__buttons = generateBlockClass(styles.container__buttons, blockClass),
      buttons__ancor = generateBlockClass(styles.buttons__ancor, blockClass),
      button = generateBlockClass(styles.button, blockClass)

  return(
    <div className={container__buttons}>
      <div>
        <a href="/checkout" className={buttons__ancor}>
          CHECK OUT
        </a>
        <a href="/" className={buttons__ancor}>
          VER CARRITO
        </a>
      </div>
      <div>
        <button className={button}>
          CONTINÚA COMPRANDO
        </button>
      </div>
    </div>

  )
}

export default ButtonGroup
