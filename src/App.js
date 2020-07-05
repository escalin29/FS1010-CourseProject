import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Escalin E',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' },
        { title: 'Login', path: '/login' }
      ],
      home: {
        title: 'Hello!..'
      },
      about: {
        title: 'About Me'
      },
      portfolio: {
        title: 'Portfolio',
        text: 'Checkout my work below'
      },
      contact: {
        title: 'Contact'
      },
      login: {
        title: 'Login'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home"> Escalin E</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto " >
                <Link className="nav-Link" to="/"> Home </Link>
                <Link className="nav-Link" to="/about"> About </Link>
                <Link className="nav-Link" to="/portfolio"> Portfolio </Link>
                <Link className="nav-Link" to="/contact"> Contact </Link>
                <Link className="nav-Link" to="/login"> Login </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} text={this.state.portfolio.text} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/login" render={() => <LoginPage title={this.state.login.title} />} />
          <Footer />

        </Container>
      </Router>
    );
  }
}
export default App;
