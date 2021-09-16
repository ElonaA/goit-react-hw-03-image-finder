import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.size.title};
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`;

export const Subtitle = styled.div`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  height: auto;
`;
