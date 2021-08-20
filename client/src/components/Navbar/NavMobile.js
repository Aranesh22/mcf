import React, {useState} from 'react'
import { Button, Collapse } from 'react-bootstrap';
// import '../../css/test.css';

export default function NavMobile() {
    const [open, setOpen] = useState(false);


return (
        <div>
            {/* <!-- The overlay --> */}


{/* <!-- Use any element to open/show the overlay navigation menu --> */}
<Button className="navDropButton d-flex flexAlignStart" onClick={() => setOpen(!open)} >☰</Button>
       {open ? 
      
            <div id="myNav" class="overlay" style={{height: '100%'}}>


  {/* <!-- Overlay content --> */}
  <Button className="navDropButton flexAlignStart d-flex" onClick={() => setOpen(!open)} >☰</Button>
  <div className="overlay-content">
  <a href="../">Home</a>
    <a href="../aboutUs">Your Team</a>
    <a href="#">Products We Trust</a>
    <a href="../contactUs">Contact Us</a>
  </div>
  
</div>
            : <div id="myNav" class="overlay" style={{height: '0%'}}>
            <Button className="navDropButton flexAlignStart d-flex" onClick={() => setOpen(!open)} >☰</Button>
            <div className="overlay-content">
            <a href="#">Home</a>
            <a href="../aboutUs">Your Team</a>
            <a href="#">Products We Trust</a>
            <a href="../contactUs">Contact Us</a>
            </div>
          
          </div>} 
 </div>
    )
}
