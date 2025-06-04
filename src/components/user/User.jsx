import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-white text-black  text-3xl pb-10 pt-10 ">
      User :{userid}{" "}
    </div>
  );
}

export default User;
