import React from "react";

import SuccessClasses from "../../../Hooks/SuccesClasses";



const EnrollClass = () => {
 const [data] = SuccessClasses()

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Price & Site </th>
              <th>Name </th>
              <th>Method</th>
            </tr>
          </thead>

          {data?.map((selectedClass, index) => (
            <tbody key={selectedClass._id} className="text-center">
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="  h-28">
                    <img
                      className="w-full h-full rounded mx-auto"
                      src={selectedClass.photoUrl}
                      alt={selectedClass.className}
                    />
                  </div>
                </td>
                <td>
                  <p>
                    {" "}
                    <span>Price : </span> {selectedClass.price}
                  </p>
                </td>
                <td>
                  <p>
                    {" "}
                    <span>ClassName :</span> {selectedClass.className}{" "}
                  </p>
                  <p>
                    <span>InstructorName:</span> {selectedClass.name}{" "}
                  </p>
                </td>
                <th>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default EnrollClass;
