import React from 'react'
import { Accordion } from 'react-bootstrap';
// import '../../../css/howitWorks.css'

export default function FaqQuestion({ekey, question, answer }) { 
// dynamic variables needed: Question: "string", Answer: "string", 

    return (
      <>      
        <Accordion.Toggle eventKey={ekey} variant="custom" className="faqBtn" >    
            <h1 className="mcfH1" style={{color: '#004c54', textAlign:"start", fontWeight:'900', fontSize: '26px' }}>{question}</h1>
        </Accordion.Toggle>
            <Accordion.Collapse eventKey={ekey} >
                <div id="collapse-text" style={{color: '#004c54'}}>
                    {answer}
                </div>
           </Accordion.Collapse>
        </>
    )
}
