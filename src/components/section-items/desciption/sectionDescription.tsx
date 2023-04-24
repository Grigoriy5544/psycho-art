import {FC} from "react"

import styles from "./SectionDescription.module.scss"

const SectionDescription: FC<{ text: string }> = ({text}) => {
    return (
        <p className={styles.description}>{text}</p>
    );
};

export default SectionDescription
