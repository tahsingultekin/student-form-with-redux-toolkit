import React, { useEffect, useState } from "react";
import { SlTrash } from "react-icons/sl";
import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudents } from "../redux/slices/studentsSlice";
import UpdateModal from "../components/UpdateModal";

const Student = ({ user }) => {
  const { image, email, phone, domain, firstName, lastName, id } = user;
  const { name } = user.company;
  const [updateControl, setUpdateControl] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {updateControl ? (
        <UpdateModal user={user} setUpdateControl={setUpdateControl} />
      ) : (
        <tr className="flex justify-between items-center text-sm text-slate-600 my-2 bg-[#fff] rounded-md h-24 px-3 w-full">
          <td>
            <img className="w-12 h-12 rounded-md" src={image} />
          </td>
          <td className="tdInfo">{`${firstName} ${lastName}`}</td>
          <td className="tdInfo">{email}</td>
          <td className="tdInfo">{phone}</td>
          <td className="tdInfo">{domain}</td>
          <td className="tdInfo">{name}</td>
          <td className="w-16 flex justify-between items-center">
            <SlTrash
              size={20}
              className=" text-orange-300 cursor-pointer"
              onClick={() => dispatch(deleteStudents(id))}
            />
            <MdOutlineModeEdit
              size={20}
              className=" text-orange-300 cursor-pointer"
              onClick={() => setUpdateControl(true)}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default Student;
