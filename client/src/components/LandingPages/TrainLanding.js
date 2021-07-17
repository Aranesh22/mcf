import React from 'react'
import trainLogo from '../../assets/train.png'
import {Button} from 'react-bootstrap'
export default function TrainLanding() {
    return (
        <div className="trainTxtPanel d-flex flex-column">
            <div className="bgDiv">
                <img style={{width: '95%', marginTop: '-16%'}} src={trainLogo} />
                <div className="flexAlignEnd d-flex" style={{padding: '4%'}}></div> 
                
                <div className='txtBox'>
                    <p >" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lorem sed elit tincidunt pretium. Duis molestie ultrices nisl, ut fringilla lacus imperdiet at. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <footer className="blockquote-footer">
                        <i>Quote </i>
                    </footer>
                    <div className="flexAlignStart d-flex" style={{padding: '4%'}}>
                    <Button className="buttonWhite">Know Your Strength ⟶</Button> </div> 
                </div>

                {/* <div className="flexAlignEnd d-flex">
                   <h1 className="mcfH1">WE ARE MYCUREFITNESS</h1>                  
                </div> */}
            </div>
            {/* <div style={{height:'50px'}}></div> */}
            {/* <div className='flexAlignEnd d-flex'>
                <h1 className="mcfH1"style={{color: '#004c54'}}>WE ARE MYCUREFITNESS</h1>
           </div> */}
        </div>
    )
}
