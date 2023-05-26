import "./Formulario.css";
import CampoTexto from "../../componentes/CampoTexto/CampoTexto";
import ListaOpciones from "../../componentes/ListaOpciones/ListaOpciones";
import Boton from "../../componentes/Boton/Boton";

const Formulario = (props) => {
  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("Manejar el Envio", event);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required />
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de Foto"
          required
        />
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
