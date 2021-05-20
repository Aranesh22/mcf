import React from 'react'
import Coach from './Coach'

import {Container, CardDeck} from 'react-bootstrap'

export default function Coaches() {
    const coachInfo = [ //example info - this will likely be populated by calling a GET req to the server 
      {Name: 'name here', imgPath: 'holder.js/100px180?text=Image cap', bio: 'short snippet bio here'},
      {Name: 'test01', imgPath: 'holder.js/100px180?src=https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg/', bio: 'bio here 02'},
      {Name: 'tester', imgPath: 'holder.js/100px180?src=https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg/', bio: 'no'},
      {Name: '', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''},
      {Name: 'firstname lastname', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''},
      {Name: '', imgPath: '', bio: ''}
    ]

    const renderCoach = (card, index) => {
      return(
        <Coach key={index}
            name={card.Name}
            imgurl={card.imgPath}
            bio={card.bio}
        />
      ) 
      // maybe have a check to see if a card is blank / missing contents 
    }

    return (
      <Container className="justify-content-center" >
          <CardDeck className="d-flex flex-wrap" >
              {coachInfo.map(renderCoach)}
          </CardDeck>
      </Container>
     
    )
}
