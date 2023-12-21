// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter as Router, Routes,Route}  from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/sign-in" element={<SignIn/>}> </Route>
          <Route path="/sign-up" element={<SignUp/>}> </Route>
          <Route path="/offers" element={<Offers/>}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}> </Route>
          <Route path="/profile" element={<Profile/>}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
