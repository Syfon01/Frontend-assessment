import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "./Layout/FileUpload";
import toast, { Toaster } from "react-hot-toast";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessCategory: "",
    accountNo: "",
    image: "",
    houseNumber: "",
    street: "",
    city: "",
    state: "United States",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save registration data to localStorage
    localStorage.setItem('registrationData', JSON.stringify(formData));

    navigate('/login');
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="flex min-h-[85vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-[32rem]">
          <div className="bg-white p-8 rounded-lg md:p-10">
            <p className="text-2xl text-primary font-medium mb-1">
              Welcome to Xpress Rewards
            </p>
            <p className="text-xs text-[#606060] mb-3">
              Complete the form below to get started
            </p>
            <hr />

            <form>
              {step === 1 && (
                <div>
                  <p className="font-medium text-primary text-sm mt-5">
                    Business Information
                  </p>
                  <div className="mt-4">
                    <label className="form-label">Business name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="form-label">Business Email Address</label>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="form-label">Business Phone Number</label>
                    <input
                      type="tel"
                      name="businessPhone"
                      value={formData.businessPhone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="form-label">Business Category</label>
                    <input
                      type="text"
                      name="businessCategory"
                      value={formData.businessCategory}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="form-label">Account No</label>
                    <input
                      type="text"
                      name="accountNo"
                      value={formData.accountNo}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="mt-8">
                    <label className="form-label">Image (Logo)</label>
                    <FileUpload />
                  </div>
                  <div className="flex items-center mt-10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-primary text-white px-12 md:px-20 py-4 rounded shadow justify-center items-center gap-2.5 inline-flex font-medium"
                    >
                      Next
                    </button>

                    <p className="text-[#808080] text-sm font-medium ml-5">
                      Step 1 of 2
                    </p>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <div>
                    <p className="font-medium text-primary text-sm mt-5">
                      Business Address
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-2">
                        <label htmlFor="houseNumber" className="form-label">
                          House Number
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="street" className="form-label">
                          Street
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <div className="mt-2">
                          <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="form-select"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="font-medium text-primary text-sm mt-5">
                      Contact Person Information
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label className="form-label">Contact Name</label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="contactPhone"
                          className="form-label"
                        >
                          Contact Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="contactPhone"
                            id="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="contactEmail"
                          className="form-label"
                        >
                          Contact Email Address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="contactEmail"
                            id="contactEmail"
                            value={formData.contactEmail}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="font-medium text-primary text-sm mt-5">
                      Password
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="confirmPassword"
                          className="form-label"
                        >
                          Confirm Password
                        </label>
                        <div className="mt-2">
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-10">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-primary text-white px-12 md:px-[72px] py-4 rounded shadow justify-center items-center gap-2.5 inline-flex font-medium"
                    >
                      Submit
                    </button>

                    <p className="text-[#808080] text-sm font-medium ml-5">
                      Step 2 of 2
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
