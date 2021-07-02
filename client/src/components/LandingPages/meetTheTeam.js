import React from 'react' 
import backgroundImage from '../../assets/BackGroundImage.svg'
import AA from '../../assets/aATransparent.svg'
import mcf from '../../assets/mcf.svg'
// will need to import the background image + the 2 other logos for clickable links  
import '../../css/lpmeetTheTeam.css'

export default function LinksLanding() {
    return (
        <div class="containTeam">  
            <img class ="testone" src="./client/src/assets/mTimages/DPP_HP.svg"alt=""></img>
            <img class="testTwo" src="./client/src/assets/mTimages/whiteHexPannel.svg" alt=""></img>
            <img class="testThree" src="./client/src/assets/mTimages/RS_HP.svg" alt=""></img>
            <img class="testFour" src="./client/src/assets/mTimages/JG_HP.svg"alt=""></img>  
            <img class="testFive" src="./client/src/assets/mTimages/whiteHexPannel.svg" alt=""></img>
        </div>
    )
}
