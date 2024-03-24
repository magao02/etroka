import React from 'react';
import {Overlay} from './styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<Props> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
        {children}
    </Overlay>
  );
};

export default MenuOverlay;
