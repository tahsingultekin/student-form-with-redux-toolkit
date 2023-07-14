import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addStudents } from "../redux/slices/studentsSlice";

const AddModal = ({ setAddControl }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [companyName, setCompanyName] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      domain,
      company: {
        name: companyName,
      },
    };

    dispatch(addStudents(newUser));
    setAddControl(false);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="relative">
          <button className="absolute -right-5 -top-5 text-red-500">
            <AiFillCloseCircle size={20} onClick={() => setAddControl(false)} />
          </button>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="buttonGroup flex justify-center items-center mt-5">
            <button
              type="button"
              className="mx-auto block w-24 py-2 rounded-md text-[#fff] tracking-wider bg-[#FEAF00]"
              onClick={handleAdd}
            >
              Create
            </button>
            <button
              type="button"
              className="mx-auto block w-24 py-2 rounded-md text-[#fff] tracking-wider bg-[#FEAF00]"
              onClick={() => setAddControl(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
