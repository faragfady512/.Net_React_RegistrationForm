import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BueRegistration from '../Assets/BueRegistration.jpg';
import axios from 'axios';
import AddUserForm from "../Components/AddUserForm";





// RegistrationPage component for user registration
function RegistrationPage() {

    return (

    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registration Form
                                      </p>
                        {/* this is a form component to add user */}
                                      <AddUserForm />

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={BueRegistration}
                      className="img-fluid"
                      alt="BueLogo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
