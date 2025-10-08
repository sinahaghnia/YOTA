import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalculator, faChartSimple, faDashboard, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { Router, useNavigate } from "react-router-dom"
import { useState } from "react";

function Footer(){

   const navigate = useNavigate();

   const [isItActive , setActivity] = useState({
      home: false,
      price: false,
      wallet: false
   });

     return(
        <>
      <footer>
         <div className="footer-access">

            <div className={`home ${isItActive.home && "active"}`} onClick={()=> {
               navigate('/');
               setActivity({home: true , price: false , wallet: false});
            }}>

               <FontAwesomeIcon icon={faHome} style={{fontSize:'2rem'}} />
               <span>خانه</span>
            </div>

            <div className={`price-footer-access ${isItActive.price && "active"}`} onClick={()=> {
               navigate('/price');
               setActivity({home: false , price: true , wallet: false});
            }}>

               <FontAwesomeIcon icon={faChartSimple} style={{fontSize:'2rem'}} />
               <span>قیمت ها</span>
            </div>

            <div className="aloan-calculation">
               <FontAwesomeIcon icon={faCalculator} style={{fontSize:'2rem'}} />
               <span>محاسبه وام</span>
            </div>

            <div className={`wallet-in-footer ${isItActive.wallet && "active"}`} onClick={()=> {
               navigate('/wallet');
               setActivity({home: false , price: false , wallet: true});
            }}>

               <FontAwesomeIcon icon={faWallet} style={{fontSize:'2rem'}}/>
               <span>کیف پول</span>
            </div>

            <div className="user-profile">
               <FontAwesomeIcon icon={faUser} style={{fontSize:'2rem'}}/>
               <span>پروفایل</span>
            </div>

         </div>
      </footer>
        </>
     )
}

export default Footer