import React from 'react';

const Profile = () => {
  return (
    <div className="flex justify-center items-center py-2">
      <div>
        <img
          src="/images/avatar.png"
          alt="register"
          className="rounded-full shadow-md border border-black h-auto w-[70%]"
        />
      </div>
      <div>
        <h1 className="text-4xl text-primary text-center font-bold my-6">
          User Profile
        </h1>
        <div>
          <div className="p-6 bg-primary border border-gray-300 rounded-md shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Profile Picture
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  className="mt-1 block w-64 text-sm p-2 border bg-white text-black border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="bg-third hover:bg-secondary text-white px-4 py-2 rounded-md"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
