import React, { FC } from 'react';
import { useState } from 'react';
import './Tooltip.scss';

interface TooltipProps {
  content: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: FC<TooltipProps> = ({ children, content, placement }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return (
    <div className='tooltip-wrapper' onMouseEnter={show} onMouseLeave={hide}>
      <div className='tooltip-wrapper__target-element'>{children}</div>
      {isVisible && (
        <span className={`tooltip tooltip--${placement}`}>{content}</span>
      )}
    </div>
  );
};
