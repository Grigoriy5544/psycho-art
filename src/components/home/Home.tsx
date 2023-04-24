import styles from "./Home.module.scss"
import BtnPrimary from "../btn-primary/Btn-primary.tsx";

import img1 from "./../../img/home_heroi_image/1.png"
import img2 from "./../../img/home_heroi_image/2.png"
import img3 from "./../../img/home_heroi_image/3.png"
import img4 from "./../../img/home_heroi_image/4.png"
import img5 from "./../../img/home_heroi_image/5.png"
import img6 from "./../../img/home_heroi_image/6.png"
import img7 from "./../../img/home_heroi_image/7.png"

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={`container ${styles.container}`}>
                <div className={styles.homeLeft}>
                    <h1 className={styles.homeTitle}>Create, Sell & Collect Your Own Creative NFT</h1>
                    <p className={styles.homeDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
                    </p>
                    <div className={styles.home__buttons}>
                        <BtnPrimary width="161" height="50" active={true} text="Explore Now"/>
                        <BtnPrimary width="117" height="50" text="Sell NFT"/>
                    </div>
                    <div className={styles.reviews}>
                        <div>
                            <h3 className={styles.reviewTitle}>37k+</h3>
                            <p className={styles.reviewDescription}>Artworks</p>
                        </div>
                        <div>
                            <h3 className={styles.reviewTitle}>20k+</h3>
                            <p className={styles.reviewDescription}>Artists</p>
                        </div>
                        <div>
                            <h3 className={styles.reviewTitle}>99k+</h3>
                            <p className={styles.reviewDescription}>Aucations</p>
                        </div>
                    </div>
                </div>
                <div className={styles.homeRight}>
                    <div className={styles.column}>
                        <img src={img1} alt=""/>
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                    </div>
                    <div className={styles.column}>
                        <img src={img4} alt=""/>
                        <img src={img5} alt=""/>
                        <img src={img6} alt=""/>
                    </div>
                    <div className={`${styles.column} ${styles.column3}`}>
                        <img src={img7} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;