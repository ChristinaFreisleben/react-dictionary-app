import React from "react";
import "./Results.css";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h3>{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3>Meanings</h3>
              <Meaning meaning={meaning} />
            </section>
          );
        })}

        <section className="synonyms">
          <h3>Synonyms</h3>
          {props.results.meanings.map(function (meaning, index) {
            if (index > 0) {
              return (
                <div key={index}>
                  <Synonyms synonyms={meaning.synonyms} />
                </div>
              );
            } else {
              return (
                <span className="noSynonyms">
                  Unfortunately we could not find any synonyms for this word
                </span>
              );
            }
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
