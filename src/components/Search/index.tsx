import { useState } from 'react';
import Styled from './styles';
import { ISearchProps } from './types';

const Search = ({ value, setValue }: ISearchProps) => {
  return (
      <Styled.Input 
        type="text"
        placeholder="Pesquise aqui os personagens..."
        value={value}
        onChange={event => {
          event.preventDefault()
          setValue(event.target.value)
        }}
      />
  )
}

export default Search