import React, { useContext, useState } from "react";
import StateContext from '../context/context';
import {Link} from "react-router-dom";

const Login = () => {
  // const { logUser } = useContext(StateContext);
  const [input, setInput] = useState({ email: "", password: "",});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({ email: "", password: ""})
    // You can add your logic for user registration here using the addUser function.
  };

  const handleChange = (e) => {
  setInput((prevInput) => ({
    ...prevInput,
    [e.target.name]: e.target.value
  }));
};

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h2 className="py-3 text-xl text-secondary">Login to your Account</h2>
      <div className='shadow-2xl'>
      <form onSubmit={handleSubmit} className="flex flex-col min-h-[200px] px-8 min-md:px-16 items-center space-y-4 justify-center  py-3 rounded">
        
        <input type="email" name="email" placeholder="Email eg., johndoe@gmail.com" onChange={handleChange} value={input.email} className="inputtag"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={input.password} className="inputtag"/>
        <button type="submit" className="border border-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white">Login</button>
      
      <div>
        Don't have an account? <Link to="/signup" className='underline decoration-secondary'>Sign Up</Link>
      </div>
      </form>
      </div>
    </div>
  );
};

export default Login;