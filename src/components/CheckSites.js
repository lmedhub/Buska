import React from "react";

export function CheckSites(props) {
    const [redditIsChecked, setReddIsChecked] = React.useState(false);
    const [stackIsChecked, setStackIsChecked] = React.useState(false);
    const [YoutIsChecked, setYoutIsChecked] = React.useState(false);

    function handleChangeR() {
        setReddIsChecked(!redditIsChecked);
        props.setSite("+site%3Areddit.com/");
    }
    function handleChangeS() {
        setStackIsChecked(!stackIsChecked);
        props.setSite("+site%3Astackoverflow.com/");
    }
    function handleChangeY() {
        setYoutIsChecked(!YoutIsChecked);
        props.setSite("+site%3Ayoutube.com/");
    }
    return (
        <div className="checkSites">
            <p>Sites para pesquisar</p>
            <label>
                <input
                    defaultChecked
                    type="radio"
                    name="site"
                    id="site1"
                    onChange={() => props.setSite("")}
                ></input>
                Qualquer
            </label>
            <label>
                <input
                    type="radio"
                    name="site"
                    id="site2"
                    onChange={handleChangeR}
                ></input>
                Reddit
            </label>
            <label>
                <input
                    type="radio"
                    name="site"
                    id="site3"
                    onChange={handleChangeS}
                ></input>
                StackOverFlow
            </label>
            <label>
                <input
                    type="radio"
                    name="site"
                    id="site4"
                    onChange={handleChangeY}
                ></input>
                Youtube
            </label>
        </div>
    );
}
