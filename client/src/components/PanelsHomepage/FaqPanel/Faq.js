import React from 'react'
import { Accordion } from 'react-bootstrap'
// import '../../../css/howitWorks.css'
import FaqQuestion from './FaqQuestion'

export default function Faq() {

    const questions = [
      {ekey: "0", question: "So how much does this cost?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."},
      {ekey: "1", question: "What do I get?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."},
      {ekey: "2", question: "Is it really for me?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."},
      {ekey: "3", question: "What if I don't like it?", answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."}
    
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

