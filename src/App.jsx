import { useEffect, useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const usuario = (e) => {
    setNomeUsuario(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0 10px",
          backgroundColor: "#0984e3",
        }}
      >
        <h2>Digite seu nome de Usuário Github:</h2>
        <input type="text" onBlur={usuario} />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && <Formulario />}

      <button
        onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}
        type="button"
      >
        Toggle Form
      </button>
      <Jsx />
  */}
    </>
  );
}

export default App;
