import { useQuery } from "@tanstack/react-query";
import React from "react";

const Allusers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  console.log(users);
  return (
    <div>
      <h1 className='text-3xl text-primary'>All Users</h1>
    </div>
  );
};

export default Allusers;
