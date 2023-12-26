import { Form, Button as BSButton } from "react-bootstrap";

const Events = () => {
  function handleClick() {
    console.log("Bosildi");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    e.target.reset();
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <BSButton  onClick={handleClick}>Button</BSButton>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            onChange={handleChange}
            placeholder="Card Number"
          />
          <button type="submit">Jo'natish</button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Events;
