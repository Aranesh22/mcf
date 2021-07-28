import React from 'react'
import { Accordion } from 'react-bootstrap'
// import '../../../css/howitWorks.css'
import FaqQuestion from './FaqQuestion'

export default function Faq() {

    const questions = [
      {ekey: "0", question: "How will I guarantee fitness improvement?", answer: "money back guarantee in first 2 month or 10 sessions or your money back"},
      {ekey: "1", question: "I have never done any strength or resistance training - Is this for me?", answer: "we do a thorough intake process and we encourage to find our where you are now, you just might surprise yourself in finding out, you are stronger than you think"}
      
    ]

    const renderQA = (qa, index) => {
        return(
          <FaqQuestion key={index}
            ekey={qa.ekey}
            question={qa.question}
            answer={qa.answer}
        
          />
        ) }

    return (
        <div>      
        <Accordion >
          {questions.map(renderQA)}
            
        
           
         
        </Accordion>
        </div>  
        
    )
}

