import React from 'react' 
import backgroundImage from '../../assets/BackGroundImage.svg'
import AA from '../../assets/aATransparent.svg'
import mcf from '../../assets/mcf.svg'
import t1 from '../../assets/mTimages/DPP_HP.svg'
import wH from '../../assets/mTimages/whiteHexPannel.svg'
import t3 from '../../assets/mTimages/RS_HP.svg'
import t4 from '../../assets/mTimages/JG_HP.svg'


import '../../css/lpmeetTheTeam.css'

export default function LinksLanding() {
    return (
        <div class="containTeam">  
            <img class ="testone" src={t1} alt={wH}></img>
            <img class="testTwo" src={wH} alt={wH}></img>
            <img class="testThree" src={t3} alt={wH}></img>
            <img class="testFour" src={t4} alt={wH}></img>  
            <img class="testFive" src={wH} alt={wH}></img>
        </div>
    )
}
