import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: `Welcome Back ${result.user.displayName}`,
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate('/')
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="py-32 flex justify-center">
      <div className="bg-primary rounded-lg p-8 text-white w-[90%] md:w-[30%]">
        <p className="text-center text-2xl font-bold">Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="input-groups">
            <label htmlFor="username">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="username"
              placeholder=""
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="input-groups">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                {...register("password", { required: true })}
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
              />
              {errors.password && <span>This field is required</span>}
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button className="login"> Login</button>
          </div>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>
        <GoogleSignIn />
        <p className="text-center text-xs text-red-600">
          Do not have an account?
          <Link
            rel="noopener noreferrer"
            to={"/register"}
            className="hover:underline pl-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
