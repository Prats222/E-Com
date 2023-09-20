import React from 'react';
import Layout from '../components/Layout/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <img
              src="/images/about.jpeg"
              alt="About us"
              className="img-fluid ding"
            />
          </Col>
          <Col md={6}>
         

            <p className="text-justify dong">
              At PRATSHOP, we are more than just an online store; we are a
              passionate team driven by a vision. Our journey started with a
              simple idea: to provide the best quality products with unmatched
              convenience. Over the years, we've grown into a trusted
              destination for shoppers seeking quality, variety, and
              exceptional service. We take pride in curating a selection that
              caters to your needs, and our commitment to excellence drives us
              to go the extra mile. We've built a brand that stands for
              reliability and customer satisfaction. Join us on this exciting
              shopping adventure, and discover why we're not just a store but
              a community built around your needs and aspirations. Welcome to
              PRATSHOP – Where Shopping Finds a New Home.
          </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
