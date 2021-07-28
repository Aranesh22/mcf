import React from 'react'
import HowitWorksStep from './HowitWorksStep'

import no1 from '../../../assets/hWimgs/no1.svg'
import no2 from '../../../assets/hWimgs/no2.svg'
import no3 from '../../../assets/hWimgs/no3.svg'
import no4 from '../../../assets/hWimgs/no4.svg'

import hWBg from '../../../assets/hWimgs/hWBg.png'

const stepInfo = [
    {bgImg: hWBg, numImg: no1, hText: "Assess", text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."},
    {bgImg: hWBg, numImg: no2, hText: "Execute", text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident"},
    {bgImg: hWBg, numImg: no3, hText: "Reassess", text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident"},
    {bgImg: hWBg, numImg: no4, hText: "Progress", text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident"}

]
const renderStep = (step, index) => {
    return(
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
