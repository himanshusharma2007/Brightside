import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Google } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    console.log(showModal);
  }, []);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/register");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
      });
      navigate("/register");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-[100dvh] md:h-[88vh] flex flex-col justify-center items-center bg-gray-100 relative">
      {showModal && (
        <div className="absolute device-screen bg-gray-100 w-full h-full  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Welcome to Brightside
            </h2>
            <p className="mb-4 text-center">
              For registration, you have to log in first.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-3xl text-teal-500 border-b-2 border-b-teal-500 mb-6 font-medium">
          Login
        </div>
        <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex flex-col items-center justify-between w-full space-y-3 mt-4">
            <button
              type="submit"
              className="bg-teal-500 w-full hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            >
              Login
            </button>
            <div className="flex items-center">
              <div className="border-t border-gray-300 flex-grow mr-3"></div>
              <div className="text-gray-600">OR</div>
              <div className="border-t border-gray-300 flex-grow ml-3"></div>
            </div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-red-500 w-full hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 flex items-center justify-center"
            >
              <Google className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
