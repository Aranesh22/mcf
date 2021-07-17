import React from 'react'
import '../../css/Landing.css'

import ReviewsLanding from './ReviewsLanding';
import TrainLanding from './TrainLanding';
import MeetTheTeam from './meetTheTeam';
import ReviewCarousel from '../PanelsHomepage/ReviewCarousel';
import HowitWorksPanel from '../howitWorks/HowitWorksPanel';
import Faq from '../Faq';


export default function HomepageLanding() {
    return (
        // <div style={{position: 'absolute', top:'-10%'}}>
        <div>
         <TrainLanding />
         <div className="flexAlignStart d-flex" style={{paddingLeft: '2%'}}>
            <h1 className="mcfH1"style={{color: '#004c54' }}>HEADER</h1>
         </div>
        <ReviewCarousel />
        <div className='flexAlignEnd d-flex'>
                <h1 className="mcfH1"style={{color: '#004c54'}}>WE ARE MYCUREFITNESS</h1>
           </div>

         <div className="flexAlignStart d-flex" style={{paddingLeft: '2%'}}>
            <h1 className="mcfH1"style={{color: '#004c54' }}>HOW IT WORKS</h1>
         </div>
        <HowitWorksPanel />

        <Faq />
         </div>
        
    )
}
