import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className='py-12 flex items-center justify-center'>
        <div className='w-96 p-8 shadow rounded'>
          <h2 className='text-2xl text-center'>Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className='form-control w-full'>
              <label className='label'>Email</label>
              <input
                type='email'
                className='input input-bordered w-full max-w-xs'
                {...register("email", {
                  required: "Email address is required",
                })}
              />
              {errors.email && (
                <label className='label text-red-600'>
                  {errors.email.message}
                </label>
              )}
            </div>
            <div className='form-control w-full'>
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                name='password'
                className='input input-bordered w-full max-w-xs'
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters long",
                  },
                })}
              />
              {errors.password && (
                <label className='label text-red-600'>
                  {errors.password.message}
                </label>
              )}
              {loginError && (
                <label className='label text-red-600'>{loginError}</label>
              )}

              <label className='label'>
                <Link className='text-accent'>forgot password ?</Link>
              </label>
            </div>
            <div className='form-control w-full py-4'>
              <input
                className='btn btn-accent w-full'
                type='submit'
                value='Login'
              />
            </div>
          </form>

          <p>
            New to Doctors Portal ?
            <Link to='/signup' className='text-primary'>
              {" "}
              Create a new account
            </Link>
          </p>
          <div className='divider'>Or</div>
          <button className='btn btn-outline w-full'>
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
