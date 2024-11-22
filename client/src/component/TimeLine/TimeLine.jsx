import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

const TimeLine=({timelines=[]}) => {
  return (
    <div>
        <VerticalTimeline lineColor='black'>
        {timelines.map((item, index)=>
            <VerticalTimelineElement key={index}
                className="vertical"
                date={new Date(item.date).toLocaleDateString()}

                // date={item.date.toString().split("T")[0]}
                icon={<img src={item.image?.url} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />}

                // icon={<img src={item.image?.url} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            >
                <h3 className="title">{item.title}</h3>
                <p>{item.description}</p>
            </VerticalTimelineElement>
        )};
        </VerticalTimeline>
    </div>
  )
}

export default TimeLine;
