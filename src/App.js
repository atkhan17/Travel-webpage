import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={ <Home /> }></Route>
        <Route path='/about' exact element={ <About /> }></Route>
        <Route path='/services' exact element={ <Services /> }></Route>
        <Route path='/sign-up' exact element={ <SignUp /> }></Route>
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
