import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle";
import ReactPaginate from "react-paginate";
import "tailwindcss/tailwind.css";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const instructorsPerPage = 8;

  useEffect(() => {
    fetch("https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const findInstructor = data.filter(
          (instructor) => instructor.role === "instructor"
        );
        setInstructors(findInstructor);
      });
  }, []);

  const pageCount = Math.ceil(instructors.length / instructorsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * instructorsPerPage;
  const currentInstructors = instructors.slice(
    offset,
    offset + instructorsPerPage
  );

  return (
    <div>
      <PageTitle
        title={"Meet Our Expert Yoga Instructors"}
        subTitle={
          "Dedicated Professionals Committed to Elevating Your Yoga Journey, Nurturing Your Practice, and Enriching Your Overall Well-being"
        }
      />
      <div className="grid grid-cols-2 gap-5 md:mx-10 py-20">
        {currentInstructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card lg:card-side bg-base-100 shadow-[#227179] p-5 shadow-md"
          >
            <figure>
              <img
                className="w-40 h-40 rounded-full"
                src={instructor.image}
                alt="Album"
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title uppercase text-[#227179]">
                {instructor.name}
              </h2>
              <h2 className="card-title font-light text-neutral-700">
                {instructor.email}
              </h2>
              <div className="card-actions justify-center mt-4 space-x-4">
                <button className="text-white bg-[#227179] hover:bg-[#227179]600 duration-300 py-1 px-4 rounded uppercase font-medium">
                  Classes
                </button>
                <button className="text-white bg-[#227179] hover:bg-[#227179]600 duration-300 py-1 px-4 rounded uppercase font-medium">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex items-center space-x-4"}
          previousLinkClassName={
            "bg-[#227179] hover:bg-[#227179]600 duration-300 text-white py-1 px-4 rounded font-medium"
          }
          nextLinkClassName={
            "bg-[#227179] hover:bg-[#227179]600 duration-300 text-white py-1 px-4 rounded font-medium"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={"bg-[#227179]600 text-white"}
        />
      </div>
    </div>
  );
};

export default Instructor;
