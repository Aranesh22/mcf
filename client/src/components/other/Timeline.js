import React from 'react';
import'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/Timeline.css'
import Milestone from './Milestone';

import faceOfFitness01 from '../assets/AYAP5379.jpeg' //will not need these as they will be contained w/in the objects 
import faceOfFitness from '../assets/BKYJ9883.jpeg'

export default function Timeline() {

    const milestoneInfo = [ //info will likely be rendered by the server 
        {
          imgurl:faceOfFitness01,
          Milestonetext: 'The face of fitness is chosen',
          year:2011
        },
        {
          imgurl:faceOfFitness,
          Milestonetext: 'The face of fitness begins their journey ',
          year:2012
        }, 
        {
          imgurl:faceOfFitness01,
          Milestonetext:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,',
          year:2013
        }
        ]
        

    const renderMilestone = (entry, index) => {
        return (
                <VerticalTimelineElement
                    
                    // date={entry.year}
                    // iconStyle={{display:'none'}}
                  
                    iconStyle={{background:'white', color:'black', textAlign:'center', paddingTop:'1%', fontSize:'2rem', marginBlock:'10%', zIndex:'1' }}
                  
                    icon={entry.year}


                >
                    <Milestone 
                        key={index}
                        imgurl={entry.imgurl}
                        Milestonetext={entry.Milestonetext}
                      />
                </VerticalTimelineElement>
        ) 
      }

    return (
            <VerticalTimeline>
{/* First/Title element */}
                <VerticalTimelineElement
                   
                    // date="2011 - present"
                    iconStyle={{display:'none'}}
                    // iconStyle={{background:'black', color:'white', textAlign:'center', padding:'1%', overflow:'none'}}
                    icon="2011"
                >
                    <h1 className="vertical-timeline-element-title">Our Journey</h1>
                </VerticalTimelineElement>
              
{/* Render timeline elements  */}
                    {milestoneInfo.map(renderMilestone)}
                </VerticalTimeline>
                    
    )
}
