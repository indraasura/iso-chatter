import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [name, setName] = useState(""); // similar to : state = {name: ''} and setName is the function that sets the name
  const [room, setRoom] = useState("");
  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <h1 className="heading">Join Room</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="login-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className="login-input mt-20"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room }`}
        >
          <button className="btn mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
