import { useEffect, useState } from "react";
import axios from 'axios';

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => {
            // console.log(response.data)
            setData(response.data[currency])
        })
    }, [currency])
    // console.log(data)

    return data;
}

export default useCurrencyInfo;