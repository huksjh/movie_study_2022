import PropTypes from "prop-types";

const Btn = ({ text }) => {
    return <button>{text}</button>;
};

Btn.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Btn;
