import { useState } from "react"
import { getImages } from "./home"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion , AnimatePresence, number } from "framer-motion";
import { span } from "framer-motion/client";
import { useFormState } from "react-dom";



function LoanCalculation(){

    const [openBottomSheet , setOpenBottomSheet] = useState('');
    const [formatedAmount , setFormatedAmount] = useState();

    const [isCurrencyerrorActive , setCurrencyError] = useState(false);
    const [isUserAmountErrorActive , setUserAmountError] = useState(false);
    const [isMonthErrorActive , setMonthError] = useState(false);


    function formatNumber(){
        const changeTonumber = Number(userAmount);
        setFormatedAmount(changeTonumber.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits:0,
            minimumFractionDigits:0
        }));
    }

    const typeOfCurrency = [
        {
            name : 'bitcoin',
            imageSrc : getImages('bitcoin-logo.svg')
        },
        {
            name : 'ethereum',
            imageSrc : getImages('ethereum-logo.svg')
        },
        {
            name : 'solana',
            imageSrc : getImages('solana-logo.svg')
        },
        {
            name : 'xrp',
            imageSrc : getImages('xrp-logo.svg')
        },
    ]

    const [selectedNameCrypto , setSelectedNameCrypto] = useState('');
    const [selectImageCoin , setSelectedImageCoin] = useState(null);


    const monthAndProfit = [ 
        {
            month: '6 ماه' ,
            monthNumber : 6 ,
            profit: .8
        },
        {
            month: '12 ماه' ,
            monthNumber : 12 ,
            profit: .14
        },
        {
            month: '18 ماه' ,
            monthNumber : 18 ,
            profit: .18
        },
        {
            month: '24 ماه' ,
            monthNumber : 24 ,
            profit: .22
        }
     ]

    const [selectedProfit , setSelectedProfit] = useState('');
    const [selectedMonth , setSelectedMonth] = useState('');
    const [selectedMonthNumber , setSelectedMonthNumber] = useState('');
    const [isResultShow , setIsResultShow] = useState(false);

    const [userAmount , setUserAmount] = useState(0);
    const [formatedUserAmount , setFormatedUserAmount] = useState();


    const [LTV , setLTV] = useState(.60);
    const [loanProfit , setLoanProfit] = useState(0);
    const [loanAmount , setLoanAmount] = useState(0);
    const [loanTotalPayment , setLoantotalPayment] = useState(0);
    const[loanInstallment , setLoanInstallment] = useState(0);

    const calculateAmount = userAmount * LTV ; 
    const calculateTotalPayment = calculateAmount + (calculateAmount * selectedProfit);
    const calculateInstallment =  calculateTotalPayment / selectedMonthNumber;


    function SettingValues(){
        setLoanProfit(selectedProfit);
        setLoanAmount(calculateAmount);
        setLoantotalPayment(calculateTotalPayment);
        setLoanInstallment(calculateInstallment);
    }


    return (
        
        <>
                    {/* loan calculation header */}


        <div className="loan-calculation">
        
            <div className="loan-calculation-header">

                <div className="loan-header-image">
                    <img src={getImages('loan-calculation2.webp')} alt="" />
                </div>

                <div className="loan-header-titel">
                    <h1> محاسبه وام ارز های دیجیتال  </h1>
                    <span> بر اساس مقدار دارایی کیف پولتان وام ارز دیجیتال دریاف کنید  </span>
                </div>

            </div>


                        {/* loan calculation form */}



            <div className="loan-calculation-form" >

                <div className="select-currency" onClick={()=> setOpenBottomSheet('coin')}>

                    <span> ارز دیجیتال </span>

                    <div className="choose">
                        <span> { selectedNameCrypto || 'انتخاب کنید'} </span>
                        <FontAwesomeIcon icon={faAngleDown} className="faAngleDown"/>
                    </div>
                </div>

                <div className="form-error" style={{opacity: isCurrencyerrorActive ? '1' : '0'}}> <span> نوع کریپتو را وارد کنید </span> </div>

                <div className="inter-amount-of-currencies" onClick={()=> setOpenBottomSheet('amount')}>

                    <div className="user-value-input">
                        <div> 
                            { formatedAmount || `مقدار  ${selectedNameCrypto || 'ارز  دیجیتال'} به دلار` }
                            {formatedAmount && <FontAwesomeIcon icon={faXmark} className="faXmark" onClick={()=> {setFormatedAmount(''); setOpenBottomSheet('')} } />} 
                        </div>
                    </div>

                    <div className="currencies-logo">
                        { selectImageCoin && <img src={selectImageCoin} />}
                    </div>

                </div>

                <div className="form-error" style={{opacity: isUserAmountErrorActive ? '1' : '0'}}> <span>    مقدار دارایی خود را وارد کنید </span> </div>


                <div className="inter-the-month" onClick={()=> setOpenBottomSheet('month')}>
                        <span> تعداد اقساط   </span>

                        <div className="choose">
                            <span> { selectedMonth || 'انتخاب کنید'} </span>
                            <FontAwesomeIcon icon={faAngleDown} className="faAngleDown"/>
                        </div>
                </div>

                <div className="form-error" style={{opacity: isMonthErrorActive ? '1' : '0'}}> <span> تعداد اقساط را وارد کنید  </span> </div>

                <div className="button-for-loan-calculation" onClick={()=> {
                    selectedNameCrypto ? setCurrencyError(false): setCurrencyError(true)
                    userAmount ? setUserAmountError(false): setUserAmountError(true)
                    selectedMonth ? setMonthError(false) : setMonthError(true)

                    SettingValues();

                    if(LTV && loanProfit && loanAmount && loanTotalPayment && loanInstallment ){
                        setIsResultShow(true);
                    } }}>
                    <span> محاسبه  </span>
                </div>

            </div>

            {
            isResultShow &&
            <div className="loan-calculation-result">

                <div className="loan-calculation-result-container">

                    <div className="loan-amount"> 

                        <img src={getImages('loan-result-image.svg')} alt="" />

                        <div>
                            <span className="amount"> {`$${loanAmount.toLocaleString('en-US')}`}</span>
                            <span className="description" > مقدار وام قابل دریافت  </span>
                        </div>

                    </div>

                    <div className="additional-loan-information">

                        <div className="loan-total-payment">
                            <span className="description"> مقدار کل باز پرداخت </span>
                            <span className="amount" > {`$${loanTotalPayment.toLocaleString('en-US')}`}  </span>
                        </div>

                        <div className="loan-installment">
                            <span className="description"> مقدار هر قسط </span>
                            <span className="amount"> {`$${Math.round(loanInstallment * 10) / 10}`} </span>
                            
                        </div>

                        <div className="LTV"> 
                            <span className="description"> درصد وام به سپرده </span>
                            <span className="amount"> {`%${LTV * 100}`}  </span>
                        </div>

                        <div className="loan-profit"> 
                            <span className="description"> درصد سود </span>
                            <span className="amount"> {`%${loanProfit}`}  </span>
                        </div>
                    </div>
                    
                </div>

            </div>
            }
        
        </div>


                        {/* bottom sheet model  */}



        <div className={`bottom-sheet ${openBottomSheet === 'coin' && 'coin' } ${openBottomSheet === 'amount' && 'amount' } ${openBottomSheet === 'month' && 'month' }`}>

            <div className="currency-bottom-sheet" style={{display: openBottomSheet === 'coin' ? 'block':'none'}}>
                <div className="titel">
                <div className="handel-button"></div>
                <span> نوع ارز دیجیتال  </span> 
            </div>

                {typeOfCurrency.map((coinInfo , index)=>{
                   return<div className="currencies-list-for-select" key={index}
                    onClick={()=>{
                        setSelectedNameCrypto(coinInfo.name);
                        setSelectedImageCoin(coinInfo.imageSrc);
                        setOpenBottomSheet('');
                        setErrorActive(false)}}>
                            
                        <span> {coinInfo.name} </span>
                            
                    </div>
            })}

            </div>

            <div className="amount-bottom-sheet" style={{display: openBottomSheet === 'amount' ? 'flex':'none'}}>

                <div className="up-side">

                    <div className="titel">
                        <div className="handel-button"></div>
                        <span> دارایی خود را وارد کنید </span> 
                    </div>

                    <div className="input">
                        <input
                        type="text" 
                        pattern="[0-9]*"
                        placeholder="مقدار را وارد کنید..."
                        inputMode="numeric" 
                        value={formatedUserAmount}
                        onChange={(e)=> {
                            setUserAmount(e.target.value);
                        }}/> 
                    </div>

                </div>

                <div className="button" onClick={()=> {setOpenBottomSheet(''); formatNumber(); selectedNameCrypto === '' && setErrorActive(true)}}> انتخاب </div>

            </div>


            <div className="month-bottom-sheet" style={{display: openBottomSheet === 'month' ? 'block':'none'}} >

                <div className="titel">
                    <div className="handel-button"></div>
                    <span> نوع ارز دیجیتال  </span> 
                </div>

                {monthAndProfit.map((monthAndProfit , index)=>{
                   return<div className="currencies-list-for-select" key={index} onClick={()=>{
                    setOpenBottomSheet('');
                    setSelectedMonth(monthAndProfit.month);
                    setSelectedMonthNumber(monthAndProfit.monthNumber)
                    setSelectedProfit(monthAndProfit.profit)}}>
                        <span> {monthAndProfit.month} </span>   
                    </div>
                })}

            </div>
                
        </div>
        
        </>
        
    )

}


export default LoanCalculation