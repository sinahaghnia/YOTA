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
      loanCalculation: false,
      wallet: false,
      profile: false
   });

     return(
        <>
      <footer>
         <div className="footer-access">

            <div className={`home ${isItActive.home && "active"}`} onClick={()=> {
               navigate('/');
               setActivity({home: true , price: false , loanCalculation: false , wallet: false , profile: false });
            }}>

               <FontAwesomeIcon icon={faHome} style={{fontSize:'2rem'}} />
               <span>خانه</span>
            </div>

            <div className={`price-footer-access ${isItActive.price && "active"}`} onClick={()=> {
               navigate('/price');
               setActivity({home: false , price: true , loanCalculation: false , wallet: false , profile: false});
            }}>

               <FontAwesomeIcon icon={faChartSimple} style={{fontSize:'2rem'}} />
               <span>قیمت ها</span>
            </div>

            <div className={`loan-calculation ${isItActive.loanCalculation && "active"}`}onClick={ () => {
               navigate('/loan-calculation')
               setActivity({home: false , price: false , loanCalculation: true , wallet: false , profile: false})
               }}>
               <FontAwesomeIcon icon={faCalculator} style={{fontSize:'2rem'}} />
               <span>محاسبه وام</span>
            </div>

            <div className={`wallet-in-footer ${isItActive.wallet && "active"}`} onClick={()=> {
               navigate('/wallet');
               setActivity({home: false , price: false , loanCalculation: false , wallet: true , profile: false});
            }}>

               <FontAwesomeIcon icon={faWallet} style={{fontSize:'2rem'}}/>
               <span>کیف پول</span>
            </div>

            <div className={`profile-in-footer ${isItActive.profile && "active"}`} onClick={()=>{
               navigate('/profile')
               setActivity({home: false , price: false , loanCalculation: false , wallet: false , profile: true})
            }}>
               <FontAwesomeIcon icon={faUser} style={{fontSize:'2rem'}}/>
               <span>پروفایل</span>
            </div>

         </div>
      </footer>
        </>
     )
}

export default Footer