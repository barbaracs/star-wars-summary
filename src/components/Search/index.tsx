import { useState } from 'react';
import Styled from './styles';

const Search = () => {
  const [value, setValue] = useState<string>('')

  return (
      <Styled.Input 
        type="text"
        placeholder="Pesquise aqui os personagens..."
        value={value}
        onChange={event => setValue(event.target.value)}
      />
  )
}

export default Search