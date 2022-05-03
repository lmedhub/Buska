import React from "react";
import { sites } from "./checkBoxes/CheckBoxes";


export default function FormBusca() {

    const [redditIsChecked, setReddIsChecked] = React.useState(false)
    const [stackIsChecked, setStackIsChecked] = React.useState(false)
    const [YoutIsChecked, setYoutIsChecked] = React.useState(false)
    const [site, setSite] = React.useState("")

    const [userValue, setUserValue] = React.useState()

    function handleChangeR() {
        setReddIsChecked(!redditIsChecked)
        setSite("+site%3Areddit.com/")
    }
    function handleChangeS() {
        setStackIsChecked(!stackIsChecked)
        setSite("+site%3Astackoverflow.com/")
    }
    function handleChangeY() {
        setYoutIsChecked(!YoutIsChecked)
        setSite("+site%3Ayoutube.com/")
    }
    
    function getInputValue(event) {
        setUserValue(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        window.open("http://google.com/" + "search?q=" + userValue + site)
      }

    
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <div className="checkSites">    
                    <p>Sites para pesquisar</p>
                    <label>
                        <input defaultChecked
                        type="radio"
                        name="site"
                        id="radio1"
                        onChange={() => setSite("")}
                        ></input>
                        Qualquer
                    </label>
                    <label>
                        <input 
                        type="radio"
                        name="site"
                        id="radio2"
                        onChange={handleChangeR}
                        ></input>
                        Reddit
                    </label>
                    <label>
                        <input 
                        type="radio"
                        name="site"
                        id="radio3"
                        onChange={handleChangeS}
                        ></input>
                        StackOverFlow
                    </label>
                    <label>
                        <input 
                        type="radio"
                        name="site"
                        onChange={handleChangeY}
                        ></input>
                        Youtube
                    </label>
                </div>
                <p>Período de tempo</p>
                
                <div className="caixaPesquisa">
                    <input autoFocus
                        type="text"
                        name="caixa"
                        onChange={getInputValue}
                    ></input>
                    <input
                        type="submit"
                        name="pesquisar"
                        value="Pesquisar!"
                    ></input>
                </div>
            </form>
        </div>
    )
}