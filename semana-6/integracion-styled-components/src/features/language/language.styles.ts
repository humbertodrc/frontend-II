import styled from 'styled-components';

interface LanguageButtonProps {
  isActive: boolean;
}

export const WrapperLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

export const LanguageButton = styled.button<LanguageButtonProps>`
  background-color: white;
  padding: 4px 2px;
  margin-right: 10px;
  /* &.active {
    color: white;
    background-color: #17589f;
  } */
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  background-color: ${(props) => (props.isActive ? '#17589f' : 'white')};
`;
