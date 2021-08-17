import React from 'react'
import { Button } from 'react-bootstrap'
import '../../css/main.css'

export default function StickyButton() {
    return (
        <div>
              <div className="buttonBar">
         <div className="flexAlignEnd d-flex" style={{paddingRight: '4%'}}>
                    <Button className="buttonWhiteNav">Know Your Strength</Button> </div> 
         </div>
        </div>
    )
}
