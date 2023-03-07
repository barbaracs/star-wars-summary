import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: -webkit-linear-gradient(to top, #38393a, #0e0e0e);
  background: linear-gradient(to top, #38393a, #0e0e0e);
  background: -olinear-gradient(to top, #38393a, #0e0e0e); 
  overflow: hidden;
`

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url('/background-stars.png') repeat top center;
  z-index: 0;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  margin: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const Logo = styled.span`
  height: 80px;
  width: 140px;
  background-image: url('./logo.png');
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 600px) {
    width: 220px;
    height: 40px;
    background-size: 220px 40px;
    background-image: url('./long-logo.svg');
  }
`

const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
`

const CastContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  z-index: 2;
  
  ul {
    height: 100%;
    display: flex;
    flex-direction: flex-start;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }
  
  li {
    list-style-type: none;
    color: white;
    padding: 10px;
    font-size: 24px;
  }
`

export default {
  HomeContainer,
  Stars,
  Header,
  Logo,
  SearchContainer,
  CastContainer
}