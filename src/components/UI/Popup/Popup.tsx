import React, {
  FC,
  useRef,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import './Popup.scss';

interface PopupSubComponents {
  TargetElement: React.FC;
  Options: React.FC;
  Option: React.FC<OptionProps>;
}

interface OptionProps {
  onClick?: () => void;
}

interface PopupProps {
  placement:
    | 'top-start'
    | 'top-end'
    | 'top'
    | 'right-start'
    | 'right-end'
    | 'right'
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom'
    | 'left-start'
    | 'left-end'
    | 'left';
}

const PopupContext = createContext<any>(null);

export const Popup: FC<PopupProps> & PopupSubComponents = ({
  children,
  placement,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='popup-wrapper' ref={wrapperRef}>
      <PopupContext.Provider value={{ isVisible, toggleIsVisible, placement }}>
        {children}
      </PopupContext.Provider>
    </div>
  );
};

const TargetElement: FC = ({ children }) => {
  const { toggleIsVisible } = useContext(PopupContext);

  return <span onClick={toggleIsVisible}>{children}</span>;
};

const Options: FC = ({ children }) => {
  const { isVisible, placement } = useContext(PopupContext);

  return (
    <>
      {isVisible && <ul className={`popup popup--${placement}`}>{children}</ul>}
    </>
  );
};

const Option: FC<OptionProps> = ({ children, onClick }) => {
  const { toggleIsVisible } = useContext(PopupContext);

  const handleClick = () => {
    onClick?.();
    toggleIsVisible();
  };

  return (
    <li className='popup__item' onClick={handleClick}>
      {children}
    </li>
  );
};

Popup.TargetElement = TargetElement;
Popup.Options = Options;
Popup.Option = Option;
