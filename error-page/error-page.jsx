import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function ErrorPage(){

    const navigate = useNavigate()
    
    return <div className="error">

                <div className="back-buttom" onTouchEnd={()=> navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>

                <div className="error-message">
                    <h1> 404 </h1>
                    <span> not found </span>
                </div>
            </div>
}

export default ErrorPage