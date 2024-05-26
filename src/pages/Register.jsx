import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../config/firebase/firebase"; // Import the db object
import { collection, addDoc } from "firebase/firestore"; // Import necessary functions
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../components/Login";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const auth = getAuth();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  if (isLoading) {
    return (
      <div className="h-[90vh] flex items-center justify-center" role="status ">
        <svg
          aria-hidden="true"
          className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-teal-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

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

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      setSubmitting(true); // Set the submitting state to true

      // Create a reference to the 'students' collection
      const studentsRef = collection(db, "students");

      // Add the form data to the 'students' collection
      await addDoc(studentsRef, {
        name: values.studentName,
        dob: values.dateOfBirth,
        grade: parseInt(values.grade), // Convert grade to a number
        parent_name: values.parentName,
        parent_contact: values.parentContact,
        address: values.address,
        gender: values.gender,
        parent_email: values.parentEmail,
      });

      console.log("Data submitted successfully!");
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error("Error submitting data: ", error);
    } finally {
      setSubmitting(false); // Reset the submitting state
    }
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
                  {isSubmitting ? "Registering..." : "Register"}
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
