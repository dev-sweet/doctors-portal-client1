import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  console.log("bookings", bookings);
  return (
    <div>
      <h3>My Appointments</h3>
      <div className='overflow-x-auto mt-5'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* {bookings?.map((book, i) => (
              <tr key={book._id} className='hover'>
                <th>{i + 1}</th>
                <td>{book.patientName}</td>
                <td>{book.treatment}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
