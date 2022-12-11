import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import image from '../assets/images/BurfordTogether.jpeg'

export default function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    // Card for signup
    <section className="flex flex-col items-center justify-center px-6 py-8 pt-[60px] mx-auto md:h-screen lg:py-0 text-stone-800">
      <h1 className="flex items-center mb-6 text-3xl border-b-4 border-pcCoral">
        Create Your Account
      </h1>
      <div
        className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        {/* Left Side */}
        {/* Card interior placement */}
        <div className="form-container">
          <div className="form-inner-container">
            <h1 className="items-center justify-center">
              Please provide an email and password
            </h1>
            {/* Form for input - contains submit button */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                <input type="email" name="email" id="email" className="form-field  mb-4 focus: outline-pcGreen" placeholder="name@email.com" onChange={handleChange} />
              </div>
              {/* password input */}
              <div>
                <label for="password" className="block mb-2 text-sm font-medium ">Password</label>
                <input type="password" name="password" placeholder="••••••••" className="form-field  mb-4 focus: outline-pcGreen" onChange={handleChange} />
              </div>
              <div className="flex items-center justify-evenly space-x-2">
                {/* submit button */}
                <button type="submit" className="form-button">Submit</button>
                <button type="submit" className="form-button"><Link to="/login">Login?</Link></button>
              </div>
            </form>
          </div>
        </div>
        {/* Right Side */}
        <img src={image} alt="" className="w-[430px] hidden md:block" />
      </div>
    </section>
  );
}