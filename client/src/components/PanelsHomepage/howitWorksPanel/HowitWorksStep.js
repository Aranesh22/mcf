import React from 'react'
import '../../../css/howitWorks.css'
import hWHex from '../../../assets/hWimgs/hWHex.svg'

export default function HowitWorksStep({bgImg, numImg, hText, text}) {
    return (
        <div className="containStep hWBg" style={{ backgroundImage: `url(${bgImg})`}}>
            <div className="longHexContainer longHex" style={{backgroundImage: `url(${hWHex})`}}>
            {/* <img className="longHex" src={hWHex} ></img>  */}
            <div className="hexTxtBox" >
            <h1 className="hexH1Text flexalignStart mcfH1"> {hText}</h1>
            <p className="hexPText">{text} </p></div>
          </div>
            <div className="numberImgContainer">
            <img className="numberImg" src={numImg}></img></div>
        </div>
    )
}
  