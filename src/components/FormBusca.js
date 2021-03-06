import React from "react";
import { CheckDatas } from "./CheckDatas";
import { CheckSites } from "./CheckSites";

export default function FormBusca() {
  const [site, setSite] = React.useState("");
  const [data, setData] = React.useState("");

  const [userValue, setUserValue] = React.useState("");

  function getInputValue(event) {
    setUserValue(event.target.value);
  }

  function handleSubmit(event) {
    if (userValue == "") {
      console.log("input vazio")
    } else {
      window.open("http://google.com/" + "search?q=" + userValue + site + data);
    }
    event.preventDefault();
  }

  return (
    <div className="formSites">
      <form onSubmit={handleSubmit}>
        <CheckSites setSite={setSite}></CheckSites>
        <hr></hr>
        <CheckDatas setData={setData}></CheckDatas>
        <hr></hr>
        <div className="caixaPesquisa">
          <input
            autoFocus
            type="text"
            name="caixa"
            size="30"
            onChange={getInputValue}
          />
          <input type="submit" name="pesquisar" value="Pesquisar!"/>
        </div>
      </form>
    </div>
  );
}
