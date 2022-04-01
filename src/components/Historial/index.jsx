import React from "react";

export default class Historial extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <h2 className="recordatorio">
          <u>Historial:</u>
        </h2>

        <ol className="opciones">
          {this.props.historial.map((opcion, index) => 
            <li key={index + 1}>
            <b>{opcion}</b>
            </li>
          )}
        </ol>
      </>
    );
  }
}
