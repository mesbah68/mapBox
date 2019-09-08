import styled from 'styled-components';
const StyledPlacesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const StyledModalWrapper = styled.form`
  min-width: 12rem;
`;
const StyledModalLabel = styled.label`
  padding: 0.5rem;
  font-size: 0.8rem;
`;
const StyledModalInput = styled.input`
  border: 1px solid #c6bcbc;
  border-radius: 0.2rem;
  direction: ltr;
  padding: 0 0.3rem;
  float: left;
  font-size: 0.8rem;
`;

const StyledModalSection = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const StyledAutoCompleteButton = styled.div`
  width: 100%
  height: auto
  font-size: calc(${props => props.theme.defaultRem} * 0.6);
  color: #188c04;
  padding: 1rem 0;
  text-align : center;
  button.confirm {
    cursor: pointer;
    background-color: green;
    color: #fff;
    width: 30%;
    height: 2rem;
    border-radius: 0.2rem;
    font-size : 0.8rem;
    margin : 0 0.5rem;

}
button.delete {
  cursor: pointer;
  background-color: red;
  color: #fff;
  width: 30%;
  height: 2rem;
  border-radius: 0.2rem;
  font-size : 0.8rem;
  margin : 0 0.5rem;

}
button.cancle {
  cursor: pointer;
  background-color: #be2828;
  color: #fff;
  width: 30%;
  height: 2rem;
  border-radius: 0.2rem;
  font-size : 0.8rem;
  margin : 0 0.5rem;

}
  }
`;

const ModalStyles = {
  overlay: {
    zIndex: '9999999',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const StyledPinTooltip = styled.div``;
const StyledPinModalLabel = styled.div`
  padding: 0.5rem 1rem;
  text-align: left;
`;

export {
  StyledPlacesWrapper,
  StyledModalWrapper,
  StyledModalInput,
  StyledModalLabel,
  StyledModalSection,
  StyledAutoCompleteButton,
  StyledPinTooltip,
  StyledPinModalLabel,
  ModalStyles,
};
