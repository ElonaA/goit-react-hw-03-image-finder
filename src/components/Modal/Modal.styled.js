import styled from '@emotion/styled/macro';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.overlay};
  z-index: 1200;
`;

export const Image = styled.img`
  max-height: 90vh;
`;
