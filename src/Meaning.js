import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaningBlock" key={index}>
            <span className="definition">
              <strong>Definition: </strong>
              {definition.definition}
            </span>
            <br />
            <span className="example">{definition.example}</span>
          </div>
        );
      })}
    </div>
  );
}
