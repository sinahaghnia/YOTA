import { createContext , useState , useEffect } from "react";
import axios from "axios";

export const ContextData = createContext();

function DataProvider({children}){

                                
                            // Receive and store information about all coins and 



    const [allDataCoins , setAllDataCoins] = useState({});

    useEffect(()=>{

        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,tether,tron,avalanche-2,litecoin,shiba-inu,the-open-network&vs_currencies=usd&include_24hr_change=true').then((res)=>{
            setAllDataCoins(res.data)
        }).catch((error)=> console.log(`the api error :${error}`))

    },[])

                        // recive and store popular coin data for drawing chart 


    const [bitCoinDataChart , setBitCoinDataChar] = useState([]);
    const [ethereumDataChart , setEthereumDataChar] = useState([]);
    const [xrpDataChart , setXrpDataChar] = useState([]);
    const [solanaDataChart , setSolanaDataChart] = useState([]);


    useEffect(()=>{
        
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365').then((res)=>{
            const changeToObject = res.data.prices.map(( dayePrice )=>{
                return{
                        time: dayePrice[0],
                        price: dayePrice[1]
                    }
            })

            setBitCoinDataChar(changeToObject);
        });

        axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365').then((res)=>{
            const changeToObject = res.data.prices.map(( dayePrice )=>{
                return{
                        time: dayePrice[0],
                        price: dayePrice[1]
                    }
            })

            setEthereumDataChar(changeToObject);
        });

        axios.get('https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=365').then((res)=>{
            const changeToObject = res.data.prices.map(( dayePrice )=>{
                return{
                        time: dayePrice[0],
                        price: dayePrice[1]
                    }
            })

            setXrpDataChar(changeToObject);
        });

        axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=365').then((res)=>{
            const changeToObject = res.data.prices.map(( dayePrice )=>{
                return{
                        time: dayePrice[0],
                        price: dayePrice[1]
                    }
            })

            setSolanaDataChart(changeToObject);
        })


    },[])

    return(
        <>
        <ContextData.Provider value={{allDataCoins , bitCoinDataChart ,ethereumDataChart , xrpDataChart , solanaDataChart }}>
            {children}
        </ContextData.Provider>
        </>
    )

}

export default DataProvider