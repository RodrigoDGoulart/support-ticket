import React, { useState } from "react";
import './App.css';
import axios from "axios";

function App() {

  const [values, setValues] = useState();

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

  return (
    <>
      <div className="logo">
        Support Ticket
      </div>
      <div className="input-field">
        <input type="text" name="desc" placeholder="Descrição" onChange={handleChangeVariables} className="desc"/>
        <input type="text" name="profile" placeholder="Perfil" onChange={handleChangeVariables} className="prof"/>
        <select name="prio" onChange={handleChangeVariables} className="form-control">
          <option>Alta</option>
          <option>Média</option>
          <option>Baixa</option>
        </select>
        <div className="button-field">
          <button className="add" onClick={handleClickButton}>
          <span class="material-icons">add</span>
            Adicionar
          </button>
          <button className="search">
            <span className="material-icons">search</span>
            Pesquisar
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
          <tr>
            <td>
              desc
            </td>
            <td>
              Perfil
            </td>
            <td>
            <p className="priority med">média</p>
            </td>
          </tr>
          <tr>
            <td>
              desc
            </td>
            <td>
              Perfil
            </td>
            <td>
              <p className="priority low">baixa</p>
            </td>
          </tr>
          <tr>
            <td>
              desc
            </td>
            <td>
              Perfil
            </td>
            <td>
              <p className="priority high">alta</p>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
