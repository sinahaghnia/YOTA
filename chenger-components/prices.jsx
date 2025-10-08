import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAnglesDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { ResponsiveContainer,LineChart,Line,YAxis } from "recharts"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../core components/context";


function Prices(){


    const {allDataCoins} = useContext(ContextData);
    const { bitCoinDataChart ,ethereumDataChart , xrpDataChart , solanaDataChart} = useContext(ContextData)

    return(
        <>
        <section className="popular-currencies">

            <div className="popular-titel">
                <h1> محبوب ترین ها </h1>
            </div>

            <div className="popular-currencies-list">

                <div className="bitcoin">

                     <div className="bitcoin-introduction">
                        <img src="/images/bitcoin-logo.svg" alt="" /> <span> bitcoin </span> 
                    </div>

                    <div className="bitcoin-price-information" >
                        <span className="live-price"> {`$${allDataCoins.bitcoin?.usd}`} </span>
                        <span className="profit-or-loss" style={{color:allDataCoins.bitcoin?.usd_24h_change > 0 ? '#17c0eb':'red'}}> <FontAwesomeIcon icon={allDataCoins.bitcoin?.usd_24h_change > 0 ? faAngleUp: faAngleDown}/> {`${Math.round(allDataCoins.bitcoin?.usd_24h_change * 100) / 100}%`} </span>
                    </div>

                    <div className="bitcoin-timeline-chart">
                        <ResponsiveContainer>
                            <LineChart data={bitCoinDataChart}>
                                <YAxis domain={['dataMin', 'dataMax']} hide />
                                <Line type='monotone' dataKey='price' stroke={allDataCoins.bitcoin?.usd_24h_change > 0 ? '#17c0eb':'red'} strokeWidth={2} dot={false}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="ethereum">

                     <div className="ethereum-introduction">
                        <img src="/images/ethereum-logo.svg" alt="" style={{height:'23px' , width:'23px', backgroundColor:'white',borderRadius:'50%',padding:'2px 0px'}} /> <span> ethereum </span> 
                    </div>

                    <div className="ethereum-price-information" >
                        <span className="live-price"> {`$${allDataCoins.ethereum?.usd}`} </span>
                        <span className="profit-or-loss" style={{color:allDataCoins.ethereum?.usd_24h_change > 0 ? '#17c0eb':'red'}}> <FontAwesomeIcon icon={allDataCoins.ethereum?.usd_24h_change > 0 ? faAngleUp: faAngleDown}/> {`${Math.round(allDataCoins.ethereum?.usd_24h_change * 100) / 100}%`} </span>
                    </div>

                    <div className="ethereum-timeline-chart">
                        <ResponsiveContainer>
                            <LineChart data={ethereumDataChart}>
                                <YAxis domain={['dataMin', 'dataMax']} hide />
                                <Line type='monotone' dataKey='price' stroke={allDataCoins.ethereum?.usd_24h_change > 0 ? '#17c0eb':'red'} strokeWidth={2} dot={false}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="tether">

                     <div className="tether-introduction">
                        <img src="/images/solana-logo.svg" alt="" /> <span> solana </span> 
                    </div>

                    <div className="tether-price-information" >
                        <span className="live-price"> {`$${allDataCoins.solana?.usd}`} </span>
                        <span className="profit-or-loss" style={{color:allDataCoins.solana?.usd_24h_change > 0 ? '#17c0eb':'red'}}> <FontAwesomeIcon icon={allDataCoins.solana?.usd_24h_change > 0 ? faAngleUp: faAngleDown}/> {`${Math.round(allDataCoins.solana?.usd_24h_change * 100) / 100}%`} </span>
                    </div>

                    <div className="tether-timeline-chart">
                        <ResponsiveContainer>
                            <LineChart data={solanaDataChart}>
                                <YAxis domain={['dataMin', 'dataMax']} hide />
                                <Line type='monotone' dataKey='price' stroke={allDataCoins.solana?.usd_24h_change > 0 ? '#17c0eb':'red'} strokeWidth={2} dot={false}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="xrp">

                     <div className="xrp-introduction">
                        <img src="/images/xrp-logo.svg" alt="xrp" style={{height:'23px' , width:'23px', backgroundColor:'white',borderRadius:'50%',padding:'2px'}}/> <span> xrp </span> 
                    </div>

                    <div className="xrp-price-information" >
                        <span className="live-price"> {`$${allDataCoins.ripple?.usd}`} </span>
                        <span className="profit-or-loss" style={{color:allDataCoins.ripple?.usd_24h_change > 0 ? '#17c0eb':'red'}}> <FontAwesomeIcon icon={allDataCoins.ripple?.usd_24h_change > 0 ? faAngleUp: faAngleDown}/> {`${Math.round(allDataCoins.ripple?.usd_24h_change * 100) / 100}%`} </span>
                    </div>

                    <div className="xrp-timeline-chart">
                        <ResponsiveContainer>
                            <LineChart data={xrpDataChart}>
                                <YAxis domain={['dataMin', 'dataMax']} hide />
                                <Line type='monotone' dataKey='price' stroke={allDataCoins.ripple?.usd_24h_change > 0 ? '#17c0eb':'red'} strokeWidth={2} dot={false}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </div>

        </section>

        <section className="all-currencies">

                <div className="all-currencies-titel">
                <h1>تمامی ارز ها</h1>
            </div>

            <div className="all-currencies-list">

                    <div className="header-list"> 
                        <span> <FontAwesomeIcon icon={faAnglesDown}/> name </span>
                        <span> <FontAwesomeIcon icon={faAnglesDown} /> price </span>
                        <span> <FontAwesomeIcon icon={faAnglesDown} /> marketcap </span>
                    </div>

                <div className="body-list">

                    <div className="row-one">
                        <div> <img src="/images/bitcoin-with-text.svg"/> </div>
                        <span > {`$${allDataCoins.bitcoin?.usd}`} </span> 
                        <span className="body-list-market-cap"> $2.3T </span>
                    </div>

                    <div className="row-two">
                        <div> <img src="/images/ethereum-with-text.svg"/> </div> 
                        <span> {`$${allDataCoins.ethereum?.usd}`} </span> 
                        <span className="body-list-market-cap"> $517B </span> 
                    </div>

                    <div className="row-three">
                        <div> <img src="/images/xrp-with-text.svg"/> </div>
                        <span> {`$${allDataCoins.ripple?.usd}`} </span> 
                        <span className="body-list-market-cap"> $175B </span>
                    </div>

                    <div className="row-four">
                        <div> <img src="/images/tether2.png"/> </div> 
                        <span> {`$${allDataCoins.tether?.usd}`} </span> 
                        <span className="body-list-market-cap"> $174B </span>
                    </div>

                    <div className="row-five">
                        <div> <img src="/images/solana-logo-with-text.svg" style={{width:'65px'}}/> </div>
                        <span> {`$${allDataCoins.solana?.usd}`} </span> 
                        <span className="body-list-market-cap"> $117B </span> 
                    </div>

                    <div className="row-six">
                        <div> <img src="/images/tron-logo.svg"/> </div> 
                        <span> {`$${allDataCoins.tron?.usd}`} </span> 
                        <span className="body-list-market-cap"> $31B </span> 
                    </div>

                    <div className="row-seven">
                        <div> <img src="/images/avalanch-logo.svg" style={{width:'65px'}}/></div>
                        <span> {`$${allDataCoins['avalanche-2']?.usd}`} </span> 
                        <span className="body-list-market-cap"> $13B </span> 
                    </div>

                    <div className="row-eight"> 
                        <div> <img src="/images/litecoin-logo.svg"/> </div>
                         <span> {`$${allDataCoins.litecoin?.usd}`} </span> 
                        <span className="body-list-market-cap"> $8.4B </span> 
                    </div>

                    <div className="row-nine"> 
                        <div> <img src="/images/shiba-inu-logo-with-text.svg" style={{width:'65px'}}/>  </div> 
                        <span> {`$${allDataCoins['shiba-inu']?.usd}`} </span> 
                        <span className="body-list-market-cap"> $7B </span> 
                    </div>

                    <div className="row-ten"> 
                        <div> <img src="/images/ton-coin-logo.svg" style={{width:'50px'}}/> </div>
                        <span> {`$${allDataCoins['the-open-network']?.usd}`} </span> 
                        <span className="body-list-market-cap"> $6.9B </span> 
                    </div>

                </div>



            </div>

        </section>
        
        </>
    )
}

export default Prices