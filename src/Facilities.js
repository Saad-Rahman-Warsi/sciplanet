import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PageHeader from './PageHeader.js';
import PageFooter from './PageFooter.js';

function SearchFilter() {
  return (
    <Form style={{
          backgroundColor: '#F2F4F4', color:'Green', padding: '20px', textAlign: 'left'
        }}>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label><b>Area</b></Form.Label>
        <Form.Check type='checkbox' label='Physics' id='bt1' />
        <Form.Check type='checkbox' label='Chemistry' id='bt2' />
        <hr />

        <Form.Label><b>Sub-Area</b></Form.Label>
        <Form.Check type='checkbox' label='Optics' id='bt1' />
        <Form.Check type='checkbox' label='Electrical' id='bt1' />
        <Form.Check type='checkbox' label='Organic Chemistry' id='bt2' />
        <hr />

        <Form.Label><b>Type of Facility</b></Form.Label>
        <Form.Check type='checkbox' label='Spectroscopy' id='bt1' />
        <Form.Check type='checkbox' label='chromatography' id='bt2' />
        <hr />

        <Form.Label><b>Price Range</b></Form.Label>
        <Form.Range />
      </Form.Group>

    </Form>
  );
}

function Facilities() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={3}> <SearchFilter /> </Col>
          <Col xs={9}> </Col>
        </Row>
      </Container>
      <PageFooter />
    </div>
  );
}

export default Facilities;