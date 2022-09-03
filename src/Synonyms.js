import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms > 0) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Synonyms">
        Unfortunately we could not find any synonyms for this word
      </div>
    );
  }
}
