import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from "react-router-dom";
import "../styles/Layout.css"
import { Button } from 'react-bootstrap';
 
function Layout({ userNotes, setUserNotes, res  }) {
  const Navigate = useNavigate();

  const logOut = () => {

    localStorage.removeItem("userInfo")
    setUserNotes("");
    Navigate("/login");
  };
  return (
    <div>
      <Navbar id="back">
        <Container>
          <Navbar.Brand>FlipLean</Navbar.Brand>
          <div>
          {   userNotes ?<div>
          <button id="logout" onClick={logOut}>

                Logout
              </button> <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>{res.name} 
              </div>:
             <div>
                <Link id="mar" to="/login">
                  Login
                </Link>
                <Link id="mar" to="/signup">
                  Signup
                </Link>
            
         </div>
}
          </div>
        </Container>
      </Navbar>
  
    </div>
  );
}

export default Layout;