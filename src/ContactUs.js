import Container from 'react-bootstrap/Container';
import PageFooter from './PageFooter.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


function ContactUs() {
  return (
    <div>
      <br /><h3> Contact Us </h3><br /><br />
      <Col xs={3}></Col>
      <Col xs={6}>
        <Form>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="First Name Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
          <Button as="input" type="submit" value="Submit" />{' '}
        </Form>
    </Col>
    <Col xs={3}></Col>
     
    <PageFooter />
      </div>
  );
}

export default ContactUs;