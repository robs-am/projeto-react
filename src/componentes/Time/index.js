import "./Time.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  return (
    <>
      <div>
        <section className="time" style={css}>
          <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
          {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo}/>)}
          
        </section>
      </div>
    </>
  );
};

export default Time;
