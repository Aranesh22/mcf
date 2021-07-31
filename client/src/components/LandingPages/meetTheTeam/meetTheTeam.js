import React from 'react' 

import dPP from '../../../assets/mTimages/updated/DPP_HP.svg'
import wH from '../../../assets/mTimages/wH.svg'
import rS from '../../../assets/mTimages/RS_HP (1).svg'
import jG from '../../../assets/mTimages/updated/JG_HP.svg'

import '../../../css/lpmeetTheTeam.css'
import TeamMember from './TeamMember'


export default function MeetTheTeam() {
    const memberInfo = [
        {img: rS, imgClass: "topLeft", text: "tester01"},
        {img: jG, imgClass: "mid", text: "tester02"},
        {img: dPP, imgClass: "topRight", text: "tester03"}
    ]
    const renderMember = (member, index) => {
        return (
          <TeamMember key={index}
                img={member.img}
                imgClass={member.imgClass} 
                text={member.text}
          />
            ) 
        }

    return (
        <div class="containTeam">  
            {memberInfo.map(renderMember)}

            <img class="bottomLeft" src={wH} alt={wH}/> 
            <img class="bottomRight" src={wH} alt={wH}/>
        </div>
    )
}
