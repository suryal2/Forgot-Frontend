import React,{ useState } from 'react';
import { Container,Form,Button } from "react-bootstrap";
import '../styles/Login.css';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/global";



const Login = ({setUserNotes}) => {

     const [formData,setFormData] = useState({
            email:"",
            password:""
    });
    const[err, seterror] = useState();

    const navigate = useNavigate(); 
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value });
              };
              const handleSubmit = async(e)=>{ 
                e.preventDefault();
               
                    const response = await axios.post(`${API_URL}/login`,formData);
                    console.log(response);
                   if(response.data === "Invalid User name or password"){
                    alert("Invalid User name or password");
                    seterror("Invalid User name or password")
                   } else if(response.data=== "Server Busy"){
                    alert("verify your email id")
                   } else if (response?.status){
                    setUserNotes(response.data )
                    localStorage.setItem("logtoken", response.data.token);
                    navigate("/home")
                   }
                    
                
            }
        
                
    



  return (
     <div className="sin">
    <img id="" src="https://i.pinimg.com/564x/82/2b/09/822b09f88cf2bfa791fb97b7d8b13b68.jpg" alt="imag"></img>
<Container id="cslog">
    
      
     
        <h2>Login</h2>  <div id="err">{err}</div> 
        <Form onSubmit={handleSubmit}>
             
         
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                className="input"
                 type="email" 
                 name="email" 
                 value={formData.email} 
                 onChange={handleChange} 
                 required /> 
            </Form.Group>
         
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                className="input"
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required /> 
            </Form.Group>
          
            <Button variant="primary" type="submit">Login</Button>
            <p><Link to="/forgot-password">Forgot Password</Link></p>
            <p>Already doesn't have an account?  <Link to="/signup">sinup</Link> </p>
          
        </Form>
        </Container>
     
        </div>
  )
}

export default Login;