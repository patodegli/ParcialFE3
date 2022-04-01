
function Button(props) {
    return (
      <div className="opcion">
        <button className="botones" onClick={() => props.alApretar()}>
            {props.children}
        </button>
        <h2>{props.opcion}</h2>
      </div>
    );
  }
  
  export default Button;
