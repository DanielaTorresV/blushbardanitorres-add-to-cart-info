import React from "react";
import { Link } from "vtex.render-runtime"
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css';

const ButtonGroup = ({ blockClass } : {blockClass:  string}) => {
const container__buttons = generateBlockClass(styles.container__buttons, blockClass),
      container__buttonsAncor = generateBlockClass(styles.container__buttonsAncor, blockClass),
      buttons__ancor = generateBlockClass(styles.buttons__ancor, blockClass),
      button = generateBlockClass(styles.button, blockClass)

  return(
    <div className={container__buttons}>
      <div className={container__buttonsAncor}>
        <a href="/checkout" className={buttons__ancor}>
          FINALIZA TU COMPRA
        </a>
      </div>
       <Link to="/">
        <div>
          <button className={button}>
            CONTINÚA COMPRANDO
          </button>
        </div>
      </Link>
    </div>

  )
}

export default ButtonGroup
