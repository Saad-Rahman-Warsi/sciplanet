import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import PageHeader from './PageHeader.js';
import PageFooter from './PageFooter.js';

import img1 from './images/homeimg1.jpg';
import img2 from './images/homeimg2.jpg';
import img3 from './images/homeimg3.jpg';
import img4 from './images/homeimg4.jpg';
import img5 from './images/homeimg5.jpg';
import img6 from './images/homeimg6.jpg';

function HomeCenter(props) {
  return (
 <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={props.im1} alt="First slide" />
        <Carousel.Caption>
          <h3> {props.label1} </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={props.im2} alt="Second slide" />
        <Carousel.Caption>
          <h3> {props.label2} </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

  );
}

function Home() {
  return (
    <div>
      
      <br/>
      <Container>
        <Row>
      
          <Col>
            <Row>
              <HomeCenter label1="Cell Examination" label2="Titration" im1={img1} im2={img2}/>
            </Row>
            <Row> <h3>Learn Experiments</h3> </Row>
          </Col>

          <Col>
            <Row>
              <HomeCenter label1="Soil Sample" label2="Honey Sample" im1={img3} im2={img4}/>
            </Row>
            <Row> <h3>Sample Analysis</h3> </Row>
          </Col>
          
          <Col>
            <Row>
              <HomeCenter label1="Experiments1" label2="Experiments2" im1={img5} im2={img6}/>
            </Row>
            <Row> <h3>Use Advanced Facilities</h3> </Row>
          </Col>
          
        </Row>
      </Container>
      <br/>
      <PageFooter />
     </div>
  );
}

export default Home;