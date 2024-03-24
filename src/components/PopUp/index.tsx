import React from 'react';

import { PopUpOverlay } from './styles';
import { ContainerPopUp } from './styles';
import { ContainerIconPopUp } from './styles';
import { IconPopUp } from './styles';
import { ContainerTitlePopUp } from './styles';
import { TitlePopUp } from './styles';
import { ContainerSubtitlePopUp } from './styles';
import { SubtitlePopUp } from './styles';
import { ContainerButtonPopUp } from './styles';

import Button from 'components/Button';

interface PopUpProps {
    onClose: () => void;
    message: string;
    subtitle: string;
  }
  
const PopUp: React.FC<PopUpProps> = ({ onClose, message, subtitle }) => {
  
  return (
    <PopUpOverlay>
        <ContainerPopUp>
        <ContainerIconPopUp>
            <IconPopUp />
        </ContainerIconPopUp>

        <ContainerTitlePopUp>
            <TitlePopUp>{message}</TitlePopUp>
        </ContainerTitlePopUp>

        <ContainerSubtitlePopUp>
            <SubtitlePopUp>{subtitle}</SubtitlePopUp>
        </ContainerSubtitlePopUp>

        <ContainerButtonPopUp>
          <Button onClick={onClose}>Retornar</Button>
        </ContainerButtonPopUp>
        </ContainerPopUp>
    </PopUpOverlay>
  );
};  

export default PopUp;