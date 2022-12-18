import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import image from '../assets/images/BurfordLove.jpeg'
// import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const { email, password } = formState

    // allows user to see password
    const [showPassword, setShowPassword] = useState(false)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 pt-[60px] mx-auto md:h-screen lg:py-0 text-stone-800">
      <h1 className="flex items-center mb-6 text-3xl border-b-4 border-pcCoral">
        Account Login
      </h1>
      <div
        className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        {/* Left Side */}
        <div className="form-container">
          <div className="form-inner-container">
            <h1 className="md:text-2xl items-center justify-center">
              Login if you are Martha.
            </h1>
            <form className="space-y-4 md:space-y-6 " onSubmit={handleFormSubmit}>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium ">Your email</label>
                <input type="email" name="email" id="email" className="form-field  mb-4 focus: outline-pcGreen" onChange={handleChange} />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium ">Password</label>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" className="form-field  mb-4 focus: outline-pcGreen" 
                value={password}
                onChange={handleChange} />
                {/* <img src={visibilityIcon} alt="show password" className="showPassword" onclick={() => setShowPassword((prevState) => !prevState)}/> */}
              </div>
              <Link to='/forgot-password'
              className='forgotPasswordLink'>Forgot Password</Link>
              {error ? (
                <div>
                  <p className="error-text">The provided credentials are incorrect</p>
                </div>
              ) : null}
              <div className="flex items-center justify-evenly space-x-2">
                <button type="submit" className="form-button">Submit</button>
                <button type="submit" className="form-button"><Link to="/signup">Sign Up?</Link></button>
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

export default Login;
