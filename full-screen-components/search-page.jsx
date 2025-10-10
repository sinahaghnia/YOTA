import { faArrowLeft, faArrowRight , faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ContextData } from "../core components/context";

function Search(){

    const inputRef = useRef(null);

    useEffect(()=>{
        const openSearchInput = sessionStorage.getItem('openSearchInput');
        if(openSearchInput === 'true') inputRef.current.focus() ;
        sessionStorage.removeItem('openSearchInput')
    },[])

    const navigate = useNavigate();

    const {allDataCoins} = useContext(ContextData);

    const [userInputSearch , setUserInputSearch] = useState('');



     const allCurrenciesData = [
        {
            imageSrc:"/images/bitcoin-with-text.svg",
            name: 'bitcoin',
            marketCap: '2.2T'
        },

        {
            imageSrc:"/images/ethereum-with-text.svg",
            name: 'ethereum',
            marketCap: '517B'
        },

        {
            imageSrc:"/images/solana-logo-with-text.svg",
            name: 'solana',
            marketCap: '175B'
        },

        {
            imageSrc:"/images/xrp-with-text.svg",
            name: 'ripple',
            marketCap: '174B'
        },
        {
            imageSrc:"/images/tether2.png",
            name: 'tether',
            marketCap: '117B'
        },
        {
            imageSrc:"/images/tron-logo.svg",
            name: 'tron',
            marketCap: '31.78B'
        },
        {
            imageSrc:"/images/avalanch-logo.svg",
            name: 'avalanche-2',
            marketCap: '13.34B'
        },
        {
            imageSrc:"/images/litecoin-logo.svg",
            name: 'litecoin',
            marketCap: '8.4B'
        },
        {
            imageSrc:"/images/shiba-inu-logo-with-text.svg",
            name: 'shiba-inu',
            marketCap: '7.85B'
        },
        {
            imageSrc:"/images/ton-coin-logo.svg",
            name: 'the-open-network',
            marketCap: '6.96B'
        }   
    ];

    const filteredList = allCurrenciesData.filter(({name})=>{
        return name.toLowerCase().includes(userInputSearch.toLowerCase())
    })

    
    return(

        <div className="search-page">

            <div className="search-box">

                <div className="input-and-icon">
                    <FontAwesomeIcon icon={faArrowRight} className="fa-arrow-right" onClick={()=> navigate('/')} />
                    <input type="text"
                     placeholder="جست و جو در یوتا" 
                    onChange={(e)=> setUserInputSearch(e.target.value)}
                    ref={inputRef} />
                </div>

                <div className="suggestion-for-search">
                    <div>   در یک نگاه   </div>
                    <div>  ارز   </div>
                    <div>  دیجیتال  </div>
                    <div> بازار فارکس  </div>
                    <div> بازار جهانی </div>
                    <div> اخبار</div>
                    <div> تحلیل </div>
                    <div> پادکست </div>
                </div>

            </div>

            <div className="popular-search">
                <span> پرطرفدار  </span>
            </div>

            <div className="currencies-list-for-buy-or-sell">
            
                {filteredList.map(({imageSrc , name , marketCap} , index)=>{
            
                    return <div className="crypto-for-buy-or-sell" key={index}>
            
                        <div className="currency-logo-and-name"> 
                            <img src={imageSrc} alt="" />
                        </div>
            
                        <div className="currency-price-data">
            
                            <div className="coin-price"> {`$${allDataCoins[name]?.usd}`} </div>
                            <div className="coin-24h-change" style={{color: allDataCoins[name]?.usd_24h_change > 0 ? '#17c0eb': 'red'}}> {`${Math.round( allDataCoins[name]?.usd_24h_change * 10 ) / 10}%`} </div>
                            <div className="coin-market-cap"> {marketCap} </div>
            
                        </div>
            
                        <FontAwesomeIcon icon={faAngleLeft} style={{fontSize:'1.3rem' , color:'gray'}} />
            
                        </div>
                })}
            
            </div>

        </div>
    )
}

export default Search