import React from 'react'
import trainLogo from '../../assets/train.png'

export default function TrainLanding() {
    return (
        <div className="trainTxtPanel d-flex flex-column">
            <div className="bgDiv">
                <img style={{width: '95%', marginTop: '-16%'}} src={trainLogo} />
                <div className="flexAlignEnd d-flex" style={{padding: '4%'}}></div> 
                
                <div className='txtBox'>
                    <p >MyCure Fitness is a team of physical strength optimization coaches, nutritionists, physical therapy specialist, internal health physicians.  We believe that with our experience of working with 1000’s of clients both in Canada and worldwide we have filtered a contemporary program that will give every individual a proprietary program that will address and optimize strength through individualized workout coaching, nutrition coach, physician supervised health assessment and prehab and rehab accelerations with our in house team of physical therapists</p>
                </div>

                <div className="flexAlignEnd d-flex">
                   <h1 className="mcfH1">WE ARE MYCUREFITNESS</h1>                  
                </div>
            </div>
            <div className='flexAlignEnd d-flex'>
                <h1 className="mcfH1"style={{color: '#8B0808'}}>WE ARE MYCUREFITNESS</h1>
           </div>
        </div>
    )
}