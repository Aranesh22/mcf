import React from 'react'
import HowitWorksStep from './HowitWorksStep'

import no1 from '../../assets/hWimgs/no1.svg'
import no2 from '../../assets/hWimgs/no2.svg'

import hWBg from '../../assets/hWimgs/hWBg.png'

const stepInfo = [
    {bgImg: hWBg, numImg: no1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."},
    {bgImg: hWBg, numImg: no2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
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
