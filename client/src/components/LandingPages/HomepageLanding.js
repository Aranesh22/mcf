import React from 'react'
import '../../css/Landing.css'
import ReviewsLanding from './ReviewsLanding';
import TrainLanding from './TrainLanding';
import MeetTheTeam from './meetTheTeam';

export default function HomepageLanding() {
    return (
        <div style={{position: 'absolute', top:'-10%'}}>
        <TrainLanding />
        <ReviewsLanding />
        <MeetTheTeam />
        </div>
        
    )
}
