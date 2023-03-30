import React, { useState } from "react";
import DadosMacho from "./DadosMacho";
import DadosFemea from "./DadosFemea";
import DadosFilhotes from "./DadosFilhotes";
import DadosNascimento from "./DadosNascimento";
import useNinhada from "./hooks/useNinhada";
import "./NinhadaForm.css";

const NinhadaForm = ({ idExpositor = 44 }) => {
  const [dadosMacho, setDadosMacho] = useState({});
  const [dadosFemea, setDadosFemea] = useState({});
  const [dadosFilhotes, setFilhotes] = useState([]);
  const [dadosNascimento, setDadosNascimento] = useState({});

  const { isSubmitting, submitNinhada } = useNinhada();

  

 



  const handleNinhadaSubmit = (e) => {
    e.preventDefault();
    const ninhadaData = {
      dadosMacho,
      dadosFemea,
      dadosNascimento,
      dadosFilhotes,
    };
    submitNinhada(ninhadaData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleNinhadaSubmit}>
        <h2>Cadastro de Ninhada</h2>
      
        <div>
          <DadosFemea
            idExpositor={idExpositor}
            
            setDadosFemea={setDadosFemea}
          />
        </div>
        <div>
          <DadosMacho
            idExpositor={idExpositor}
            setDadosMacho={setDadosMacho}
          />
        </div>

        <div>
          <DadosNascimento
            dadosNascimento={dadosNascimento}
            setDadosNascimento={setDadosNascimento}
          />
        </div>
        <div>
          <DadosFilhotes
            dadosFilhotes={dadosFilhotes}
            setFilhotes={setFilhotes}
          />
          <div>
          <button type="submit" disabled={isSubmitting}>
            Enviar Ninhada
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NinhadaForm
