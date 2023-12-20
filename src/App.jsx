import { useState } from 'react';
 import './App.css';
 import SignUp from "./pages/SignUp";
 import Login from "./pages/Login";
 import { Route,Routes, Navigate} from "react-router-dom";
import Home from './pages/Home.jsx';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Layout from './pages/Layout.jsx';
 
import Welpage from './pages/Welpage.jsx';
import Successed from './pages/Successed.jsx';
function App() {
  const [userNotes, setUserNotes] = useState( );
  const [res,setRes]=useState( {})
  return (
    <>
    <Layout   userNotes={userNotes}
           setUserNotes={setUserNotes} res={res} setRes={setRes}></Layout>
    <Routes >
    <Route path="/" element={<Welpage/>} /> 
      <Route path="/signup" element={<SignUp/>} /> 
      <Route path="/login" element={<Login  userNotes={userNotes}
            setUserNotes={setUserNotes}/>} />
  
      <Route  
            path="/home" 
            element={ userNotes ? <Home  userNotes={userNotes}
            setUserNotes={setUserNotes} res={res} setRes={setRes}/> : <Navigate to='/login'></Navigate>}/> 
      <Route path="/forgot-password" element={<ForgotPassword/>} /> 
   
      <Route path="/reset-password/:id/:token" element={<ResetPassword/>} /> 
      <Route path="/signin/succ/:token" element={<Successed/>} /> 
    </Routes>
    
        
    </>
  )
}

export default App
