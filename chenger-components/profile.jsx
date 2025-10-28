import { faAnglesLeft, faArrowLeft, faArrowRight, faGears, faHistory, faMoneyBill, faQuestion, faShare, faShareNodes, faShield, faSquareShareNodes, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImages } from "./home";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, width } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import Footer from "../fixed-components/footer";
import { useNavigate } from "react-router-dom";


function Profile(){

    const navigate = useNavigate();

    const profileSettingInfo = [
        {
            icon: 'user-option-icon.png',
            title: 'حساب کاربری',
            description: 'اطلاعات بانکی و شخصی'
        },
        {
            icon: 'shild.png',
            title: ' امنیت و حریم خصوصی',
            description:'رمز عبور و تراکنش , اثرانگشت و...'
        },
        {
            icon: 'history.png',
            title: 'تاریخچه تراکنش ها',
            description:'خرید فروش و مشارکت شما در پروژه ها'
        },
        {
            icon: 'loan.png',
            title:  'دریافت وام',
            description:'  به پشتوانه رمز ارز های خود وام دریافت کنید'
        },
        {
            icon: 'credit-card.png',
            title:  ' اعتبار خرید کالا',
            description:'به پشتوانه رمز ارزهای خود اعتبار خرید کالا دریافت کنید '
        },
    ]

    const profileGeneralInfo = [
        {
            icon: 'add-friend.png',
            title:  ' معرفی دوستان',
            description:'با دعوت از دوستانتان ارز دیجیتال دریافت کنید'
        },
        {
            icon: 'setting.png',
            title: 'تنظیمات',
            description:'تم , اعلان ها , زبان و...'
        },
        {
            icon: 'help.png',
            title:  ' پشتیبانی',
            description: 'گفت و گو , تماس و سوالات متداول'
        },
    ]


    return(   
        
        <>

        <div className="profile">

            <div className="up-access-bar"> 
                <h1 className="big-profile-page-titel"> پروفایل </h1>
                <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft" onClick={()=> navigate('/') }/>
            </div>

            <div className="container-profile-up-information">

                <div className="profile-up-information">

                <div className="profile-image-and-info">

                    <div className="profile-image"> <img src={getImages('user-logo.png')} alt="" /> </div>

                    <div className="profile-info">
                         <h1 className="name-and-lastname" >  علی مراد تقوی  </h1>
                         <span className="number"> 09968985378 </span>
                    </div>

                </div>

                <div className="back-icon"> <FontAwesomeIcon icon={faAngleLeft}/> </div>

            </div>

            </div>

            <div className="profile-all-options">

                <div className="profile-setting-options">

                    <h1 className="setting-titel"> امکانات یوتا </h1>

                    {profileSettingInfo.map((settingsInfotmation , index)=>{
                        return <div className="options" key={index} style={{borderBottom: index === 4 && 'none'}}>

                            <div className="icon-and-info-option">

                                <div className="icon-option">
                                    <img src={getImages(settingsInfotmation.icon)} alt="" style={{width: index === 3 && '23px'}} /> 
                                </div>

                                <div className="info-option">
                                    <h1> {settingsInfotmation.title} </h1>
                                </div>

                            </div>

                            <div className="back-icon"> 
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </div>
                        </div>
                    })}

                </div>

                <div className="profile-general-options">

                    <h1 className="general-titel"> عمومی </h1>

                    {profileGeneralInfo.map((generalInformation , index)=>{
                        return <div className="options" key={index} style={{borderBottom: index === 2 && 'none'}}>

                            <div className="icon-and-info-option">

                                <div className="icon-option">
                                    <img src={getImages(generalInformation.icon)} alt="" style={{width: index === 3 && '23px'}} /> 
                                </div>

                                <div className="info-option">
                                    <h1> {generalInformation.title} </h1>
                                </div>

                            </div>

                            <div className="back-icon"> 
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </div>
                        </div>
                    })}
                </div>

            </div>

            <div className="log-out-account">
                <h1> خروج از حساب کاربری  </h1>
            </div>
        
        </div> 
        
        </>
        
    )
    
}

export default Profile