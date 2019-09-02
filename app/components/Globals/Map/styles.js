import styled from 'styled-components';
const StyledMapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  > div {
    width: 100% !important;
    height: 100% !important;
    direction: ltr;
  }
`;
const StyledMarkerWrapper = styled.div`
  width: ${props => props.theme.defaultRem};
  height: auto;
  img {
    max-width: 100%;
  }
`;
export { StyledMapWrapper, StyledMarkerWrapper };
