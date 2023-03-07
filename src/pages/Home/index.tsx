import Search from '../../components/Search';
import Styled from './styles';

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Styled.Stars/>

      <Styled.Header>
        <Styled.Logo/>

        <Styled.SearchContainer>
          <Search />
        </Styled.SearchContainer>
      </Styled.Header>

    </Styled.HomeContainer>
  )
}

export default Home