import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({ name: "", city: "", age: 50 });
  console.log(user);

  /**
   *
   * Solution:
   * use "Spred Syntax" to copy previous state
   *
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  return (
    <form className="flex justify-center items-center h-screen bg-blue-500">
      <input type="text" onChange={handleChange} placeholder="your name" />
    </form>
  );
};

export default User;
