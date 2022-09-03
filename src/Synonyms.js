import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms > 0);
  if (props.synonyms) {
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
    return "Unfortunately we could not find any synonyms for this word";
  }
}
