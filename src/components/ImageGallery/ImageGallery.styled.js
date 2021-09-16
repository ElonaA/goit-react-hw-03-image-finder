import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  flex: 1;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  min-height: 100%;
  padding: 10px;
  padding-bottom: 30px;
  list-style: none;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 50px;
`;
