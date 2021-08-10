import React, {useRef} from 'react'
import useElementOnScreen from '../../hooks/useElementOnScreen';
import trainLogo from '../../assets/train.png'
import strongerLogo from '../../assets/stronger.png'
import {Button} from 'react-bootstrap'
import StickyButton from '../Navbar/StickyButton';
// import '../../css/Landing.css'
export default function TrainPanel() {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen({
        root: null, 
        rootMargin: '0px',
        threshold: 0.3
    }, targetRef)
 
//    document.body.style.backgroundColor= isVisible ? 'purple !important' : 'yellow !important'

    return (
  
        <div className="trainTxtPanel d-flex flex-column" ref={targetRef}>
            {!isVisible ? 
                <StickyButton /> 
            : ''} 
       
            <div className="greenBehind" fluid></div>
           
            <div className="bgDiv">  
            {/* marginTop: '-16%' */}
                <img style={{width: '95%', marginTop: '-7.5%'}} src={strongerLogo} />
                <div className="flexAlignEnd d-flex" style={{padding: '4%'}}></div> 
                
                <div className='txtBox'>
                    <p >" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lorem sed elit tincidunt pretium. Duis molestie ultrices nisl, ut fringilla lacus imperdiet at. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <footer className="blockquote-footer">
                        <i>Quote </i>
                    </footer>
                    
                    <div className="flexAlignStart d-flex" style={{padding: '4%'}}>
                    <Button className="buttonWhite">Know Your Strength ⟶</Button> </div> 
                </div>
            </div>
           
        </div>
    )
}
