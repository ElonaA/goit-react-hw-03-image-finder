import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  zoom: 1;
  line-height: normal;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  font-family: inherit;
  font-size: ${props => props.theme.size.subtitle};
  outline: none;
  border: 0 transparent;
  padding: 12px 60px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  text-decoration: none !important;
  border-radius: 50px !important;

  &:hover,
  &:focus {
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    ) !important;
  }
`;
