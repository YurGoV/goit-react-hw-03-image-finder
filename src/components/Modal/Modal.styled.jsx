import styled from '@emotion/styled';


export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
` ;



export const ModalContent = styled.div`
  //visibility: hidden;
  opacity: ${props => props.opacityValue ? 1 : 0};
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  //min-height: 70%;
  max-height: 747px;
  max-width: 996px;
  width: 100%;
  //object-fit: cover;
  padding: 1px;
  background-color: grey;
  //background-color: background: rgba(0,0,0,0.5);
  border: 1px solid #3f51b5;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: opacity 0.25s;
`;

export const ModalLoader = styled.div`
  position: absolute;
  top: 55%;
  left: 55%;
  transform: translate(-50%, -50%);
  //min-height: 70%;
  //max-height: 747px;
  max-width: 500px;
  width: 100%;
  //object-fit: cover;
  padding: 0;
  background-color: transparent;
  //background-color: background: rgba(0,0,0,0.5);
  border: 0;
  //border-radius: 3px;
  //box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  //0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

