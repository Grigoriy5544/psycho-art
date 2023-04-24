import {FC} from "react";

import styles from "./style.module.scss"

type BtnPrimaryProps = {
    width: string,
    height: string,
    active?: boolean,
    text: string
}

const BtnPrimary: FC<BtnPrimaryProps> = ({width, height, active = false, text}) => {
    return (
        <div
            style={{width: width + "px", height: height + "px"}}
            className={`${styles.btn__primary} ${active === true ? styles.active : ""}`}>
            {text}
        </div>
    );
};

export default BtnPrimary;