import { Component } from "react";

class NavLinks extends Component {
  render() {
    return (
      <li>
        <span>{">"}</span> <a href={this.props.link}>{this.props.children}</a>
      </li>
    );
  }
}

export default NavLinks;
