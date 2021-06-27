import React from 'react'
import {CardDeck, Container} from 'react-bootstrap'
// import '../../css/Homepage.css'
import ReviewCardLanding from './ReviewCardLanding'

export default function ReviewsLanding() {  
        const reviews = [
            {author: 'reivew 01', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis commodo magna, vitae tristique quam. Mauris non lacus felis. Vivamus vel metus pulvinar, ullamcorper mauris non, maximus lectus. Proin porta est velit, eget lobortis sapien pulvinar vitae. Nulla facilisi. Nam hendrerit, ex eget dignissim consectetur, arcu mauris accumsan eros, eget condimentum ex urna sit amet erat. Donec egestas convallis rhoncus. Nam volutpat eu purus eget consequat. Nullam quis ex metus. Etiam sagittis sit amet libero sollicitudin imperdiet. Nulla eu faucibus purus, eget tempor enim.'},
            {author: 'reivew 02', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis commodo magna, vitae tristique quam. Mauris non lacus felis. Vivamus vel metus pulvinar, ullamcorper mauris non, maximus lectus. Proin porta est velit, eget lobortis sapien pulvinar vitae. Nulla facilisi. Nam hendrerit, ex eget dignissim consectetur, arcu mauris accumsan eros, eget condimentum ex urna sit amet erat. Donec egestas convallis rhoncus. Nam volutpat eu purus eget consequat. Nullam quis ex metus. Etiam sagittis sit amet libero sollicitudin imperdiet. Nulla eu faucibus purus, eget tempor enim.'},
            {author: 'reivew 03', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis commodo magna, vitae tristique quam. Mauris non lacus felis. Vivamus vel metus pulvinar, ullamcorper mauris non, maximus lectus. Proin porta est velit, eget lobortis sapien pulvinar vitae. Nulla facilisi. Nam hendrerit, ex eget dignissim consectetur, arcu mauris accumsan eros, eget condimentum ex urna sit amet erat. Donec egestas convallis rhoncus. Nam volutpat eu purus eget consequat. Nullam quis ex metus. Etiam sagittis sit amet libero sollicitudin imperdiet. Nulla eu faucibus purus, eget tempor enim.'}
        ]
        const renderReview = (card, index) => {
            return(
              <ReviewCardLanding key={index}
                    author={card.author}
                    txt={card.review}
              />
            ) 
            // maybe have a check to see if a card is blank / missing contents 
          }
    return (
        <Container className="reviewContainer d-flex justify-content-center" >
          <CardDeck className="d-flex reviewDeck" >
              {reviews.map(renderReview)}
          </CardDeck>
      </Container>
    )
}
