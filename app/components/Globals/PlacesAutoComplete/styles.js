import styled from 'styled-components';
const StyledAutoCompleteWrapper = styled.div`
  position: absolute;
  top: calc(${props => props.theme.defaultRem});
  left: calc(${props => props.theme.defaultRem});
  z-index: 100;
  max-width: calc(${props => props.theme.defaultRem} * 15);
  width: calc(100% - calc(${props => props.theme.defaultRem} * 7));
`;

const StyledAutoCompleteForm = styled.form`
  height: calc(${props => props.theme.defaultRem} * 1.5);
  background: ${props => props.theme.colors.white};
  border-radius: calc(${props => props.theme.defaultRem} * 3.5);
  overflow: hidden;
  font-size: calc(${props => props.theme.defaultRem} * 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: calc(${props => props.theme.defaultRem} * 0.5);
  > * {
    height: 100%;
    padding: calc(${props => props.theme.defaultRem} * 0.5);
    > * {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      padding: 0;
    }
  }
`;

const StyledAutoCompleteButton = styled.div`
  width: calc(${props => props.theme.defaultRem} * 3);
  height: calc(${props => props.theme.defaultRem});
  font-size: calc(${props => props.theme.defaultRem} * 0.6);
  color: #188c04;
  padding: 0;
  button {
    cursor: pointer;
  }
`;

const StyledIcon = styled.i`
  font-size: calc(${props => props.theme.defaultRem} * 0.8);
`;

export {
  StyledAutoCompleteWrapper,
  StyledAutoCompleteForm,
  StyledAutoCompleteButton,
  StyledIcon,
};
