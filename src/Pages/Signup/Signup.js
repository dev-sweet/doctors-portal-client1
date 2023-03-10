import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [token] = useToken(registeredEmail);
  if (token) {
    navigate("/");
  }
  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then(() => {
            const user = { name: data.name, email: data.email };
            saveUser(user);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (user) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          setRegisteredEmail(user.email);
          toast.success("Signup Success!");
        }
      });
  };

  return (
    <>
      <div className='py-12 flex items-center justify-center'>
        <div className='w-96 p-8 shadow rounded'>
          <h2 className='text-2xl text-center'>Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className='form-control w-full'>
              <label className='label'>Name</label>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs'
                {...register("name", { required: "Name is required!" })}
              />
              {errors.name && (
                <label className='label text-red-600'>
                  {errors.name.message}
                </label>
              )}
            </div>
            <div className='form-control w-full'>
              <label className='label'>Email</label>
              <input
                type='email'
                className='input input-bordered w-full max-w-xs'
                {...register("email", {
                  required: "Email is required!",
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
                  required: "Password is required!",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    message:
                      "Password must have uppercase,lowercase,number and special charecter",
                  },
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
            </div>
            <div className='form-control w-full py-4'>
              <input
                className='btn btn-accent w-full'
                type='submit'
                value='Sign Up'
              />
            </div>
          </form>

          <p>
            Already have an account ?
            <Link to='/login' className='text-primary'>
              {" "}
              Login
            </Link>
          </p>
          <div className='divider'>Or</div>
          <button className='btn btn-outline w-full'>
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
