import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import validationSchema from "../validationSchema/index";
const RegistrationForm = () => {
  const initialValues = {
    fullname: "",
    username: "",
    password: "",
  };
  const { errors, handleBlur, touched, values, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        action.resetForm();
        try {
          const res = await axios.post("http://localhost:3001/auth/register", {
            fullname: values.fullname,
            username: values.username,
            password: values.password,
            loggedIn: false,
          });
          alert("Success");
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      },
    });
  return (
    <div className="w-formWidth mx-auto py-3 px-2 rounded-md font-poppins bg-morange">
      <h2 className="text-2xl text-center text-white my-2">Sign Up Form</h2>
      <form action="" className="w-full h-full" onSubmit={handleSubmit}>
        <div className="border-x border-y p-1 my-2 rounded-sm border-slate-300 bg-white">
          <label htmlFor="fullname">Full Name</label>
          <br />
          <input
            type="text"
            className="w-full h-full border-none outline-none"
            name="fullname"
            id="fullname"
            placeholder="Your name goes here.."
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullname && touched.fullname ? (
            <p className="text-sm text-red-400">{errors.fullname}</p>
          ) : null}
        </div>
        <div className="border-x border-y p-1 mb-2 rounded-sm border-slate-300 bg-white">
          <label htmlFor="username">Username</label>
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
          <label htmlFor="" className="password">
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
            value="Sign Up"
            className="px-6 py-2 rounded-md border-2 text-morange border-white bg-white mb-2 hover:cursor-pointer hover:bg-mwhite"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
