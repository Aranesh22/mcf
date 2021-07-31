import React, {useState} from 'react'
import '../../../css/howitWorks.css'
import hWHex from '../../../assets/hWimgs/hWHex.svg'

import HowitWorksModal from './HowitWorksModal'
import { Button } from 'react-bootstrap'


export default function HowitWorksStep({bgImg, numImg, hText, text}) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="containStep hWBg" style={{ backgroundImage: `url(${bgImg})`}}>
            <div className="longHexContainer longHex" style={{backgroundImage: `url(${hWHex})`}}>
            <div className="hexTxtBox">
            <h1 className="hexH1Text flexalignStart mcfH1">{hText}</h1>

            <Button className="seeMoreBtn" variant="custom" onClick={() => setModalShow(true)}>
              see more...
            </Button>

        <HowitWorksModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        text = {text}
        header = {hText}
        />

            </div>
          </div>
            <div className="numberImgContainer">
            <img className="numberImg" src={numImg}></img></div>
        </div>
    )
}
  