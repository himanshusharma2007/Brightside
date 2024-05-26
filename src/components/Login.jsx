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
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="h-[90vh] flex flex-col justify-center items-center md:bg-gray-100 relative">
      {showModal && (
        <div className="absolute device-screen bg-gray-100 w-full h-full  flex items-center justify-center z-10">
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
      <div className="bg-white rounded-lg md:shadow-lg p-8 w-full max-w-md">
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
          <div className="mb-4 relative ">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            />
            <button
              type="button"
              className="absolute  right-0 top-10 px-3 flex items-center text-gray-600 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              )}
            </button>
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
