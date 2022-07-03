import { React, useState, useCallback } from 'react'
import axios from 'axios';
function useFetch() {
    const [copy, setcopy] = useState(false);
    const [advice, setAdvice] = useState("");

    const URL = 'https://api.adviceslip.com/advice';
    const fetchAdvice = useCallback(async () => {
        setcopy(false);
        const response = await axios.get(URL);
        setAdvice(response.data.slip.advice)
    });
    return [copy, setcopy, advice, setAdvice, fetchAdvice];

}

export default useFetch;