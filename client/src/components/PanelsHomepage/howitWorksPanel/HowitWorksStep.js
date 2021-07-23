import React from 'react'
import '../../../css/howitWorks.css'
import hWHex from '../../../assets/hWimgs/hWHex.svg'

export default function HowitWorksStep({bgImg, numImg, text}) {
    return (
        <div className="containStep hWBg" style={{ backgroundImage: `url(${bgImg})`}}>
            <div className="longHexContainer">
            <img className="longHex" src={hWHex} ></img> 
            <p className="hexTxt">{text} </p>
          </div>
            <div className="numberImgContainer">
            <img className="numberImg" src={numImg}></img></div>
        </div>
    )
}
 