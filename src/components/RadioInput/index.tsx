import React, {useState} from 'react';
import {Container, OptionLabel, Switch,
Slider, Thumb} from './styles';

interface SwitchGroupProps {
  onChange?: (value: 'produto' | 'servico') => void;
}

const SwitchGroup: React.FC<SwitchGroupProps> = ({onChange}) => {
  const [selectedOption, setSelectedOption] = useState<'produto' |
   'servico'>('produto');

  const handleSwitchChange = () => {
    const newOption = selectedOption === 'produto' ? 'servico' : 'produto';
    setSelectedOption(newOption);
    if (onChange) {
      onChange(newOption);
    }
  };

  return (
    <Container>
      <OptionLabel htmlFor="produto" active={selectedOption === 'produto'}>
        Produto
      </OptionLabel>
      <Switch>
        <input
          type="checkbox"
          id="switch"
          checked={selectedOption === 'servico'}
          onChange={handleSwitchChange}
        />
        <Slider htmlFor="switch" active={selectedOption === 'servico'}>
          <Thumb active={selectedOption === 'servico'} />
        </Slider>
      </Switch>
      <OptionLabel htmlFor="servico" active={selectedOption === 'servico'}>
        Serviço
      </OptionLabel>
    </Container>
  );
};

export default SwitchGroup;
