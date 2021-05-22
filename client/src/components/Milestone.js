import React from 'react'
import {Row, Col } from 'react-bootstrap'

export default function Milestone({imgurl, Milestonetext}) {
    return (
        <>
        <Row>
            <Col>
                <img style={{maxWidth:'80%'}} src={imgurl} ></img>
            </Col>
            <Col>
                <p>{Milestonetext}</p>
            </Col>
        </Row>        
        </>
    )
}
