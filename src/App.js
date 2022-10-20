import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "        'Programação',",
      corPrimaria: "",
    },
    {
      nome: "        'Front-End',",
      corPrimaria: "",
    },
    {
      nome: "        'Data Science',",
      corPrimaria: "",
    },
    {
      nome: "        'Devops',",
      corPrimaria: "",
    },

    {
      nome: "        'UX e Design',",
      corPrimaria: "",
    },

    {
      nome: "        'Mobile',",
      corPrimaria: "",
    },
    {
      nome: "        'Inovação e Gestão'",
      corPrimaria: "",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
