import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageFooterInfo() {
  return (
    <Container fluid style={{
          backgroundColor: '#deded5', textAlign: 'left'
        }}>
      <Row>
        <Col>
          <p><b>SciPlanet</b></p>
          <p>We offer various scientific laboratories to learn equipments and experiments. 
            We also take sample and perform requested analysis of this. You can also use our
            facilities on your own.</p>
        </Col>
        <Col>
          <p><b>contact</b></p>   
          <p>Unit-2, 2445 Clover Street. <br/>Ottawa</p>
          <p>Email : sciplanet@gmail.com</p>
        </Col>
        <Col>
          <p><b>opening hours</b></p>
          <p>Mon - Fri : 11 AM - 7 PM<br/>Sat - Sun : 8 AM - 7 PM</p>
        </Col>
      </Row>
    </Container>
  );
}

function PageFooterDown() {
  return (
            <div class="row">
                <div class="col">
                  <div class="footer-down">
                    <p align="center">© 2023 Copyright: </p>
                  </div>
                </div>
            </div>

  );
}

function PageFooter() {
  return (
    <footer>
        <PageFooterInfo />
        <PageFooterDown />
    </footer>

  );
}

export default PageFooter;