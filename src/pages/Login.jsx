import React from 'react';
 import {auth, provider} from "../config/firebase-config";
 import {signInWithPopup} from 'firebase/auth';
 import { GoogleButton } from 'react-google-button';
 import { BsGoogle } from 'react-icons/bs';
 import { useNavigate } from 'react-router-dom';
 import { UserAuth } from '../config/contexts/AuthContext';

function Login() {
  let navigate = useNavigate();

  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image" />
          </div>
          
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 border-l-lg border-slate-800">
            <div>
              <span className="font-bold text-2xl mb-5">Login: </span>
              <div className="relative mt-4 mb-6" data-te-input-wrapper-init>
              <GoogleButton onClick={handleGoogleSignIn} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login
