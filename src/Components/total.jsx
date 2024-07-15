import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignIn from '../components/SignIn'; 
import './Login.css'; // Adjust path to your CSS file


function Home() {
  return (
    <div className="homepage-container">
      <div className="centered-form">
        <div className="login-form rounded shadow-lg p-5">
          <h1 className="text-center text-primary mb-4">Welcome to Freelance Fusion!</h1>
          <Button
            as={Link}
            to="/signup"
            variant="primary"
            className="d-block mx-auto mb-3"
          >
            Create Account
          </Button>
          <div className="text-center">
            <p>Sign In</p>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;