import React from 'react'
import HowitWorksStep from './HowitWorksStep'

import no1 from '../../../assets/hWimgs/no1.svg'
import no2 from '../../../assets/hWimgs/no2.svg'
import no3 from '../../../assets/hWimgs/no3.svg'
import no4 from '../../../assets/hWimgs/no4.svg'

import hWBg from '../../../assets/hWimgs/hWBg.png'

const stepInfo = [
    {bgImg: hWBg, numImg: no1, text: "assess"},
    {bgImg: hWBg, numImg: no2, text: "execute"},
    {bgImg: hWBg, numImg: no3, text: "reassess"},
    {bgImg: hWBg, numImg: no4, text: "progress"}

]
const renderStep = (step, index) => {
    return(
      <HowitWorksStep key={index}
            bgImg={step.bgImg}
            numImg={step.numImg}
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
