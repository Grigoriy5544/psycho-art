import "./style.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="header__logo">Psycho<span>Art</span></a>
                <div className="header__input--wrapper">
                    <label className="searchLabel" htmlFor="search"><i
                        className="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" id="search" placeholder="Search items and collections"/>
                </div>
                <div className="header__nav">
                    <ul className="header__list">
                        <li className="header__list--item">Collections</li>
                        <li className="header__list--item">Feature</li>
                        <li className="header__list--item">FAQ</li>
                    </ul>
                    <div className="header__nav-btn">Select Wallet</div>
                </div>
            </div>
        </header>
    );
};

export default Header;