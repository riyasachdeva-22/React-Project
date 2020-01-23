import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Navbar,Nav} from 'react-bootstrap';
import './navi.css';
class Navi extends Component
{
    render(){
        return (
            <header className="toolbar">
              <nav className="toolbar-nav">
                <div className="toolbar-logo"><b>DELITE</b></div>
                <div className="spacing"/>
                <div className="toolbar-items">
                  <ul>
                    <li><b><a href="/log">Login</a></b></li>
                    <li><b><a href="/sign">SignUp</a></b></li>
                  </ul>
                </div>
              </nav>
            </header>
  //             <div className="d-flex justify-content-between bd-highlight">
  //             <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{width:'100%'}}>
  // <Navbar.Brand href="/"><b>DELITE</b></Navbar.Brand>
  // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  // <Navbar.Collapse id="responsive-navbar-nav">
  // <Nav className="responsive-nav" style={{paddingLeft:'990px'}}> 
  // <Nav.Link href="/log"><button type="button" className="btn btn-dark">LogIn</button></Nav.Link>
  // <Nav.Link href="/sign"><button type="button" className="btn btn-dark">SignUp</button></Nav.Link>
  //   </Nav>
  // </Navbar.Collapse>
  // </Navbar>
  // </div>      
        );
    }
}   
                
    

export default Navi;
