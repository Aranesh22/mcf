import React from 'react' 

import t1 from '../../assets/mTimages/updated/DPP_HP.svg'
import wH from '../../assets/mTimages/wH.svg'
import t3 from '../../assets/mTimages/RS_HP (1).svg'
import t4 from '../../assets/mTimages/updated/JG_HP.svg'


import '../../css/lpmeetTheTeam.css'

export default function MeetTheTeam() {
    return (
        <div class="containTeam">  
            <img class ="topLeft" src={t3} alt={wH}></img>
            <img class="mid" src={t4} alt={wH}></img>
            <img class="topRight" src={t1} alt={wH}></img>
            <img class="bottomLeft" src={wH} alt={wH}></img>  
            <img class="bottomRight" src={wH} alt={wH}></img>
        </div>
    )
}
