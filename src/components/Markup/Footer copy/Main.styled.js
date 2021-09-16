import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  padding: 7px 20px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.size.title};
  color: ${props => props.theme.colors.green};
  font-weight: 400;
`;

export const Image = styled.img`
  display: block;
  height: auto;
`;
