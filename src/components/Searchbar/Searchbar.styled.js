import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  background-color: rgb(74 74 74 / 84%);
  padding: 40px 15px 60px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    background-repeat: no-repeat;
    outline: none;
    border: 2px solid  ${props => props.theme.colors.green};
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    background-position: 10px;
    border-radius: 25px;
    padding-left: 25px;
    height: 50px;
}
    &:focus {
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
    border-color: #43a047;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(67 160 71 / 46%);
}
`;

export const Wrapper = styled.div`
padding-top: 10px;
padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  width: 700px;
  margin-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
`;
export const Label = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    zoom: 1;
    margin-left: 30px;
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
    font-size: 100%;
    font-weight: 500;
    outline: none;
    border: 0 transparent;
    padding: 7px 30px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    text-decoration: none !important;
    border-radius: 50px !important;
    height: 50px;
}
  &:hover,
  &:focus {
    background-image: linear-gradient(transparent, rgba(0, 0, 0, .05) 40%, rgba(0, 0, 0, .1));
  }
`;
