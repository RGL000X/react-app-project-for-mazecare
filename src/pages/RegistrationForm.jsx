import React, { useState } from "react";
import axios from "axios";

const availableBloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

function RegistrationForm() {
  // State variables for the form inputs
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [birthdateError, setBirthdateError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [creditCardError, setCreditCardError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bloodTypeError, setBloodTypeError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // State variables for input validation
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [birthdateValid, setBirthdateValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [creditCardValid, setCreditCardValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [bloodTypeValid, setBloodTypeValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Function to handle form submissions
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form inputs
    if (firstName.trim() === "") {
      setFirstNameValid(false);
      setFirstNameError("First name is required");
    } else {
      setFirstNameValid(true);
      setFirstNameError("");
    }

    if (lastName.trim() === "") {
      setLastNameValid(false);
      setLastNameError("Last name is required");
    } else {
      setLastNameValid(true);
      setLastNameError("");
    }

    if (birthdate.trim() === "") {
      setBirthdateValid(false);
      setBirthdateError("Birthdate is required");
    } else {
      setBirthdateValid(true);
      setBirthdateError("");
    }

    if (mobile.trim() === "") {
      setMobileValid(false);
      setMobileError("Mobile number is required.");
    } else if (!/^\d+$/.test(mobile)) {
      setMobileValid(false);
      setMobileError("Mobile number should contain only numbers.");
    } else {
      setMobileValid(true);
      setMobileError("");
    }

    if (creditCard.trim() === "") {
      setCreditCardValid(false);
      setCreditCardError("Credit card number is required.");
    } else if (!/^\d{16}$/.test(creditCard)) {
      setCreditCardValid(false);
      setCreditCardError(
        "Credit card number should contain exactly 16 digits."
      );
    } else {
      setCreditCardValid(true);
      setCreditCardError("");
    }

    if (email.trim() === "") {
      setEmailValid(false);
      setEmailError("Email is required.");
    } else if (!email.includes("@")) {
      setEmailValid(false);
      setEmailError("Email should contain an '@' character.");
    } else {
      setEmailValid(true);
      setEmailError("");
    }

    if (address.trim() === "") {
      setAddressValid(false);
      setAddressError("Address is required");
    } else {
      setAddressValid(true);
      setAddressError("");
    }

    if (bloodType.trim() === "") {
      setBloodTypeValid(false);
      setBloodTypeError("Blood type is required.");
    } else if (!availableBloodTypes.includes(bloodType)) {
      setBloodTypeValid(false);
      setBloodTypeError(
        "Invalid blood type. Please choose from the available options."
      );
    } else {
      setBloodTypeValid(true);
      setBloodTypeError("");
    }

    if (password.trim() === "") {
      setPasswordValid(false);
      setPasswordError("Password is required.");
    } else if (password.length < 8) {
      setPasswordValid(false);
      setPasswordError("Password should be at least 8 characters long.");
    } else {
      setPasswordValid(true);
      setPasswordError("");
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordValid(false);
      setConfirmPasswordError("Confirm password is required.");
    } else if (password !== confirmPassword) {
      setConfirmPasswordValid(false);
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordValid(true);
      setConfirmPasswordError("");
    }

    if (
      firstNameValid &&
      lastNameValid &&
      birthdateValid &&
      mobileValid &&
      creditCardValid &&
      emailValid &&
      addressValid &&
      bloodTypeValid &&
      passwordValid &&
      confirmPasswordValid
    ) {
      //form is valid, you can submit it
      const formData = new FormData(event.target);

      axios
        .post("http://localhost:8000/api/patient", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-purple-700">
        <div className="w-full px-6 py-4 mt-6 pt-6 overflow-hidden bg-white shadow-md sm:max-w-xl sm:rounded-lg">
          <div>
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
              Sign Up
            </h1>
          </div>
          <br />
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="firstname"
                >
                  First Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !firstNameValid ? "is-invalid" : ""
                  }`}
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Please enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {!firstNameValid && (
                  <span className="error-message text-red-600">
                    {firstNameError}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="last-name"
                >
                  Last Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                  ${!lastNameValid ? "is-invalid" : ""}`}
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Please enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {!lastNameValid && (
                  <span className="error-message text-red-600">
                    {lastNameError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="date"
                >
                  Birthdate
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    !birthdateValid ? "is-invalid" : ""
                  }`}
                  id="birthdate"
                  name="birthdate"
                  type='date'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
                {!birthdateValid && (
                  <span className="error-message text-red-600">
                    {birthdateError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="mobile"
                >
                  Mobile Number
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !mobileValid ? "is-invalid" : ""
                  }`}
                  id="mobile"
                  name="mobile"
                  type="text"
                  placeholder="Please enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {!mobileValid && (
                  <span className="error-message text-red-600">
                    {mobileError}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="creditcard"
                >
                  Credit Card No.
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    !creditCardValid ? "is-invalid" : ""
                  }`}
                  id="creditcard"
                  name="creditcard"
                  type="text"
                  placeholder="Please enter credit card number"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                />
                {!creditCardValid && (
                  <span className="error-message text-red-600">
                    {creditCardError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="email"
                >
                  Email
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    !emailValid ? "is-invalid" : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!emailValid && (
                  <span className="error-message text-red-600">
                    {emailError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="address"
                >
                  Address
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    !addressValid ? "is-invalid" : ""
                  }`}
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Please enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {!addressValid && (
                  <span className="error-message text-red-600">
                    {addressError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="bloodtyp"
                >
                  Blood Type
                </label>
                <div className="relative">
                  <select
                    className={`block appearance-none w-full bg-gray-200 border border-purple-600 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      !bloodTypeValid ? "is-invalid" : ""
                    }`}
                    id="bloodtyp"
                    name="bloodtyp"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                  >
                    <option id="select">Select</option>
                    <option id="A+">A+</option>
                    <option id="A-">A-</option>
                    <option id="B+">B+</option>
                    <option id="B-">B-</option>
                    <option id="AB+">AB+</option>
                    <option id="AB-">AB-</option>
                    <option id="0+">O+</option>
                    <option id="0-">O-</option>
                  </select>
                  {!bloodTypeValid && (
                    <span className="error-message text-red-600">
                      {bloodTypeError}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlfor="password"
                >
                  Password
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !passwordValid ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Please enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!passwordValid && (
                  <span className="error-message text-red-600">
                    {passwordError}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    !confirmPasswordValid ? "is-invalid" : ""
                  }`}
                  id="confirmpassword"
                  type="password"
                  placeholder="Please re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!confirmPasswordValid && (
                  <span className="error-message text-red-600">
                    {confirmPasswordError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/login"
              >
                Already registered?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
