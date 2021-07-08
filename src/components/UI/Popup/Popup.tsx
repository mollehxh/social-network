import React, { FC, useRef, useEffect, useState } from 'react';
import './Popup.scss';

interface PopupProps {
  component: React.ReactElement;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const Popup: FC<PopupProps> = ({
  children,
  component,
  top,
  right,
  bottom,
  left,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(popupRef.current)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className='popup-wrapper' ref={popupRef}>
      <div
        className='popup-wrapper__target-element'
        onClick={() => setIsVisible(!isVisible)}
      >
        {component}
      </div>
      {isVisible && (
        <div
          className='popup'
          style={{ top: top, right: right, bottom: bottom, left: left }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
