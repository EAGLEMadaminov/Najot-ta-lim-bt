import { Component } from "react";
import { Link } from "react-router-dom";

class NavLinks extends Component {
  render() {
    return (
      <li>
        <span>{">"}</span>{" "}
        <Link to={this.props.link}>{this.props.children}</Link>
      </li>
    );
  }
}

export default NavLinks;
