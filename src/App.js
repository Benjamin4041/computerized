
import './App.css';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Loginpage from './pages/loginPage';
import Signup from './pages/signup';
import Home from './pages/home';
import Register from './pages/register';
import Forgotpass from './pages/forgotpass';
import Students from './pages/students';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<Forgotpass/>}/>
          <Route path='/allstudents' element={<Students/>}/>
          <Route path='*' element={<Loginpage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
