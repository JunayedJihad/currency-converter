import {useEffect,useState} from 'react';

const useCurrency = (currency) => {
     let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

     const[data,setData] =useState({})

     useEffect(() =>{
          fetch(url)
               .then(response=>response.json())
               .then(response =>setData(response[currency]))
     },[currency])

     return data

};

export default useCurrency;