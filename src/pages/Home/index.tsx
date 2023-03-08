import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Search from '../../components/Search';
import { api } from '../../lib/axios';
import Styled from './styles';


const Home = () => {
  const [cast, setCast] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!searchValue) return

    setLoading(true)

    api.get('/person', {
      params: {
        search: searchValue
      }
    }).then((response) => {
      if (response) {
        setCast(response.data.data)
      }

      setLoading(false)
    })
  }, [searchValue])
   
  useEffect(() => {
    if (searchValue) return

    setLoading(true)
    
    api.get('/people').then((response) => {
      setCast(response.data.data)

      setLoading(false)
    })
  }, [searchValue])

  return (
    <Styled.HomeContainer>
      <Styled.Stars/>

      <Styled.Header data-testid="header">
        <Styled.Logo/>

        <Styled.SearchContainer data-testid="search-bar">
          <Search value={searchValue} setValue={setSearchValue}/>
        </Styled.SearchContainer>
      </Styled.Header>

      <Styled.CastContainer data-testid="result-list">
        <ul>
          {cast.length > 0 && cast.map((person, index) => (
            <li key={`${index}-${person}`}>{person}</li>
          ))}
        </ul>
      </Styled.CastContainer>

      {loading && (
        <Loader />
      )}
    </Styled.HomeContainer>
  )
}

export default Home