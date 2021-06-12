import React from 'react'
import 'react-bootstrap'
import '../../css/Homepage.css'

import img01 from '../../assets/reviewIMG01.jpg'
import img02 from '../../assets/reviewIMG02.jpg'
import img03 from '../../assets/reviewIMG03.jpg'


export default function ReviewPanel() {
    return (
        <div className="reviewPanel">
        <div className="d-flex align-items-start justify-content-between" style={{padding: '5%'}} >
            {/* look into iterative css for styling each review */}
            <div className="reviewWrapper">
                <img className="reviewImg" style={{height: '500px', padding: '0% 3% 0%'}} src={img01} />
                <div className="rectangle">
                </div>
            </div>
            <div className="reviewWrapper">
                <img className="reviewImg" style={{height: '500px', padding: '0% 3% 0%', marginTop: '75px' }} src={img02} />
                <div className="rectangle"/>
            </div>
            <div className="reviewWrapper">
            <img className="reviewImg" style={{height: '500px', padding: '0% 3% 0%', marginTop: '125px'}} src={img03} />
            <div className="rectangle"></div>
            </div>
        </div></div>
    )
}
