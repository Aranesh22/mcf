import React from 'react'
import Coach from './Coach'
import faceOfFitness from '../assets/AYAP5379.jpeg'

import {Container, CardDeck} from 'react-bootstrap'

export default function Coaches() {
    const coachInfo = [ //example info - this will likely be populated by calling a GET req to the server 
      {Name: 'name here', imgPath: faceOfFitness, bio: 'short snippet bio here'},
      {Name: 'test01', imgPath: faceOfFitness, bio: 'bio here 02'},
      {Name: 'tester', imgPath: faceOfFitness, bio: 'no'},
      {Name: 'The face of fitness', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''},
      {Name: 'firstname lastname', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''},
      {Name: '', imgPath: faceOfFitness, bio: ''}
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
