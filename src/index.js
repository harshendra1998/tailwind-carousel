import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function Carousel(props) {
  const [mode, setMode] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const totalSlides = props.images.length;
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setMode((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setMode((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides > 1 && props.timespace) {
      timerRef.current = setInterval(next, props.timespace);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [totalSlides, props.timespace, next]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) next();
    if (diff < -50) prev();
    setTouchStart(null);
  };

  if (totalSlides === 0) return null;

  const containerStyle = {
    width: props.width || '100%',
    height: props.height || '300px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  };

  const slideWrapperStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const slidesStyle = {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    transition: 'left 0.5s ease-in-out',
    left: `${mode * -100}%`,
    width: `${totalSlides * 100}%`,
  };

  const dotContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    display: 'flex',
    gap: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    padding: 0,
  };

  const arrowBaseStyle = {
    background: 'rgba(0,0,0,0.3)',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    zIndex: 10,
  };

  const arrowOpacity = props.timespace ? 0.3 : 0.5;

  return (
    <div style={containerStyle}>
      <div style={slideWrapperStyle}>
        <div
          style={slidesStyle}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setTouchStart(null)}
        >
          {props.images.map((img, i) => (
            <div
              key={i}
              style={{
                width: `${100 / totalSlides}%`,
                height: '100%',
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: props.carusal_cover !== false ? 'cover' : 'contain',
              }}
            />
          ))}
        </div>
        {props.pageIndicator && totalSlides > 1 && (
          <div style={dotContainerStyle}>
            {props.images.map((_, i) => (
              <button
                key={i}
                style={{
                  ...dotStyle,
                  opacity: i === mode ? 1 : 0.4,
                }}
                onClick={() => setMode(i)}
              />
            ))}
          </div>
        )}
        {props.arrowVisible && totalSlides > 1 && (
          <>
            <button
              type="button"
              style={{
                ...arrowBaseStyle,
                left: '15px',
                opacity: arrowOpacity,
                ...(props.hideArrowForMobile && { display: 'none' }),
              }}
              onClick={prev}
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
                <path d="M11.06 1.44C10.48 0.85 9.52 0.85 8.94 1.44C8.39 1.99 3.99 6.39 3.44 6.94C2.85 7.52 2.85 8.48 3.44 9.06C3.99 9.61 8.39 14.01 8.94 14.56C9.52 15.15 10.48 15.15 11.06 14.56C11.65 13.97 11.65 13.02 11.06 12.43C10.77 12.14 9.29 10.66 6.63 8L11.06 3.57C11.45 2.54 11.45 1.83 11.06 1.44Z"/>
              </svg>
            </button>
            <button
              type="button"
              style={{
                ...arrowBaseStyle,
                right: '15px',
                opacity: arrowOpacity,
                ...(props.hideArrowForMobile && { display: 'none' }),
              }}
              onClick={next}
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="white" style={{ transform: 'rotate(180deg)' }}>
                <path d="M11.06 1.44C10.48 0.85 9.52 0.85 8.94 1.44C8.39 1.99 3.99 6.39 3.44 6.94C2.85 7.52 2.85 8.48 3.44 9.06C3.99 9.61 8.39 14.01 8.94 14.56C9.52 15.15 10.48 15.15 11.06 14.56C11.65 13.97 11.65 13.02 11.06 12.43C10.77 12.14 9.29 10.66 6.63 8L11.06 3.57C11.45 2.54 11.45 1.83 11.06 1.44Z"/>
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
