import styles from "./FeaturedArtworks.module.scss"
import SectionTitle from "../section-items/title/sectionTitle.tsx";
import SectionDescription from "../section-items/desciption/sectionDescription.tsx";
import {featuredArtworksList} from "../../helpers/featuredArtworksList.ts";
import Card from "../card/Card.tsx";

const FeaturedArtworks = () => {

    return (
        <section className={styles.collection}>
            <div className="container">
                <SectionTitle text="Featured Artworks"/>
                <SectionDescription text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <div className={styles.cards}>
                    {featuredArtworksList.map((card, i: number) => {
                        return <Card key={i} image={card.image} author={card.author} name={card.name}
                                     price={card.price}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArtworks;