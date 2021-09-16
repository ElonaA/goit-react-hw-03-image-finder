import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  padding: 7px 20px;
  display: flex;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Link = styled.a`
  font-size: ${props => props.theme.size.subtitle};
  color: ${props => props.theme.colors.link};
  font-weight: 400;
  text-decoration: underline;
`;

export const Image = styled.img`
  height: auto;
  margin-right: 15px;
`;
