import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import StateContext from "../context/context";
import Toast from './Toast';

const Signup = () => {
  const [isToast, showToast] = useState(true);
  // const { addUser } = useContext(StateContext);
  if(isToast) { 
  setTimeout(()=> {
    showToast(false);
  }, 4000)
  
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleClick = () => {
    showToast(true);
          switch (true) {
              case errors.username && errors.username.type === "required" && isToast:
                return <Toast message="Username is required" />;
              case errors.email && errors.email.type === "required" && isToast:
                return <Toast message="Email is required" />;
              case errors.password && errors.password.type === "required" && isToast:
                return <Toast message="Password is required" />;
              case errors.password && errors.password.type === "checkLength" && isToast:
                return <Toast message="Password should be at least 8 characters." />;
              case errors.password && errors.password.type === "matchPattern" && isToast:
                return (
                  <Toast
                    message="Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol."
                  />
                );
              default:
                return null; 
          }


  }
  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword){
      console.log("not working")
     showToast(true)
    }
    else{
        console.log(data);
        reset();
    }
  };
 

  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center">
      
      <h2 className="py-3 text-xl text-secondary">Create a new Account</h2>
      <div className="shadow-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col min-h-[400px] px-8 md:px-16 items-center space-y-4 justify-center  py-3 rounded"
        >
          <input
            type="text"
            name="username"
            placeholder="e.g., johnwick"
            className="inputtag"
            {...register("username", {
              required: true,
            })}
          />
          {errors.username && errors.username.type === "required" && isToast && <Toast message="Username is required"/>}

          
          <input
            type="email"
            name="email"
            placeholder="e.g., john@gmail.com"
            className="inputtag"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && isToast && <Toast message="Email is required"/>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputtag"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 8,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value,
                  ),
              },
            })}
          />
          {errors.password && errors.password.type === "required" && isToast && <Toast message="password is required"/>}
          {errors.password && errors.password.type === "checkLength" && isToast && <Toast message="Password should be at-least 8 characters."/>}
          {errors.password && errors.password.type === "matchPattern" && isToast && <Toast message="Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol."/>}
        

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            className="inputtag"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          <div className="flex flex-col items-center justify-center gap-1 py-2 px-3 border border-gray rounded ">
            <label className="text-nowrap text-lg text-secondary">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="inputtag"
              {...register("dob", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-secondary">Gender</p>
            <div className="space-x-2">
              <label htmlFor="Male">Male</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                id="Male"
                className="accent-secondary "
                {...register("gender", {
                  required: true,
                })}
              />
              <label htmlFor="Female">Female</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                id="Female"
                className="accent-secondary"
                {...register("gender", {
                  required: true,
                })}
              />
              <label htmlFor="Other">Other</label>
              <input
                type="radio"
                name="gender"
                value="Other"
                id="Other"
                className="accent-secondary"
                {...register("gender", {
                  required: true,
                })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="border border-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white"
          onClick={handleClick}>
            Sign Up
          </button>
          <div>
            Already have an account?
            <Link className="underline decoration-secondary" to="/login">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
