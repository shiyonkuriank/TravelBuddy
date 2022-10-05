import NavBar from './NavBar/NavBar'
import './LandingPage.css'

export default function LandingPage(){
    return(
        <div>
            <NavBar/>
            <div className="company-details">
             <img src={process.env.PUBLIC_URL + '/images/landing.jpeg'} alt="Landing-Img" className="landing-img"/>
                <div className="text-container">
                    <p className="text-1">Welcome to TravelBuddy</p>
                    <h4 className="text-2">Plan your trip with us</h4>
                    <h4 className="text-3">And travel CAREFREE!!</h4>
                </div>
            </div>
        </div>
    )
} 