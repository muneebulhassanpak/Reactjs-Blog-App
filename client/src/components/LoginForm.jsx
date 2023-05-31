import React from "react";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginActions } from "../store/store";
import { asyncLoginHandler } from "../store/store";
import validationSchema from "../validationSchema/LoginSchema";
const LoginForm = () => {
  const [cookie, setCookie] = useCookies(["userToken"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const { errors, handleBlur, touched, values, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        action.resetForm();
        dispatch(asyncLoginHandler(values.username, values.password));
      },
    });
  return (
    <div className="w-formWidth mx-auto py-3 px-2 rounded-md font-poppins bg-morange">
      <h2 className="text-2xl text-center text-white my-2">Login Form</h2>
      <form action="" className="w-full h-full" onSubmit={handleSubmit}>
        <div className="border-x border-y p-1 mb-2 rounded-sm border-slate-300 bg-white">
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <br />
          <input
            type="text"
            className="w-full h-full border-none outline-none"
            name="username"
            id="username"
            placeholder="Your username goes here.."
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="text-sm text-red-400">{errors.username}</p>
          ) : null}
        </div>
        <div className="border-x border-y p-1 mb-2 rounded-sm border-slate-300 bg-white">
          <label htmlFor="" className="password font-medium">
            Password
          </label>
          <br />
          <input
            type="password"
            className="w-full h-full border-none outline-none"
            name="password"
            id="password"
            placeholder="Your password goes here.."
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className=" text-sm text-red-400">{errors.password}</p>
          ) : null}
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Login"
            className="px-6 py-2 rounded-md border-2 text-morange border-white bg-white mb-2 hover:cursor-pointer hover:bg-mwhite"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
