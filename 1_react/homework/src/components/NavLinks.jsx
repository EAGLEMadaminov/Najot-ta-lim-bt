import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function NavLinks(props) {
  return (
    <li>
      <Link to={props.link}>
        <i className={`fa-solid fa-${props.iconName}`}></i> {props.text}
      </Link>
    </li>
  );
}

NavLinks.propTypes = {
  link: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mount: PropTypes.number.isRequired,
  }),
};

export default NavLinks;
