import { useState } from "react";
import "./MiOrg.css";

const MiOrg = () => {
  // Estado - Hooks
  // useState
  //useState()

  console.log();

  //const [nombreVariable,funcionActualiza] = useState(valorInicial)
  const [nombre, actualizarNombre] = useState();
  const [mostrar, actualizarMostrar] = useState(true);
  const manejarClick = () => {
    console.log("Mostrar / Ocultar Elemento");
  };

  return (
    <>
      <section className="orgSection">
        <img src="/src/img/Btnadd.png" onClick={manejarClick} />
      </section>
      <h3 className="title">Mi Organización {nombre}</h3>
    </>
  );
};

export default MiOrg;
