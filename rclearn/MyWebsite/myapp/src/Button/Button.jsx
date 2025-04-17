import React from "react";
import styles from "./Button.module.css";

// External CSS
// function Button(){
//     return(
//         <button className="button">
//             Click Me!
//         </button>
//     );
// }

// Module CSS
function Button(){
    return(
        <button className={styles.button}>
            Click Me!
        </button>
    );
}

export default Button;