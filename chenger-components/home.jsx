import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowDown, faArrowTrendDown, faArrowTrendUp, faPlus, faUpDown } from "@fortawesome/free-solid-svg-icons";


export function getImages(fileName){

        return`${import.meta.env.BASE_URL}images/${fileName}`
    }

function Home(){


    const logos = [
        getImages('bitcoin-logo.svg'),
        getImages('ethereum-logo.svg'),
        getImages('xrp-logo.svg'),
        getImages('tether-logo.svg'),
        getImages('solana-logo.svg'),
        getImages('shiba-inu-logo.svg')
    ]; 

    const [current , setCurrent] = useState(0);

    const slides = [
        getImages('poster-one.png'),
        getImages('poster-two.png'),
        getImages('poster-three.png')
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

            
        </div>
        </>
    )
}

export default Home