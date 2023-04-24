import {useEffect, useRef, useState} from "react";
import styles from "./Colleaction.module.scss"
import SectionTitle from "../section-items/title/sectionTitle.tsx";
import SectionDescription from "../section-items/desciption/sectionDescription.tsx";
import BtnPrimary from "../btn-primary/Btn-primary.tsx";

import {colleaction} from "../../helpers/colleactionList.ts";
import card from "../card/Card.tsx";
import Card from "../card/Card.tsx";

const Colleaction = () => {

    const [page, setPage] = useState("art")

    return (
        <section className={styles.collection}>
            <div className="container">
                <SectionTitle text="Colleaction" />
                <SectionDescription text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <div className={styles.navbar}>
                    {/*<BtnPrimary width="288" height="40" text="Art" active={page === "art"}/>*/}
                    {/*<BtnPrimary width="288" height="40" text="Sport" active={page === "sport"}/>*/}
                    {/*<BtnPrimary width="288" height="40" text="Photograpy" active={page === "photograpy"}/>*/}
                    {/*<BtnPrimary width="288" height="40" text="Pattern" active={page === "pattern"}/>*/}
                    <div onClick={() => setPage("art")}
                         className={`${styles.btn} ${page === "art" ? styles.active : ""}`}>Art</div>
                    <div onClick={() => setPage("sport")}
                         className={`${styles.btn} ${page === "sport" ? styles.active : ""}`}>Sport</div>
                    <div onClick={() => setPage("photograpy")}
                         className={`${styles.btn} ${page === "photograpy" ? styles.active : ""}`}>Photograpy</div>
                    <div onClick={() => setPage("pattern")}
                         className={`${styles.btn} ${page === "pattern" ? styles.active : ""}`}>Pattern</div>
                </div>
                <div className={styles.cards}>
                    {colleaction[page].map((card, i) => {
                        return <Card key={i} image={card.image} author={card.author} name={card.name} price={card.price}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Colleaction;