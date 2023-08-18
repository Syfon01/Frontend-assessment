import React, { useState } from "react";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Registration data:", formData);
  };

  return (
    <>
      <div className="flex min-h-[85vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[32rem]">
          <div className="bg-white p-8 rounded-lg md:p-10">
          <p className="text-2xl text-primary font-medium mb-1">
                  Welcome to Xpress Rewards
                  </p>
                  <p className="text-xs text-[#606060] mb-4">
                  Complete the form below to get started
                  </p>
                  <hr />

            <form>
              {step === 1 && (
                <div>
                 
                  <div className="mb-4">
                    <label className="block mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Step 2: Account Information
                  </h2>
                  <div className="mb-4">
                    <label className="block mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// https://reddband.atlassian.net/browse/UBAQ-866

// https://reddband.atlassian.net/browse/UBAQ-865

export default RegisterForm;
