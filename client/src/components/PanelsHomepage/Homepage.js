import React from 'react'
import '../../css/Landing.css'

import tripleHex from '../../assets/tripleHex.svg'

import TrainPanel from './TrainPanel';

import ReviewCarousel from './ReviewCarousel';
import HowitWorksPanel from './howitWorksPanel/HowitWorksPanel';
import Faqq from './FaqPanel/Faq';
import StickyButton from '../Navbar/StickyButton';
import Navbar from '../Navbar/Navbar';


export default function Homepage() {
    return (
        <div>
           {/* <Navbar /> */}
           <StickyButton />
         <TrainPanel />
         <div className="flexAlignStart d-flex" style={{paddingLeft: '2%'}}>
            <h1 className="mcfH1"style={{color: '#004c54' }}>HEADER</h1>
         </div>
        <ReviewCarousel />
        <div className='flexAlignEnd d-flex'>
                <h1 className="mcfH1"style={{color: '#004c54'}}>WE ARE MYCUREFITNESS</h1>
           </div>
         <div>
         <img src={tripleHex} />
         </div>
         <div className="flexAlignStart d-flex" style={{paddingLeft: '2%', backgroundColor: '#004c54'}}>
            <h1 className="mcfH1"style={{ padding: "2%", }}>HOW IT WORKS</h1>
         </div>
        <HowitWorksPanel />
        <div className="flexAlignStart d-flex" style={{padding: '2%'}}>
        <h1 className="mcfH1"style={{color: '#004c54' }}>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <Faqq />
        {/* <MeetTheTeam /> */}
         </div>

        
    )
}
