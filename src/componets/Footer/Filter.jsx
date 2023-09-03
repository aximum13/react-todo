import classNames from "classnames";
import React, { useState } from "react";

export const Filter = ({ todoFilter, state }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    todoFilter(filter);
     
  };

  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => handleFilter("all")}
          className={classNames(
            "all-todo",
            selectedFilter === "all" ? "selected" : ""
          )}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => handleFilter(false)}
          className={classNames(
            "active-todo",
            selectedFilter === false ? "selected" : ""
          )}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => handleFilter(true)}
          className={classNames(
            "complete-todo",
            selectedFilter === true ? "selected" : ""
          )}
        >
          Complete
        </button>
      </li>
    </ul>
  );
};
