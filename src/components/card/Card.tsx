import styles from "./Card.module.scss"
import BtnPrimary from "../btn-primary/Btn-primary.tsx";

const Card = ({image, price, name, author}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="" className={styles.img}/>
            <div className={styles.info}>
                <div className={styles.left}>
                    <p className={styles.author}>{author}</p>
                    <p className={styles.primary}>{name}</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.bid}>Current Bid</p>
                    <p className={styles.primary}>{price} ETH</p>
                </div>
            </div>
            <BtnPrimary width="337" height="50" text="Place a bid" active={true}/>
        </div>
    );
};

export default Card;