
import './App.css';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Loginpage from './pages/loginPage';
import Signup from './pages/signup';
import Home from './pages/home';
import Register from './pages/register';
import Forgotpass from './pages/forgotpass';
import Students from './pages/students';
import PageNotFound from './pages/pagenotfound';
import { PageProvider } from './context/context';
import Resetpassword from './pages/resetpassword';


function App() {
  return (
    <PageProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/registerstudent' element={<Register/>}/>
          <Route path='/forgotpassword' element={<Forgotpass/>}/>
          <Route path='/allstudents' element={<Students/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/reset-password/:id/:token' element={<Resetpassword/>} />
        </Routes>
      </Router>
    </PageProvider>

  );
}

export default App;
