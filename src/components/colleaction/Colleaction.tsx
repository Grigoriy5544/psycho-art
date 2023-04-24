import {useState} from "react";
import styles from "./Colleaction.module.scss"
import SectionTitle from "../section-items/title/sectionTitle.tsx";
import SectionDescription from "../section-items/desciption/sectionDescription.tsx";

import {colleaction} from "../../helpers/colleactionList.ts";
import Card from "../card/Card.tsx";

const Colleaction = () => {

    const [page, setPage] = useState(0)

    return (
        <section className={styles.collection}>
            <div className="container">
                <SectionTitle text="Colleaction" />
                <SectionDescription text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <div className={styles.navbar}>
                    <div onClick={() => setPage(0)}
                         className={`${styles.btn} ${page === 0 ? styles.active : ""}`}>Art</div>
                    <div onClick={() => setPage(1)}
                         className={`${styles.btn} ${page === 1 ? styles.active : ""}`}>Sport</div>
                    <div onClick={() => setPage(2)}
                         className={`${styles.btn} ${page === 2 ? styles.active : ""}`}>Photograpy</div>
                    <div onClick={() => setPage(3)}
                         className={`${styles.btn} ${page === 3 ? styles.active : ""}`}>Pattern</div>
                </div>
                <div className={styles.cards}>
                    {colleaction[page].map((card, i:number) => {
                        return <Card key={i} image={card.image} author={card.author} name={card.name} price={card.price}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Colleaction;