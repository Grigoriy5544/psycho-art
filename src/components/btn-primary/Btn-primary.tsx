import "./style.scss"

const BtnPrimary = ({width, height, active, text}) => {
    return (
        <div
            style={{width: width + "px", height: height + "px"}}
            className={`btn__primary ${active === "true" ? "btn__primary-active" : ""}`}>
            {text}
        </div>
    );
};

export default BtnPrimary;