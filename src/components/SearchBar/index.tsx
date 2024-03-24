import React, {SetStateAction} from 'react';
import {Container} from './styles';
import {Input} from './styles';
import {SearchIcon} from './styles';
import searchIcon from 'assets/img/lupa.png';
import arrowIcon from 'assets/img/arrow.png';
import {ButtonOrange} from './styles';
import {ArrowIcon} from './styles';

interface SearchPros {
  search: string,
  setSearch: React.Dispatch<SetStateAction<string>>
  onSearchChange: (filterBy: string) => void
}

const SearchBar: React.FC<SearchPros> = ({
  search,
  setSearch,
  onSearchChange}) => {
  return (
    <Container>
      <SearchIcon src={searchIcon} />
      <Input
        placeholder='Pesquisar' type='text'
        onChange={(e) => {
          setSearch(e.target.value);
          onSearchChange(e.target.value);
        }}
        value={search}>
      </Input>

      <ButtonOrange type='submit'> 
        Pesquisar
        <ArrowIcon src={arrowIcon} />
      </ButtonOrange>
    </Container>
  );
};

export default SearchBar;
