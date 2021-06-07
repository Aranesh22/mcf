import React from 'react'
import {Button} from 'react-bootstrap'
import '../../css/Homepage.css'
import trainLogo from '../../assets/train.png'


export default function TrainPanel() {
    return (
        <div className="trainTxtPanel d-flex">
            <div className="bgDiv">
                <img style={{width: '95%', marginTop: '-16%'}} src={trainLogo} />
                <div className="flexAlignEnd d-flex" style={{padding: '4%'}}>
                <Button className="buttonWhite">FIND YOUR PLAN</Button> </div>
            </div>
           
        </div>
    )
}
