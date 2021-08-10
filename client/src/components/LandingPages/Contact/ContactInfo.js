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
                    <p className="px-4" style={{color: '#004c54'}}>416-756-9023</p >
                </div>
                <p  className="flexAlignStart d-flex px-4" style={{color: '#004c54'}}>Or just visit us!</p>
                <div className="formInfoDiv d-flex flex-direction-row px-4">
                        <img style={{height: '40px'}} src={homeIcon}/>
                        <p className="px-4" style={{color: '#004c54', textAlign: 'start'}}>26 MyStreet Dr. <br></br>L3S 3BD. Markham, ON</p>
                </div>
        
        </div>
    )
}
