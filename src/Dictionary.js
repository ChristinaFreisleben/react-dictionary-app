import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for "${searchterm}"...`);
  }

  function handleSearchtermChange(event) {
    setSearchterm(event.target.value);
  }

  return (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Enter a word ..."
        onChange={handleSearchtermChange}
      />
      <input type="submit" value="🪄" />
    </form>
  );
}
