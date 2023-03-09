import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "./ConfirmationModal";

const MangaDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
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

  const handleModalClose = () => {
    setDeletingDoctor(null);
  };

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor._id);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully!`);
          setDeletingDoctor(null);
        }
      });
  };

  // here is conditional rendering if isLoading is true the render the progress
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
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {deletingDoctor && (
          <ConfirmationModal
            doctor={deletingDoctor}
            handleModalClose={handleModalClose}
            handleDeleteDoctor={handleDeleteDoctor}
          />
        )}
      </div>
    </div>
  );
};

export default MangaDoctors;
