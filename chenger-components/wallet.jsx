import { faAngleLeft, faArrowDown, faArrowDownUpAcrossLine, faArrowDownUpLock, faArrowsLeftRight, faArrowUp, faCaretDown, faEye, faEyeDropper, faEyeSlash, faHistory, faPlus, faSearch, faUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ContextData } from "../core components/context";


function Wallet(){

    const [isItHidden , setHiddenOrShow] = useState(false);
    const [isItTether , setKindeOfMoney] = useState(false);

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


    const {allDataCoins} = useContext(ContextData);

    return<>

    <div className="wallet-page">

        <section className="user-wallet">

            <div className="user-wallet-container">

                <div className="up-side-of-user-wallet">

                        <div className="switch-currency-and-hiddenility">
                            
                            <div className="show-or-hide-user-balance">

                                <span>موجودی کیف پول شما</span>

                                <div className="eye-or-eyeslash">
                                    <FontAwesomeIcon icon={ isItHidden ? faEyeSlash : faEye }onClick={()=> setHiddenOrShow(!isItHidden)}/>
                                </div>

                            </div>

                            <div className="switch-button-for-toman-or-tether">

                                <div className={`toman-option ${isItTether ? '':"active"} `}> تومان </div>
                                <input type="checkbox" className={`switch-button ${isItTether && "active"} `} onClick={()=>setKindeOfMoney(!isItTether)}/>
                                <div className={`tether-option ${isItTether ? 'active':""} `}> تتر </div>
                            </div>
                            
                        </div>

                        <div className="user-balance-amount">
                            {isItHidden ? <span>******</span> : <span>{isItTether ? '17.24 $ ':'T 2,000,000'}</span>} 
                        </div>

                </div>

                
                <div className="down-side-of-user-wallet">

                    <div className="deposit-and-widthdraw-cards">

                        <div>
                            <FontAwesomeIcon icon={faPlus} className="card-icons"/>
                            <span> واریز </span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faArrowDown} className="card-icons"/>
                            <span> برداشت </span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faUpRightFromSquare} className="card-icons"/>
                            <span> انتقال </span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faHistory} className="card-icons"/>
                            <span> تاریخچه </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section className="buying-and-selling-currencies">

            <div className="buy-list-search-currencies">

                <div className="search-box">
                    <input type="text" placeholder="جست و جوی ارز ها" />
                    <FontAwesomeIcon className="search-icon-in-input" icon={faSearch} />
                </div>

                <div className="buy-list-titel">

                    <div className="coin-name-titel" > 
                        <span > name </span>
                        <FontAwesomeIcon icon={faCaretDown} className="fa-Arrow-Down-Up-Across-Line"/> 
                    </div>

                    <div className="coin-name-price">
                        <span >price </span>
                        <FontAwesomeIcon icon={faCaretDown} className="fa-Arrow-Down-Up-Across-Line"/>
                    </div>

                    <div className="coin-name-24h-change">
                        <span > 24H% </span>
                        <FontAwesomeIcon icon={faCaretDown} className="fa-Arrow-Down-Up-Across-Line"/>
                    </div>

                    <div className="coin-name-marketcap"> 
                        <span > market cap </span> 
                        <FontAwesomeIcon icon={faCaretDown} className="fa-Arrow-Down-Up-Across-Line"/> 
                    </div>

                </div>

            </div>

            <div className="currencies-list-for-buy-or-sell">

                {allCurrenciesData.map(({imageSrc , name , marketCap} , index)=>{

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

        </section>

    </div>

    </>
}

export default Wallet