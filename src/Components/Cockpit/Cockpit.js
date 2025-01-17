import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    const timer = setTimeout(() => {
      alert("saved to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] useEffect 2");
    return () => {
      console.log("[cockpit.js] cleanup work in useEffect 2");
    };
  });

  const assignedClasses = [];

  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle person
      </button>
    </div>
  );
};

export default React.memo(cockpit);
