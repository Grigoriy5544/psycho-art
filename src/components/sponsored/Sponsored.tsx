import "./style.scss"

import binanceLogo from "./../../img/sponsors/Binance_logo logo.svg"
import ethereumLogo from "./../../img/sponsors/Ethereum logo.svg"
import blockchainLogo from "./../../img/sponsors/Logo_of_Blockchain.io logo.svg"

const Sponsored = () => {
    return (
        <div className="sponsors">
            <div className="container">
                <div className="sponsor">
                    <img src={binanceLogo} alt=""/>
                </div>
                <div className="sponsor">
                    <img src={ethereumLogo} alt=""/>
                </div>
                <div className="sponsor">
                    <img src={blockchainLogo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Sponsored;