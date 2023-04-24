import { FC } from "react";

import styles from "./SectionTitle.module.scss"

const SectionTitle: FC<{text: string}> = ({text}) => {
    return (
        <h2 className={styles.title}>{text}</h2>
    );
};

export default SectionTitle;