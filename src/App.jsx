import React from "react";
import Form from "./components/form";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-blue-600 h-screen flex justify-center items-center">
        <Form></Form>
      </div>
    </div>
  );
};

export default App;
