import styled from 'styled-components';

const Sky = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: -webkit-linear-gradient(to top, #38393a, #0e0e0e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #38393a, #0e0e0e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: -olinear-gradient(to top, #38393a, #0e0e0e); 
`;

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

const Logo = styled.span`
  position: absolute;
  margin: 15px;
  height: 80px;
  width: 140px;
  background-image: url('./logo.png');
  background-size: cover;
`

export default {
  Sky,
  Stars,
  Logo
}