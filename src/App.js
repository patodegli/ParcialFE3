import React from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import data from "./data/data.json";
import Historial from "./components/Historial";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nroPagina: 1,
      elemento: this.buscarElemento("1"),
      historial: []  
    };
  }

  agregarHistorial = (OpcionAgregada) => {
    let NuevoHistorial = this.state.historial;
    NuevoHistorial.push(OpcionAgregada);

    this.setState({ historial: NuevoHistorial });
  };

  componentDidUpdate(prevProps, prevState){
    if (this.state.elemento !== prevState.elemento) {
      this.setState({nroPagina: this.state.nroPagina + 1})
    }
  }

  buscarElemento(id){
    return data.find((elemento) => elemento.id === id)
  }

  alSeleccionarOpcion(op){
    const isPantallaFinal = this.state.elemento.opciones.a === "FIN"

    if (isPantallaFinal) {
      Swal.fire(
        'Has llegado al final!',
        'Debes saber que lo di todo!',
        'success'
      )
    } else {
      const idProximo = `${this.state.nroPagina + 1}${op}`
      const elProximo = this.buscarElemento(idProximo)
      this.setState({elemento: elProximo})
      this.agregarHistorial(op)
    }
  }

  render()
  {
    return (
      <div className="layout">
  
        <Display encabezado={this.state.elemento.historia}></Display>
        <div className="opciones">
            <Button opcion={this.state.elemento.opciones.a} alApretar={() => this.alSeleccionarOpcion("a")}>A</Button>
            <Button opcion={this.state.elemento.opciones.b} alApretar={() => this.alSeleccionarOpcion("b")}>B</Button>
        </div>
        <Historial historial={this.state.historial} />
      </div>
    );
  }
}

export default App;
