import styles from './Footer.module.scss';
import youtube from "../../img/icons/youtube.svg"
import discord from "../../img/icons/discord.svg"
import instagram from "../../img/icons/instagram.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.groups}>
                    <div className={styles.group}>
                        <a href="#" className={styles.logo}>Psycho<span>Art</span></a>
                        <p className={styles.text}>The best NFT marketplace website in the world and feel your
                            experience in selling or buy our work</p>
                    </div>
                    <div className={styles.group}>
                        <a className={styles.group__title}>About</a>
                        <a className={styles.text}>Product</a>
                        <a className={styles.text}>Resource</a>
                        <a className={styles.text}>Term & Condition</a>
                        <a className={styles.text}>FAQ</a>
                    </div>
                    <div className={styles.group}>
                        <a className={styles.group__title}>Company</a>
                        <a className={styles.text}>Our Team</a>
                        <a className={styles.text}>Partner With Us</a>
                        <a className={styles.text}>Privacy & Policy</a>
                    </div>
                    <div className={styles.group}>
                        <a className={styles.group__title}>Contact</a>
                        <a className={styles.text} href="tel:+0123456789">+012 3456789</a>
                        <a className={styles.text} href="mailto:adorableprogrammer@gmail.com">adorableprogrammer@gmail.com</a>
                        <div className={styles.socials}>
                            <img src={youtube} alt=""/>
                            <img src={discord} alt=""/>
                            <img src={instagram} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;