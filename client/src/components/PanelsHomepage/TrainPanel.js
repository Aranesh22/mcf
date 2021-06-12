import React from 'react'
import {Button, Container} from 'react-bootstrap'
import '../../css/Homepage.css'
import trainLogo from '../../assets/train.png'
import VSlider from '../autoVSlider'

export default function TrainPanel() {
    return (
        <div className="trainTxtPanel d-flex flex-column">
            <div className="bgDiv">
                <img style={{width: '95%', marginTop: '-16%'}} src={trainLogo} />
                <div className="flexAlignEnd d-flex" style={{padding: '4%'}}>
                <Button className="buttonWhite">FIND YOUR PLAN</Button> </div> 
                
                {/* <div className='txtBox'>

                </div>   */}
                <VSlider />
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
