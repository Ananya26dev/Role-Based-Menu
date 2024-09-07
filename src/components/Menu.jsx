import React, { useState } from "react";

const Menu = () => {
  const [user, setUser] = useState("Admin");
  const handleSwitchUser = () => {
    user === "Admin" ? setUser("Staff") : setUser("Admin");
  };
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Enquiry",
      role: "Admin",
    },
    {
      id: 2,
      name: "User List",
      role: "Admin",
    },
    {
      id: 3,
      name: "Category List",
      role: "All",
    },
    {
      id: 4,
      name: "Product List",
      role: "All",
    },
    {
      id: 5,
      name: "Order List",
      role: "All",
    },
    {
      id: 6,
      name: "Sell Report",
      role: "Admin",
    },
  ]);
  return (
    <div>
      <h1>Role Based Menu</h1>
      <h3>Current Logged In User: {user}</h3>
      <button onClick={handleSwitchUser}>Switch User</button>
      <ul>
        {menu
          .filter((menu) => menu.role == "All" || menu.role == user)
          .map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Menu;
