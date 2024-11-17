import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//필요한 라이브러리 임포트
import Container from 'react-bootstrap/Container';
import {Button, Stack  } from 'react-bootstrap';
import {Route, Link, Routes}from 'react-router-dom';
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

//페이지 임포트
import Product from './pages/product.js';
import Main from './pages/main';
import Info from './pages/info.js';
import Login from './pages/login.js';









function App() {
  
  //let navigate = useNavigate();
  
  return (
  <div className="App">
  <Navbar className="navbar" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Shoes Shop</Navbar.Brand>
        <Nav className="me-auto">
        				<Nav.Link href="/product">product</Nav.Link>
				 																				<Nav.Link href="/info">info</Nav.Link>
  																		</Nav>
  																		<Nav className="ms-auto">
  																						<Nav.Link className="login" href="/login">login</Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  
				<Routes>
								<Route path='/' element={<Main/>}/>
 					<Route path='/product' element={<Product/>}/>
								<Route path='/info' element={<Info/>}/>
								<Route path='/login' element={<Login/>}/>
				</Routes>
				
  
  
  
  
  
  <div>push 테스트</div>
  
  
  
				<hr></hr>
				<div className="bottom">
  		<p>Shoes Shop</p>
  		<p>로그인</p>
  		<p>고객센터</p>
  
  
  
  </div>
  
  
  

  
  
  
  
  
  
  </div>
  );
}

export default App;
