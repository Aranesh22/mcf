import React from 'react'
import {Card} from 'react-bootstrap'
import 'holderjs'

function Coach({name, imgurl, bio }) {

    return (

        <Card className="card slide-in-from-right " style={{ minWidth: '15rem',  margin:"0.5rem", maxWidth: '15rem'}} >
            <Card.Img variant="top" src={imgurl} onError={(e)=>{e.target.onerror = null; e.target.src="holder.js/100px180?text=Image cap"}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{bio}</Card.Text>
            </Card.Body> 
           
            
        </Card>

       
    )
}

export default Coach
