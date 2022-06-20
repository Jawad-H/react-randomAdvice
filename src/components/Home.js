import { React, useState, useCallback } from 'react'
import axios from "axios";
import styled from "styled-components";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs"
function Home() {
    const [copy, setcopy] = useState(false);
    const [advice, setAdvice] = useState("");


    const fetchAdvice = useCallback(async () => {
        setcopy(false);
        const response = await axios.get('https://api.adviceslip.com/advice');
        setAdvice(response.data.slip.advice)
    })


    return (
        <Wrapper>
            <div className="container">
                <h1>Random Advice Generator</h1>
                <div className="box-data">
                    <p>
                        {advice}
                    </p>

                    {copy ? (<BsClipboardCheck className="clipboard checked" onClick={() => {
                        setcopy(false)
                        navigator.clipboard.writeText("");
                    }} />) :
                        (
                            <BsClipboard className="clipboard" onClick={() => {
                                navigator.clipboard.writeText(advice);
                                setcopy(true);

                            }}
                            />)}
                </div>
                <div className="form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="button">
                            <button className="btn" onClick={() => fetchAdvice()}> Generate</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`

.container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.clipboard{
    font-size:20px;
    cursor:pointer;
}

.box-data{
    margin-top:10px;
    border:1px solid black;
    border-radius: 10px 5px;
    padding: 10px;
    width:50%;
    background-color: lightgray;
}
p{
    font-size:20px;
}
h1{
    border:1px solid black;
    padding:5px;
}
.form{
    margin-top:20px;
}


button{
    padding:10px;
    background-color:skyblue;
    border:none;
    cursor:pointer;
    font-size:17px;
}
`

export default Home