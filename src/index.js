import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ssvg from './arrow.svg'
import './App.css';

export default function Carousel(props) {
  const [mode, setMode] = useState(0);
  const next = () => {
    mode === 1 - props.images.length ? setMode(0) : setMode(mode - 1);
  };
  const prev = () => {
    mode === 0 ? setMode(1 - props.images.length) : setMode(mode + 1);
  };

  useEffect(() => {
    if (props.images.length > 1 && props.timespace) {
      let interval = null;
      interval = setInterval(() => next(), props.timespace);
      return () => clearInterval(interval);
    }
  }, [mode]);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev()
  });

  const Arrow = ({ classStyles, func, hideArrowForMobile, timespace, imageRotate }) => <div
    className={`top-1by2 translate-y absolute block transition-all duration-100 full-rounded ${hideArrowForMobile && 'hidden'} sm-block ${timespace ? 'opacity-30 hover:opacity-40' : 'opacity-50 hover:opacity-70'} ${classStyles}`} onClick={() => func()}>
    <img
      className={`w-8 py-0point5 pr-1 ${timespace ? 'bg-gray-800' : 'bg-none'} rounded-full ${imageRotate}`}
      src={ssvg}
      alt="Arrow Icon"
    />
  </div>

  if (props.images.length === 0) return null;

  return (
    <div
      className={`flex bg-trans outline-none flex-1 justify-center align-center relative overflow-hidden ${props.styleClass}`}
      style={props.style}
    >
      <div className='absolute inset-0 flex flex-1 justify-center align-center'>
        <div
          {...handlers}
          className="h-full absolute flex transition-all duration-500"
          style={{ width: `${props.images.length}00%`, left: `${mode}00%` }}
        >
          {props.images.map((img) => 
            <span
              className={`w-full h-full bg-black/20 flex justify-center bg-no-repeat ${props.carusal_cover ? 'bg-cover' : 'bg-contain'} bg-center`}
              style={{ backgroundImage: `url(${img})` }}
            />
          )}
        </div>
        <div className="h-4 absolute flex gap-2 bottom-0">
          {props.pageIndicator && props.images.length > 1 && props.images.map((img, index) => (
            <div
              className={`h-2 w-2 bg-gray-50 rounded-full mb-2 ${index + mode === 0 ? "opacity-90" : "opacity-40"} transition-all duration-200`}
              onClick={() => setMode(-index)}
            />
          ))}
        </div>
        {/* props.arowVisible && */}
        {props.arrowVisible && props.images.length > 1 && <>
          <Arrow classStyles='left-0 pr-4 pl-1' imageRotate={` `} hideArrowForMobile={props.hideArrowForMobile} timespace={props.timespace} func={prev} />
          <Arrow classStyles='right-0 pl-4 pr-1' imageRotate={`rotate-180`} hideArrowForMobile={props.hideArrowForMobile} timespace={props.timespace} func={next} /></>}
      </div>
    </div>
  );
}
