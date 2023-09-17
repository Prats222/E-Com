import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
      <Layout title={"About us - Ecommer app"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
              className='img-fluid'
            />
          </div>
        
          <div className="col-md-4">
            <p className="text-justify mt-2 ">

            At PRATSHOP, we are more than just an online store; we are a passionate team driven by a vision. Our journey started with a simple idea: to provide the best quality products with unmatched convenience. Over the years, we've grown into a trusted destination for shoppers seeking quality, variety, and exceptional service. We take pride in curating a selection that caters to your needs, and our commitment to excellence drives us to go the extra mile. We've built a brand that stands for reliability and customer satisfaction. Join us on this exciting shopping adventure, and discover why we're not just a store but a community built around your needs and aspirations. Welcome to PRATSHOP – Where Shopping Finds a New Home.
           
            </p>
            
          </div>
        </div>
      </Layout>
    );
  };

export default About