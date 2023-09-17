import React from 'react'
import Layout from '../components/Layout/Layout';
import {BiLogoGmail,BiSolidPhoneCall} from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
    <div className='row contactus' >
    <div className='col-md-6'>
    <img src='/images/contactus.jpeg' alt="contactus" style={{width:"100%"}} />

    </div>
    <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-white text-center'>CONTACT US
        </h1>
        <p className='text-justify mt-2'> Feel Free To Contact Us : </p>
        <p className='mt-3'><BiLogoGmail /> :www.help@pratshop.com </p>
        
        <p className='mt-3'><BiSolidPhoneCall /> :8961455765</p>
        
    </div>



    </div>


     </Layout> 
  );
};

export default Contact;