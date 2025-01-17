import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spiner from "@/components/Spiner";
import LoginIcon from "../../../public/img/login-app.png";
import loginFetch from "@/lib/fetch/loginFetch";
import { useNavigate } from "react-router-dom";
import Alert from "@/components/Alert";
function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState("");
  const [defaultPasswordIcon, setDefaultPasswordIcon] = useState(
    <FaEyeSlash />
  );
  const [passwordShow, setPasswordShow] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
    if (passwordShow) {
      setDefaultPasswordIcon(<FaEyeSlash />);
    } else {
      setDefaultPasswordIcon(<FaEye />);
    }
  };
  const successCallback = (res) => {
    localStorage.setItem("_token", res.token);
    navigate("/");
  };
  const errorCallback = (res) => {
    setShowAlert(res.message);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    await loginFetch(formData, successCallback, errorCallback);
    setTimeout(() => setShowSpinner(false), 1000);
  };
  return (
    <main className="md:w-[567px] mx-auto w-full p-4 min-h-screen flex justify-center items-center">
      <form className="w-full" onSubmit={handleLogin}>
        <div className="my-4">
          <img src={LoginIcon} className="w-[100px] h-[100px] mx-auto block " />
        </div>
        <div className="my-4">
          <p className="md:text-3xl font-bold">WELCOME BACK !</p>
        </div>
        {showAlert ? (
          <Alert>
            <span>{showAlert}</span>
          </Alert>
        ) : (
          <></>
        )}

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@gmail.com"
            required
            autoFocus={true}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 ">
              <button type="button" onClick={togglePassword}>
                {defaultPasswordIcon}
              </button>
            </div>

            <input
              type={passwordShow ? "text" : "password"}
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
              required
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </div>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="flex space-x-2 justify-center items-center w-full block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {showSpinner ? <Spiner /> : <></>}
            <span>LOGIN</span>
          </button>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
