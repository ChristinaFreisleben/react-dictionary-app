import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for "${searchterm}"...`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchterm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
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
