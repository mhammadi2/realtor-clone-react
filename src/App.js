// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import CreateListings from "./pages/CreateListings";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute/>}>
            {/* if sign in works then go to profile page otherwise navigate to sing in page. */}
            <Route path="/profile" element={<Profile />}/>
          </Route>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListings />}/>
          <Route path="/" element={<Offers />}/>
          
        </Routes>
      </Router>
      {/*  Adding toastify container to include for all pages for notification as follows*/}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
