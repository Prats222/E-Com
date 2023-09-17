import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
      <p>
    At PRATSHOP, we value your privacy and are committed to protecting your personal information.
  </p>
  <p>
    <strong>Collection of Information:</strong> We may collect personal information such as your name, email address, and shipping address when you create an account or make a purchase on our platform.
  </p>
  <p>
    <strong>Use of Information:</strong> We use your information to process orders, provide customer support, and personalize your shopping experience.
  </p>
  <p>
    <strong>Security:</strong> We take security seriously and implement measures to protect your data.
  </p>
  <p>
    <strong>Third Parties:</strong> We may share your information with trusted third-party partners to improve our services.
  </p>
 
      </div>
    </div>
  </Layout>
);
};


export default Policy;