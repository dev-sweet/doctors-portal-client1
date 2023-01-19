import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className='h-[700px] flex items-center justify-center'>
      <div className='w-96 p-8 shadow rounded'>
        <h2 className='text-2xl text-center'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control w-full'>
            <label className='label'>Email</label>
            <input
              type='email'
              className='input input-bordered w-full max-w-xs'
              {...register("email", { required: true })}
            />
          </div>
          <div className='form-control w-full'>
            <label className='label' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='input input-bordered w-full max-w-xs'
              {...register("password", { required: true })}
            />
            <label className='label'>
              <Link className='text-accent'>forgot password ?</Link>
            </label>
          </div>
          <div className='form-control w-full py-4'>
            <input
              className='btn btn-accent w-full'
              type='submit'
              value='Submit'
            />
          </div>
        </form>

        <p>
          New to Doctors Portal ?
          <Link to='/register' className='text-primary'>
            {" "}
            Create new account
          </Link>
        </p>
        <div className='divider'>Or</div>
        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
