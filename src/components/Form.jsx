import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Outlet, useNavigate } from "react-router-dom";

function Forms() {
  const navigate=useNavigate()

  const handleProducts=(e)=>{
    e.preventDefault()
    navigate("/form/show")

}
  return (
    <Form onSubmit={handleProducts} className="w-50 m-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Label htmlFor="basic-url">Product Image</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Button variant="danger" type="submit">
        Add to Card
      </Button>
      <Outlet/>
    </Form>
  );
}

export default Forms;
