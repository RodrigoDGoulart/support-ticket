import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Trow from "./components/table/table-row";

function App() {

  const [values, setValues] = useState();
  const [listTickets, setListTickets] = useState();

  console.log(listTickets);
  const handleChangeVariables = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () => {
    axios.post('http://localhost:3001/add', {
      desc: values.desc,
      profile: values.profile,
      priority: values.prio
    }).then((response) => {
      console.log(response)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3001/tickets").then((response) => {
      setListTickets(response.data);
  })
  }, [])

  return (
    <>
      <div className="logo">
        Support Ticket
      </div>
      <div className="input-field">
        <input type="text" name="desc" placeholder="Descrição" onChange={handleChangeVariables} className="desc"/>
        <input type="text" name="profile" placeholder="Perfil" onChange={handleChangeVariables} className="prof"/>
        <select name="prio" onChange={handleChangeVariables} className="form-control">
          <option disabled selected value>Prioridade</option>
          <option>Alta</option>
          <option>Média</option>
          <option>Baixa</option>
        </select>
        <div className="button-field">
          <button className="add" onClick={handleClickButton}>
            <a href="http://localhost:3000">
              <span className="material-icons">add</span>
              Adicionar
            </a>
          </button>
        </div>
      </div>
      <div className="tickets">
        <table>
          <tr>
            <th>Descrição</th>
            <th>Perfil</th>
            <th>Prioridade</th>
          </tr>
          {typeof listTickets !== "undefined" && listTickets.map((value) => {
            return <Trow 
            key={value.id} 
            listCard={listTickets} 
            setListCard={setListTickets} 
            id={value.id} 
            descricao={value.descricao} 
            nome={value.nome} 
            prioridade={value.prioridade}>
            </Trow>
          })}
        </table>
      </div>
    </>
  );
}

export default App;
