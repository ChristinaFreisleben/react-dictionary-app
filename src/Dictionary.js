import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchterm}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000016bcea3a1601f4b3d803ea1fc0499c374";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchterm}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handelPexelsResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handelPexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearchtermChange(event) {
    setSearchterm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="input"
          type="search"
          placeholder="Enter a word ..."
          onChange={handleSearchtermChange}
        />
        <input className="searchButton" type="submit" value="🪄" />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
