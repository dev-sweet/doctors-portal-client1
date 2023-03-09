import { useQuery } from "@tanstack/react-query";
import React from "react";

const MangaDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();

        return data;
      } catch (err) {}
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <h2 className=" text-3xl">Manage Doctors {doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.img} alt="" />
                    </div>
                  </div>
                </th>
                <th>{doctor.name}</th>
                <th>{doctor.email}</th>
                <th>{doctor.specialty}</th>
                <th>
                  <button className="btn btn-sm btn-error">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangaDoctors;
