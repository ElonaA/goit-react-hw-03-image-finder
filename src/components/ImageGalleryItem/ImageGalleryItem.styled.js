import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Link = styled.h3`
  margin: 0px;
  margin-right: 40px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.review};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
}
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover{
    opacity: 0.9;
    transform: scale(1.02);
    cursor: zoom-in;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const GalleryItem = styled.li`
    min-height: 260px;
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    opacity:1;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

&:hover{
    opacity: 0.9;
    transform: scale(1.02);
    cursor: zoom-in;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
