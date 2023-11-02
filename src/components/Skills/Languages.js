import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react'
import VisibilitySensor from "react-visibility-sensor";

function Languages(props) {
  return (
    <div>
      <h5>{props.language}</h5>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? props.rating : 0;
          return (
            <ProgressBar
              className='mb-3'
              bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
              completed={percentage}
              isLabelVisible={false}
              animateOnRender={true}
            />
          );
        }}
      </VisibilitySensor>
    </div>
  )
}

export default Languages