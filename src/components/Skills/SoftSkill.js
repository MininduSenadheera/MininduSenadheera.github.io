import React from 'react'
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SoftSkill(props) {
  return (
    <div className='boxSkill'>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? props.rating : 0;
          return (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathTransitionDuration: 1.5,
                // Colors
                pathColor: '#5f86f2',
                trailColor: '#e9ecef',
                textColor: '#5f86f2',
              })}
            />
          );
        }}
      </VisibilitySensor>
      <h5 className='mt-3 mb-0' align='center'>{props.skill}</h5>
    </div>
  )
}

export default SoftSkill