import Container from 'react-bootstrap/Container';
import PageFooter from './PageFooter.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import abt1 from './images/aboutus1.jpg';
import abt2 from './images/aboutus2.jpg';

function AboutUs() {
  return (
    <div>
      <br /><h3> About Us </h3><br /><br />
     <Container fluid style={{
          backgroundColor: '#F2F4F4', textAlign: 'left'
        }}>
        
      <Row>
        <Col xs={8}>
          <h3>Our Story</h3>
          <p>Our company was born out of a profound belief in the power of science to ignite curiosity, 
          transform lives, and shape a better future for all. We have embarked on a remarkable journey to 
          make the wonders of scientific laboratories 
          accessible to the public. Our story begins with a vision to bridge the gap between the
           scientific community and the wider society. We initially started with helping the student
           in understanding the experiments better. Today we have expanded this to sample analysis 
           and advanced equipment.</p>
        </Col>
        <Col xs={4}>
          <img className="d-block w-100" src={abt1} alt="Our Story" />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col xs={4}>
          <img className="d-block w-100" src={abt2} alt="Our Story" />
        </Col>
        <Col xs={8}>
          <h3>Our Mission</h3>
          <p>Our Mission to democratize access to scientific laboratories and inspire a passion for 
          discovery in the public. Our company is driven by a deep-rooted commitment to make scientific 
          exploration inclusive and accessible to all. We strive to provide a welcoming space where 
          individuals from diverse backgrounds can engage in hands-on experiments, gain practical scientific 
          knowledge, and foster a love for learning.</p>
        </Col>
      </Row>

    </Container>
    <PageFooter />
      </div>
  );
}

export default AboutUs;