import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar';
import Home from './Pages/home';

import RegistrationPage from './Pages/RegistrationPage';
import EditPage from './Pages/EditPage';
import UserPage from './Pages/UsersPage';
import Footer from './Components/footer';




function App() {
  return (
      <div className="App">

         
          { /* Using BrowserRouter to enable routing */}
          <BrowserRouter>

              { /* Navbar component for navigation */}
              <Navbar />

              { /* Define routes for different pages */}
              <Routes>
                  <Route path="/" element={<Home/>}> </Route>
                  <Route path="/RegistrationPage" element={<RegistrationPage/>}> </Route>
                  <Route path="/UserPage" element={<UserPage/>}> </Route>
                  <Route path="/EditPage/:id" element={<EditPage />} />
              </Routes>
              { /* Footer component */}
              <Footer/>
              


          </BrowserRouter>
          
    </div>
  );
}

export default App;
