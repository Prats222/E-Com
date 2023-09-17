import React ,{useState}from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";



const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[address,setAddress]=useState("");
    const[phone,setPhone]=useState("");
    const navigate= useNavigate();
    const[answer,setAnswer]=useState("");

const handleSubmit= async(event)=>{
event.preventDefault();
try {
    const res= await axios.post('/api/v1/auth/register',{name,email,password,phone,address,answer});

    if(res && res.data.success){
        toast.success(res.data && res.data.message);
        navigate('/login');
    } else{
        toast.error(res.data.message);
    }
} catch (error) {
    console.log(error)
    toast.error('Something went wrong');
}
};


  return (
    
    <Layout title="Registration">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
          <h4 className='title'>REGISTER FORM</h4>
  <div className="mb-3">
    
    <input type="text" 
    value={name}
    onChange={(event) => setName(event.target.value)}
    className="form-control" id="exampleInputEmail1"
    placeholder='Enter Your Name' required/>
  </div>

  <div className="mb-3">
    
    <input type="email" 
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required/>
  </div>

  <div className="mb-3">
    <input type="text" 
    value={phone}
    onChange={(event) => setPhone(event.target.value)}
    className="form-control" id="exampleInputEmail1" placeholder='Enter Your Phone Number'  required/>
  </div>

  <div className="mb-3">
    <input type="text" 
    value={address}
    onChange={(event) => setAddress(event.target.value)}
    className="form-control" id="exampleInputEmail1" placeholder='Enter Your Address' required/>
  </div>

  <div className="mb-3">
    <input type="password" 
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password'  required/>
  </div>
  
  <div className="mb-3">
    <input type="text" 
    value={answer}
    onChange={(event) => setAnswer(event.target.value)}
    className="form-control" id="exampleInputEmail1" placeholder='Your favourite Sports?' required/>
  </div>


  <button type='submit' className="custom-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
  <span>Register</span>
</button>




</form>
 
        </div>
    </Layout>
  );
};

export default Register