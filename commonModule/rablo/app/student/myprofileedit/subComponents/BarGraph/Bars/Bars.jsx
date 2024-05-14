import React from 'react';
import './Bars.scss';

const Bars = ({ lowerVal, upperVal }) => {
  // Calculate the step size
  const step = (10000 - 1000) / 21;

  const getBackgroundColor = (value) => {
    if (value >= lowerVal && value < upperVal) {
      return '#F5334A'; 
    } else {
      return '#6764FF4D'; 
    }
  };

  const getLineStyle = () => {
    return {
      height: '100%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderTop: `2px solid ${getBackgroundColor(lowerVal)}` // Change the color based on lowerVal
    };
  };

  const bars = [];
  for (let i = 0; i < 21; i++) {
    const start = 1000 + i * step;
    const end = start + step;
    const style = { backgroundColor: getBackgroundColor(start) };
    bars.push(<><div key={i} style={style}></div></>);
  }

  return <div className='TuitionFeesGraph_wrapper' style={{ position: 'relative' }}>
    
    {bars}
  </div>;
};

export default Bars;
