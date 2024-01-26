import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({ name: "", city: "", age: 50 });
  console.log(user);

  /**
   * Problem
   * Following setUser function cannot update city and age.
   * 
   * Cause
   * setUser (or useState) is not copy original state.
   * 
   * * Solution -> after.tsx
   * 
   */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setUser({
    //   name: e.target.value,
    // });
  };

  return (
    <form className="flex justify-center items-center h-screen bg-blue-500">
      <input type="text" onChange={handleChange} placeholder="your name" />
    </form>
  );
};

export default User;
