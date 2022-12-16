import "./Button.css";

function Button(props){
    return(
        <div className={props.class}>
            <span>{props.name}</span>
            <div className="btn-icon1"><i className="fas fa-bars"></i></div>
            <div className="btn-icon2"><i className="fas fa-bars"></i></div>
            <div className="btn-skew"></div>
        </div>
    )
}
export default Button;