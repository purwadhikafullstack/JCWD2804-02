'use client';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Register = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/register', {
        email: email,
        password: password,
      });
      Swal.fire({
        title: 'Success',
        text: 'Account registered!',
        icon: 'success',
      }).then(() => {
        window.location.href = '/login';
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-32 justify-center items-center py-5">
      <div className="flex justify-center items-center">
        <img
          src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-4575543-3798675.png"
          alt="register"
          className="rounded-md h-auto w-[80%]"
        />
      </div>
      <div className="max-w-md p-6 mr-12 bg-primary border border-gray-300 rounded-md shadow-md">
        <h2 className="text-3xl text-center text-white font-bold mb-6">
          Daftar
        </h2>
        <form onSubmit={Register} action="/loginpage" method="POST">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-white font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-white font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-secondary hover:bg-third text-white rounded-md"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-between my-4">
            <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
            <span className="text-xs text-center text-white">ATAU</span>
            <span className="w-1/5 border-b border-gray-300 lg:w-1/4"></span>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="w-full px-3 flex py-2 ml-2 text-white bg-white rounded hover:bg-slate-200 focus:outline-none"
            >
              <FcGoogle className="text-2xl ml-12" />
              <span className="text-md font-medium ml-3 text-black">
                Google
              </span>
            </button>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-white text-center py-2">
              Punya akun?{' '}
              <a href="/login" className="text-white hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
