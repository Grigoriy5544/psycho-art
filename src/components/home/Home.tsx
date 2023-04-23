import "./style.scss"
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
        <section className="home">
            <div className="container">
                <div className="home-left">
                    <h1 className="home__title">Create, Sell & Collect Your Own Creative NFT</h1>
                    <p className="home__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
                    </p>
                    <div className="home__buttons">
                        <BtnPrimary width="161" height="50" active="true" text="Explore Now"/>
                        <BtnPrimary width="117" height="50" text="Sell NFT"/>
                    </div>
                    <div className="reviews">
                        <div className="review__wrapper">
                            <h3 className="review-title">37k+</h3>
                            <p className="review-description">Artworks</p>
                        </div>
                        <div className="review__wrapper">
                            <h3 className="review-title">20k+</h3>
                            <p className="review-description">Artists</p>
                        </div>
                        <div className="review__wrapper">
                            <h3 className="review-title">99k+</h3>
                            <p className="review-description">Aucations</p>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <div className="column">
                        <img src={img1} className="column__image1"/>
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                    </div>
                    <div className="column">
                        <img src={img4} className="column__image1"/>
                        <img src={img5} alt=""/>
                        <img src={img6} alt=""/>
                    </div>
                    <div className="column column3">
                        <img src={img7} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;