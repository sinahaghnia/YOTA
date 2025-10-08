import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

function Search(){

    const navigate = useNavigate();
    return(

        <div className="search-page">

            <div className="search-box">

                <div className="input-and-icon">
                    <FontAwesomeIcon icon={faArrowRight} className="fa-arrow-right" onClick={()=> navigate('/')} />
                    <input type="text" placeholder="جست و جو در یوتا" />
                </div>

                <div className="suggestion-for-search">
                    <div>   در یک نگاه   </div>
                    <div>  ارز   </div>
                    <div>  دیجیتال  </div>
                    <div> بازار فارکس  </div>
                    <div> بازار جهانی </div>
                    <div> اخبار</div>
                    <div> تحلیل </div>
                    <div> پادکست </div>
                </div>

            </div>

            

        </div>
    )
}

export default Search