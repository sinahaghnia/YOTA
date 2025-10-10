import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faBell, faBellConcierge, faGear, faHeadphones, faSearch, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header(){

    const [isItActive , setActivity] = useState(false);

    const navigate = useNavigate();

    function inputHandeler(){

        sessionStorage.setItem('openSearchInput' , 'true');
        navigate('/search');
    }


     return(
        <>
        <div className="header">

            <div className="right-header">

                <FontAwesomeIcon icon={faBars} className='header-fa-bars-icon' onClick={()=> setActivity(true)}/>

                <div className="search-box-header" onClick={()=> inputHandeler()}>
                    <input type="text" placeholder='جست و جو' />
                    <FontAwesomeIcon icon={faSearch} className='footer-fa-search-icon'/>
                </div>

            </div>

        </div>


    <div className={`side-bar-menu ${isItActive && "active"}`}>

        <FontAwesomeIcon icon={faXmark} onClick={()=> setActivity(false)} className="side-bar-fa-x-icon"/>

        <div className="menu-container">

            <div className="side-bar-login-sign-up">
                <span> ورود / ثبت نام </span>
                <FontAwesomeIcon icon={faAngleDown} className="side-bar-fa-angel-down-icon" />
            </div>

            <div className="side-bar-trade">
                <span> معامله </span>
                <FontAwesomeIcon icon={faAngleDown} className="side-bar-fa-angel-down-icon" />
            </div>

            <div className="side-bar-news">
                <span> تازه ترین ها </span>
                <FontAwesomeIcon icon={faAngleDown} className="side-bar-fa-angel-down-icon" />
            </div>

            <div className="side-bar-setting">
                <span> تنظیمات </span>
                <FontAwesomeIcon icon={faAngleDown} className="side-bar-fa-angel-down-icon" />
            </div>

            <div className="side-bar-support" style={{border:'none'}}>
                <span> پشتیبانی </span>
                <FontAwesomeIcon icon={faAngleDown} className="side-bar-fa-angel-down-icon" />
            </div>

            <div className="yota-logo-in-side-bar" style={{padding:'0px'}}>
                <img src="images/yota-logo11.png" alt="" />
            </div>

        </div>

    </div>
        
        </>
     )
}

export default Header