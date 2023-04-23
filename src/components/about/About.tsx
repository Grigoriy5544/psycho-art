import "./style.scss"
import SectionTitle from "../section-items/title/sectionTitle.tsx";
import SectionDescription from "../section-items/desciption/sectionDescription.tsx";
import img from "../../img/about-image.png"
import BtnPrimary from "../btn-primary/Btn-primary.tsx";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <SectionTitle text="About Us" />
                <SectionDescription text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <div className="about__wrapper">
                    <img src={img} alt="" className="about__image"/>
                    <div className="about__info">
                        <h3 className="about__info-title">Get Popular NFT</h3>
                        <p className="about__info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <BtnPrimary active="true" text="Show more" width="154" height="50"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;