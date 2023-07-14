import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateStudents } from "../redux/slices/studentsSlice";

const UpdateModal = ({ user, setUpdateControl }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [domain, setDomain] = useState(user.domain);
  const [companyName, setCompanyName] = useState(user.company.name);
  const dispatch = useDispatch();

  const handleSubmit = async (id) => {
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      phone,
      domain,
      company: {
        ...user.company,
        name: companyName,
      },
    };

    try {
      dispatch(updateStudents(updatedUser));
      setUpdateControl(false);
    } catch (error) {
      console.error("Kullanıcı güncelleme hatası:", error);
    }
  };
  return (
    <div className="modal-container ">
      <div className="modal">
        <div className="relative">
          <button className="absolute -right-5 -top-5 text-red-500">
            <AiFillCloseCircle
              size={20}
              onClick={() => setUpdateControl(false)}
            />
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

          <button
            type="submit"
            className="mx-auto block w-36 py-2 rounded-md text-[#fff] tracking-wider bg-[#FEAF00]"
            onClick={() => handleSubmit(user.id)}
          >
            Update Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
