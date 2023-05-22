import styles from "./Header.module.scss"
import BtnPrimary from "../btn-primary/Btn-primary.tsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <a href="#" className={styles.logo}>Psycho<span>Art</span></a>
                <div>
                    <label className={styles.searchLabel} htmlFor="search"><i
                        className="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" id={styles.search} placeholder="Search items and collections"/>
                </div>
                <div className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}><a href="#">Collections</a></li>
                        <li className={styles.item}><a href="#">Feature</a></li>
                        <li className={styles.item}><a href="#">FAQ</a></li>
                    </ul>
                    <BtnPrimary width="171" height="50" active={true} text="Select Wallet"/>
                </div>
            </div>
        </header>
    );
};

export default Header;