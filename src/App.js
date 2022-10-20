import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "        'Programação'",
      corPrimaria: "", corSecundaria:'#D9F7E9'
      ,
    },
    {
      nome: "        'Front-End'",
      corPrimaria: "",
      corSecundaria:'#D9F7E9',
    },
    {
      nome: "        'Data Science'",
      corPrimaria: "",
      corSecundaria:'#D9F7E9',

    },
    

    {
      nome: "        'Devops'",
      corPrimaria: "",
      corSecundaria:'#D9F7E9'
    
    },


    {
      nome: "        'UX e Design'",
      corPrimaria: "",
      corSecundaria:'#D9F7E9'
      
    },

    {
      nome: "        'Mobile'",
      corPrimaria: "",
      corSecundaria:'#D9F7E9',
    
    },
    {
      nome: "        'Inovação e Gestão'",
      corPrimaria: "",
      corSecundaria:'#D9F7E9'
    
    } 
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
