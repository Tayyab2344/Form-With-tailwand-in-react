import React from "react";

const Form = () => {
  return (
    <div className="border-2 border-emerald-700 my-8 px-4 bg-white max-w-md mx-auto">
      <form action="" className="p-2.5 flex flex-col items-center">
        <h1 className="font-bold text-center text-3xl mt-4">Sign up</h1>
        <input
          className="p-2.5 w-full sm:w-80 border border-gray-400 rounded-lg mt-4"
          type="text"
          placeholder="Enter Your First Name"
        />
        <input
          className="p-2.5 w-full sm:w-80 border border-gray-400 rounded-lg mt-4"
          type="text"
          placeholder="Enter Your Last Name"
        />
        <input
          className="p-2.5 w-full sm:w-80 border border-gray-400 rounded-lg mt-4"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          className="p-2.5 w-full sm:w-80 border border-gray-400 rounded-lg mt-4"
          type="password"
          placeholder="Enter Your Password"
        />
        <button
          className="p-2.5 w-full sm:w-80 bg-blue-700 text-white mt-8"
          type="submit"
        >
          Sign up
        </button>
        <div className="flex items-center mt-4">
          <span>Already have an account?</span>
          <a className="inline ml-1 text-blue-700" href="">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
