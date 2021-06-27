import React from 'react'
import '../css/Homepage.css'
import TrainPanel from './PanelsHomepage/TrainPanel'
import ReviewPanel from './PanelsHomepage/ReviewPanel'
// import ReviewsLanding from './LandingPages/ReviewsLanding'
import Nav from './Navbar/Navbar'
export default function Homepage() {
    // NOTE: haven't yet focused on how the UI will scale 
    return (
        <>
        {/* <Nav /> */}
        <TrainPanel/>
        {/* <ReviewPanel /> */}
        {/* <ReviewsLanding /> */}
        </>
        
    )
}
