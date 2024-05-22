import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    studentName: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    grade: Yup.string().required("Required"),
    parentName: Yup.string().required("Required"),
    parentContact: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    parentEmail: Yup.string()
      .email("Invalid email address")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setIsSubmitted(true);
    resetForm();
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 w-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-[80%] ">
        <div className="text-[30px] md:text-[35px] text-teal-500 border-b-2 border-b-teal-500 mb-4 font-medium">
          Registration Form
        </div>
        <Formik
          initialValues={{
            studentName: "",
            dateOfBirth: "",
            grade: "",
            parentName: "",
            parentContact: "",
            address: "",
            gender: "",
            parentEmail: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="studentName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Student's Full Name
                </label>
                <Field
                  id="studentName"
                  name="studentName"
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="studentName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Date of Birth
                </label>
                <Field
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Gender
                </label>
                <Field
                  id="gender"
                  name="gender"
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="grade"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Grade
                </label>
                <Field
                  id="grade"
                  name="grade"
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="grade"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="parentName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Parent/Guardian's Full Name
                </label>
                <Field
                  id="parentName"
                  name="parentName"
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="parentName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="parentContact"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Parent/Guardian's Contact Number
                </label>
                <Field
                  id="parentContact"
                  name="parentContact"
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="parentContact"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="parentEmail"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Parent/Guardian's Email
                </label>
                <Field
                  id="parentEmail"
                  name="parentEmail"
                  type="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="parentEmail"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address
                </label>
                <Field
                  id="address"
                  name="address"
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Registration Successful</h2>
            <p className="mb-4">
              Thank you for registering. You will receive an email with further
              details.
            </p>
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
