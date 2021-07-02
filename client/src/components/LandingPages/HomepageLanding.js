import React from 'react'
import '../../css/Landing.css'
import ReviewsLanding from './ReviewsLanding';
import TrainLanding from './TrainLanding';


export default function HomepageLanding() {
    return (
        <div style={{position: 'absolute', top:'-10%'}}>
        <TrainLanding />
        <ReviewsLanding />
        </div>
        
    )
}
