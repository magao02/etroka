import React, {ReactElement} from 'react';
import {StyledButton} from './styles';
import {ContainerGrid} from './styles';

type ButtonProps = {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | ReactElement;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () =>
    | Promise<void>
    | React.MouseEventHandler<HTMLAnchorElement>
    | any
    | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children, Icon, type, onClick}) => {
  return (
    <StyledButton onClick={onClick} type={type} >
      <ContainerGrid>
        {Icon}
        {children}
      </ContainerGrid>
    </StyledButton>
  );
};

export default Button;
