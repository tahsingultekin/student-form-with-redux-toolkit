import React, { useState, useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import Loading from "../components/Loading";
import Student from "./Student";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudents,
  paginateStudents,
  searchStudents,
} from "../redux/slices/studentsSlice";
import AddModal from "../components/AddModal";
import ReactPaginate from "react-paginate";

const Students = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.student);
  const { studentStatus } = useSelector((state) => state.student);
  const [addControl, setAddControl] = useState(false);
  const [firstName, setFirstName] = useState("");

  // useEffect(() => {
  //   getStudents();
  // }, [dispatch]);

  const limit = 10;
  const [page, setPage] = useState(0);

  const currentPageUsers = users.slice(page * limit, (page + 1) * limit);
  const handlePageClick = (e) => {
    setPage(e.selected);
  };
  useEffect(() => {
    dispatch(paginateStudents(page));
  }, [page]);

  return (
    <PageLayout>
      <>
        {studentStatus === "LOADING" ? (
          <Loading />
        ) : (
          <div className="main-table w-full h-full mt-5 mb-10 bg-slate-50 tracking-wider relative">
            <div className="header flex justify-between  py-3 px-5 my-2 w-full">
              <h1 className="text-2xl font-semibold">Students List</h1>
              <div className="search-add flex gap-2">
                <div className="search flex items-center relative">
                  <input
                    className=" outline-none p-2 w-64 rounded-md border border-slate-200 font-light "
                    type="text"
                    placeholder="Search.."
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <button onClick={() => dispatch(searchStudents(firstName))}>
                    <CiSearch
                      size={20}
                      className="absolute top-3 right-4 text-slate-400 hover:text-slate-600"
                    />
                  </button>
                </div>
                <button
                  className="mx-2 bg-[#FEAF00] text-[#fff] px-4 rounded-md text-sm w-56 "
                  onClick={() => setAddControl(true)}
                >
                  ADD NEW STUDENT
                </button>
              </div>
            </div>
            <hr className="w-11/12 mx-auto my-2 " />
            {addControl ? (
              <AddModal setAddControl={setAddControl} addControl={addControl} />
            ) : null}
            <table className="body flex flex-col ">
              <thead className="body-header w-full  ">
                <tr className="text-xs text-slate-400 my-2 flex justify-between items-center">
                  <th className="w-1"></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company Name</th>
                  <th className="w-20"></th>
                </tr>
              </thead>

              <tbody className="w-full px-4 h-[500px] overflow-y-scroll">
                {currentPageUsers.map((user) => {
                  return (
                    <Student
                      user={user}
                      key={user.id}
                      setAddControl={setAddControl}
                      addControl={addControl}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={Math.ceil(users.length / limit)}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    </PageLayout>
  );
};

export default Students;
