import styled from 'styled-components';

const Loader = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  border: 16px solid #767676;
  border-top: 16px solid #d3d30e;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default {
  Loader
}