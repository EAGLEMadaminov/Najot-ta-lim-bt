// import styles from "./button.module.css";
import { Button as BSButton } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(BSButton)`
  transition: all 0.3s easy-in-out;
  &:hover {
    transform: scale(1.5);
  }
  span {
    background: green;
  }
`;
const Button = () => {
  return (
    <StyledButton variant="danger" size="lg">
      Button
      <span className="maxsus-span">a</span>
    </StyledButton>
  );
};

export default Button;
