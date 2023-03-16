import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(14, 14, 14, 0.5);
  overflow-y: auto;
`

export const ModalWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  outline: 0;
  display: flex;
  align-items: center;
`

export const ModalPrincipal = styled.div`
  background-color: rgb(237, 237, 237);
  position: relative;
  margin: auto;
  border-radius: 4px;
  max-width: 700px;
  padding: 24px;
`

interface TitleProps {
  isActive?: boolean;
}

export const TitleMain = styled.h4<TitleProps>`
  color: ${props => props.isActive ? 'red' : 'black'};
`

// export const TitleMain = styled.h4` 
//   font-size: 24px;
// `