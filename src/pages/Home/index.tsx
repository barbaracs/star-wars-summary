import { useEffect, useState } from 'react';
import Search from '../../components/Search';
import { api } from '../../lib/axios';
import Styled from './styles';

const Home = () => {
  const [cast, setCast] = useState<string[]>([])
   
  useEffect(() => {
    console.log('entrou')
    api.get('/people').then((response) => {
      console.log('response', response.data.data)

      setCast(response.data.data)
    })
  }, [])

  return (
    <Styled.HomeContainer>
      <Styled.Stars/>

      <Styled.Header>
        <Styled.Logo/>

        <Styled.SearchContainer>
          <Search />
        </Styled.SearchContainer>
      </Styled.Header>

      {cast.length > 0 && cast.map(person => (
        <p>{person}</p>
      ))}

    </Styled.HomeContainer>
  )
}

export default Home