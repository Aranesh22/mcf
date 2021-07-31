import React from 'react'
import HowitWorksStep from './HowitWorksStep'

import no1 from '../../../assets/hWimgs/no1.svg'
import no2 from '../../../assets/hWimgs/no2.svg'
import no3 from '../../../assets/hWimgs/no3.svg'
import no4 from '../../../assets/hWimgs/no4.svg'

import hWBg from '../../../assets/hWimgs/hWBg.png'

const stepInfo = [
    {bgImg: hWBg, numImg: no1, hText: "Assess", text: 'Start here, Know your strength Sit strong and a strength and optimization expert will give you a call to discuss your next move, after a comprehensive intake that will give the clearest picture of where you are in your journey and the vision to carry it to success'},
    {bgImg: hWBg, numImg: no2, hText: "Execute", text: 'Programming that reflects your strength, health, nutrition, and cognitive behavioural enhancement is rolled out This is according to the intake'},
    {bgImg: hWBg, numImg: no3, hText: "Reassess your potential", text: 'Feedback is a paramount here'},
    {bgImg: hWBg, numImg: no4, hText: "Automate your strength", text: 'With the tools in place to ensure a habit shift and a physical empowerment, its you back in the driver seat, with the tools your need to succeed, don’t worry, we are always here to ensure you stay the course and level up as you an athlete for life'}
]

const renderStep = (step, index) => {
    return (
      <HowitWorksStep key={index}
            bgImg={step.bgImg}
            numImg={step.numImg}
            hText={step.hText}
            text={step.text}
      />
    ) 
  }
export default function howitWorksPanel() {
    return (
        <div>
            {stepInfo.map(renderStep)}
        </div>
    )
}
