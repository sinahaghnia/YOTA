import { faAnglesLeft, faArrowLeft, faArrowRight, faGears, faHistory, faMoneyBill, faQuestion, faShare, faShareNodes, faShield, faSquareShareNodes, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImages } from "./home";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import Footer from "../fixed-components/footer";


function Profile(){

    const profileSettingInfo = [
        {
            icon: faUser,
            title: 'حساب کاربری',
            description: 'اطلاعات بانکی و شخصی'
        },
        {
            icon: faShield,
            title: ' امنیت و حریم خصوصی',
            description:'رمز عبور و تراکنش , اثرانگشت و...'
        },
        {
            icon: faHistory,
            title: 'تاریخچه تراکنش ها',
            description:'خرید فروش و مشارکت شما در پروژه ها'
        },
        {
            icon: faMoneyBill,
            title:  'دریافت وام',
            description:'  به پشتوانه رمز ارز های خود وام دریافت کنید'
        },
        {
            icon: faMoneyBill,
            title:  ' اعتبار خرید کالا',
            description:'به پشتوانه رمز ارزهای خود اعتبار خرید کالا دریافت کنید '
        },
    ]

    const profileGeneralInfo = [
        {
            icon: faUserFriends,
            title:  ' معرفی دوستان',
            description:'با دعوت از دوستانتان ارز دیجیتال دریافت کنید'
        },
        {
            icon: faGears,
            title: 'تنظیمات',
            description:'تم , اعلان ها , زبان و...'
        },
        {
            icon: faQuestion,
            title:  ' پشتیبانی',
            description: 'گفت و گو , تماس و سوالات متداول'
        },
    ]


    return(   
        
        <>

        <div className="profile">

            <div className="profile-up-side">

                <div className="up-access-bar"> 
                    <div className="exit-button"> <FontAwesomeIcon icon={faArrowRight}/> </div>
                    <div className="profile-word"> <span> پروفایل </span> </div>
                    <div className="QandA-and-share-icon">
                        <FontAwesomeIcon icon={faShareNodes}/>
                        <FontAwesomeIcon icon={faQuestion} className="faQuestion"/>
                    </div>
                </div>


                <div className="profile-image-and-info">
                    <div className="image-profile"> <img src={getImages('user-logo.png')} alt="" /> </div>
                    <div className="profile-info">
                         <span className="name-and-lastname" >  علی مراد تقوی  </span>
                         <span className="number"> 09968985378 </span>
                    </div>

                </div>

            </div>

            <div className="profile-down-side">

                <div className="profile-settings-options">

                    <h1 className="settings-titel"> امکانات یوتا </h1>

                    {profileSettingInfo.map((settingsInfotmation , index)=>{
                        return <div className="options" key={index}>

                            <div className="icon-and-info-option">

                                <div className="option-icon"> <FontAwesomeIcon icon={settingsInfotmation.icon} /></div>

                                <div className="option-info">
                                    <h1> {settingsInfotmation.title} </h1>
                                    <span> {settingsInfotmation.description} </span>
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
                        return <div className="options" key={index}>

                            <div className="icon-and-info-option">

                                <div className="option-icon"> <FontAwesomeIcon icon={generalInformation.icon} /></div>

                                <div className="option-info">
                                    <h1> {generalInformation.title} </h1>
                                    <span> {generalInformation.description} </span>
                                </div>

                            </div>

                            <div className="back-icon"> 
                                <FontAwesomeIcon icon={faAnglesLeft}/>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        
        </div> 

        <Footer/>
        
        </>
        
    )
    
}

export default Profile