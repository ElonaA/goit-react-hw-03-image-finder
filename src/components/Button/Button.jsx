import PropTypes from "prop-types";
import {Wrapper, ButtonStyled } from "./Button.styled";


export default function Button({ onClick }) {
  return (
    <Wrapper>
      <ButtonStyled
        type="button"
        onClick={() => {
        onClick();
      }}
      >
        Load more...
      </ButtonStyled>
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};