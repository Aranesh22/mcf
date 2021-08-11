import React from 'react'
import '../../../css/contact.css'
import phoneIcon from '../../../assets/phoneIcon.png'
import homeIcon from '../../../assets/homeIcon.svg'
export default function ContactInfo() {
    return (
        <div>
             <p  className="flexAlignStart d-flex px-4" style={{color: '#004c54'}}>want a faster response? </p>
                <div className="formInfoDiv d-flex flex-direction-row px-4">
                {/* insert svg here */}
                <img style={{height: '40px'}} src={phoneIcon} >
                 </img>
                    <a href="tel:###-###-####" className="linkTo px-4" style={{color: '#004c54'}}>416-756-9023</a >
                </div>
                <p  className="flexAlignStart d-flex px-4" style={{color: '#004c54'}}>Or just visit us!</p>
                <div className="formInfoDiv d-flex flex-direction-row px-4">
                        <img style={{height: '40px'}} src={homeIcon}/>
                        <a href="googlemapsLinkHere" className="linkTo px-4" style={{color: '#004c54', textAlign: 'start'}}>26 MyStreet Dr. <br></br>L3S 3BD. Markham, ON</a>
                </div>
        
        </div>
    )
}
