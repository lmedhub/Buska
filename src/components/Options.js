import React from "react";




export default function FormBusca() {



    return (
        <div className="Form">
            <form>
                <div className="checkSites">    
                    <p>Sites para pesquisar</p>
                    <label>
                        <input 
                        type="checkbox"
                        name="reddit"
                        ></input>
                        Reddit
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                        name="stack"
                        ></input>
                        StackOverFlow
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                        name="youtube"
                        ></input>
                        Youtube
                    </label>
                </div>
                <p>Período de tempo</p>
                <div className="checkData">

                    <label>
                        <input
                        type="checkbox"
                        name="tempo"
                        ></input>
                        Ultimo ano
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="tempo"
                        ></input>
                        Ultimos 6 meses
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="tempo"
                        ></input>
                        Ultimo mês
                    </label>
                </div>
                <div className="caixaPesquisa">
                    <input autoFocus
                        type="text"
                        name="caixa"
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