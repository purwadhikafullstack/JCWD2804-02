'use client';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/login', {
        email: email,
        password: password,
      });

      Swal.fire({
        title: 'Success',
        text: 'Login Success!',
        icon: 'success',
      }).then(() => {
        window.location.href = '/home';
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-1 justify-center items-center py-5">
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1721103873~exp=1721107473~hmac=60fc637d34ea02bb6430031c4438d8525abd928356f958998a55bc43ed4b698a&w=740"
          alt="login"
          className="rounded-md h-auto w-1/2"
        />
      </div>
      <div className="max-w-md p-6 mr-48 bg-primary border border-gray-300 rounded-md shadow-md">
        <h2 className="text-3xl text-center text-white font-bold mb-6">
          Log In
        </h2>
        <form onSubmit={Login} method="POST">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-white font-medium"
            >
              Email
            </label>
            <input
              type="text"
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
            LOG IN
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
              Baru di Pasar Kita?{' '}
              <a href="/register" className="text-white hover:underline">
                Daftar
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
