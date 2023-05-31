import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addRecipie } from "../store/store";
import validationSchema from "../validationSchema/NewRecipie";
const NewRecipie = () => {
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    imgUrl: "",
    duration: "",
    description: "",
  };
  const { values, touched, handleChange, handleBlur, handleSubmit, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        const { title, imgUrl, duration, description } = values;
        const id = localStorage.getItem("userID");
        dispatch(addRecipie(id, title, imgUrl, duration, description));
        action.resetForm();
      },
    });
  return (
    <div className="w-formWidth mx-auto py-3 px-2 border-2 font-poppins rounded-md bg-myellow">
      <h2 className="text-center text-2xl font-medium text-regal-blue">
        Add Your New Awesome Recipie
      </h2>
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="title" className="text-white">
            Title
          </label>
          <br />
          <input
            type="text"
            className="w-full h-10 rounded-sm px-2"
            name="title"
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && errors.title ? (
            <p className="text-regal-blue text-sm">{errors.title}</p>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="imgUrl" className="text-white">
            ImageUrl
          </label>
          <br />
          <input
            type="text"
            className="w-full h-10 rounded-sm px-2"
            name="imgUrl"
            id="imgUrl"
            value={values.imgUrl}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.imgUrl && errors.imgUrl ? (
            <p className="text-regal-blue text-sm">{errors.imgUrl}</p>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="duration" className="text-white">
            Time to Cook
          </label>
          <br />
          <input
            type="number"
            className="w-full h-10 rounded-sm px-2"
            name="duration"
            id="duration"
            value={values.duration}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.duration && errors.duration ? (
            <p className="text-regal-blue text-sm">{errors.duration}</p>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="text-white">
            Description
          </label>
          <br />
          <input
            type="text"
            className="w-full h-10 px-2 rounded-sm"
            name="description"
            id="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.description && errors.description ? (
            <p className="text-regal-blue text-sm">{errors.description}</p>
          ) : null}
        </div>
        <div className="text-center">
          <input
            type="submit"
            className="w-full h-10 rounded-sm bg-regal-blue text-white hover:cursor-pointer hover:bg-orange-400"
            value="Add Recipie"
          />
        </div>
      </form>
    </div>
  );
};

export default NewRecipie;
