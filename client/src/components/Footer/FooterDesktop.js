import React from 'react'

import bigFooter from '../../assets/bigFooter.svg'

export default function FooterDesktop() {
    return (
        <div className="fBg d-flex" style={{backgroundImage: `url(${bigFooter})`, position: 'absolute', flexDirection: 'column'}} >
            <a href="../#/aboutUs" className="halfHexR1" style={{border: "solid red", width: '20%'}}>
            </a>
            <a  href="../#" className="fullHexR2" style={{border: "solid blue",  marginLeft: '20%', width: '20%'}}>
            </a>
            <a  href="../#/"className="halfHexR1" style={{border: "solid green", marginLeft: '40%',  width: '20%'}}>
            </a>
            <a href="../#/quiz/question_1" className="fullHexR2" style={{border: "solid orange", marginLeft: '60%',  width: '20%'}}>
            </a>
            <a  href="https://www.facebook.com/mycurefitness/" className="halfHexR1" style={{border: "solid purple", marginLeft: '80%',  width: '20%'}}>
            </a>
            <a  href="../#/contactUs"className="fullHexR3" style={{border: "solid yellow", marginLeft: '80%',  width: '20%'}}>
            </a>

        </div>
    )
}
