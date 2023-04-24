import styles from "./Sponsored.module.scss"

import binanceLogo from "./../../img/sponsors/Binance_logo logo.svg"
import ethereumLogo from "./../../img/sponsors/Ethereum logo.svg"
import blockchainLogo from "./../../img/sponsors/Logo_of_Blockchain.io logo.svg"

const Sponsored = () => {
    return (
        <div className={styles.sponsors}>
            <div className={`container ${styles.container}`}>
                <img src={binanceLogo} alt=""/>
                <img src={ethereumLogo} alt=""/>
                <img src={blockchainLogo} alt=""/>
            </div>
        </div>
    );
};

export default Sponsored;