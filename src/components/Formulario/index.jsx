import React, { useState } from "react";

const Formulario = () => {
  let [notaA, setNotaA] = useState();
  let [notaB, setNotaB] = useState();
  let [notaC, setNotaC] = useState();

  let [nome, setNome] = useState("");

  const renderizaResultado = () => {
    const soma = notaA + notaB + notaC;
    const mediaFinal = soma / 3;

    if (mediaFinal >= 7) {
      return <p>Parabéns {nome}, voce foi aprovado</p>;
    } else {
      return <p>Que pena {nome}, voce foi reprovado</p>;
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Seu nome"
          onChange={({ target }) => setNome(target.value)}
        />
        <input
          type="number"
          placeholder="Nota matéria A"
          onChange={(evento) => setNotaA(parseInt(evento.target.value))}
        />
        <input
          type="number"
          placeholder="Nota matéria B"
          onChange={(evento) => setNotaB(parseInt(evento.target.value))}
        />
        <input
          type="number"
          placeholder="Nota matéria C"
          onChange={(evento) => setNotaC(parseInt(evento.target.value))}
        />
      </form>
      <p>
        nota matéria A: {notaA} <br />
      </p>
      <p>
        nota matéria B: {notaB} <br />
      </p>
      <p> nota matéria C: {notaC} </p>
      {renderizaResultado()}
    </div>
  );
};

export default Formulario;
