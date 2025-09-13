import React from "react";

const Link = ({ route }) => {
  return (
    <li className="bg-yellow-200 p-4">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
