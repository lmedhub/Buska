import React from "react";

export function CheckDatas(props) {
    const [umMesChecked, setUmMesIsChecked] = React.useState(false);
    const [seisMesesChecked, setSeisMesesChecked] = React.useState(false);
    const [umAnoChecked, setUmAnoChecked] = React.useState(false);

    function handleChange1() {
        setUmMesIsChecked(!umMesChecked);
        props.setData("&tbs=qdr:m1");
    }
    function handleChange6() {
        setSeisMesesChecked(!seisMesesChecked);
        props.setData("&tbs=qdr:m6");
    }
    function handleChange12() {
        setUmAnoChecked(!umAnoChecked);
        props.setData("&tbs=qdr:m12");
    }
    return (
        <div>
            <p>Data</p>
            <label>
                <input
                    defaultChecked
                    type="radio"
                    name="data"
                    id="data1"
                    onChange={() => props.setData("")}
                ></input>
                Qualquer
            </label>
            <label>
                <input
                    type="radio"
                    name="data"
                    id="data1"
                    onChange={handleChange1}
                ></input>
                Um mês
            </label>
            <label>
                <input
                    type="radio"
                    name="data"
                    id="data6"
                    onChange={handleChange6}
                ></input>
                Seis meses
            </label>
            <label>
                <input
                    type="radio"
                    name="data"
                    id="data12"
                    onChange={handleChange12}
                ></input>
                Um ano
            </label>
        </div>
    );
}
