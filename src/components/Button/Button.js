import PropTypes from "prop-types";
import s from "./Button.module.css";


export default function Button({ onClick }) {
  return (
    <div className={s.container}>
      <button
        type="button"
        className={s.button}
        onClick={() => {
        onClick();
      }}
      >
        Load more...
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};