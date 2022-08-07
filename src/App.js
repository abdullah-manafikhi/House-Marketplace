import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Explore from './components/pages/Explore';
import Offers from './components/pages/Offers';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import ForgotPassword from './components/pages/ForgotPassword';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </> 
  );
}

export default App;
