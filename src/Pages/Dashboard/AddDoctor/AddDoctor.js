import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddDoctor = (data) => {
    console.log(data);
  };

  const { data: specialties } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/specialties");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: "Name is required!" })}
          />
          {errors.name && (
            <label className="label text-red-600">{errors.name.message}</label>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: "Email is required!",
            })}
          />
          {errors.email && (
            <label className="label text-red-600">{errors.email.message}</label>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="password">
            Specialty
          </label>

          <select
            {...register("specialty", {
              required: "Please select a specialty",
            })}
            className="select select-bordered w-full max-w-xs"
          >
            {specialties?.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <label className="label text-red-600">
              {errors.specialty.message}
            </label>
          )}
        </div>
        <div className="form-control w-full py-4">
          <input
            className="btn btn-accent w-full max-w-xs"
            type="submit"
            value="+ Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
