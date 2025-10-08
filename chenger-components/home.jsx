import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowDown, faArrowTrendDown, faArrowTrendUp, faPlus, faUpDown } from "@fortawesome/free-solid-svg-icons";


function Home(){

    const logos = [
        "/images/bitcoin-logo.svg",
        "/images/ethereum-logo.svg",
        "/images/xrp-logo.svg",
        "/images/tether-logo.svg",
        "/images/solana-logo.svg",
        "/images/shiba-inu-logo.svg",
    ]; 

    const [current , setCurrent] = useState(0);

    const slides = [
        '/images/poster-one.png',
        '/images/poster-two.png',
        '/images/poster-three.png'
    ];

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrent( abas => (abas + 1) % slides.length )
        },5500)
    },[])

    return(
        <>
        <div className="home-page">

            <section className="wellcome-and-sign-up">

                <div className="wellcome">
                    <h1 className="wellcome-h1-titel"> به <span>YOTA</span> خوش آمدید </h1>
                    <p className="wellcome-p-titel">برای  استفاده از خدمات ما لطفا وارد حساب کاربری خود شوید</p>
                </div>

                <div className="sign-up-or-login">
                    <button className="login"> ورود </button>
                    <button className="sign-up"> ثبت نام </button>
                </div>

            </section>

            <section className="crypto-scroll-logos-container">

                <div className="crypto-scroll-logos">

                    {[...logos , ...logos].map((imgSource , index)=>{
                    
                    return <img src={imgSource} alt="crypto image" key={index} className="all-images" />
                
                })}

                </div>

            </section>

            <section className="posters-slides-section">

                <div className="Animated-poster">
                    <img src={slides[current]} alt="posters" className="poster-img" />

                    <div className="change-poster-buttons">
                        <span style={{backgroundColor: current === 0 && '#7e7e7ead'}}></span>
                        <span style={{backgroundColor: current === 1 && '#7e7e7ead'}}></span>
                        <span style={{backgroundColor: current === 2 && '#7e7e7ead'}}></span>         
                    </div>
                </div>   

            </section>

            {/* <section className="multi-part-currencies-informatios">

                <div className="the-header-titels">
                    <div className="the-hotest-titel"> <span>داغ ترین ها</span> </div>
                    <div className="the-favorite-titel"> <span> مورد علاقه ها </span> </div>
                    <div className="the-newest-titel"> <span>جدید ترین ها</span> </div>
                </div>

                <div className="the-hottest-coins-part">

                </div>

                <div className="the-favorite-coins-part">

                </div>

                <div className="the-newest-coins-part">

                </div>

            </section> */}

            
        </div>
        </>
    )
}

export default Home