import React from "react";
import { useState, useEffect, useRef } from "react";

function UseRefEx2() {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef('')

  //useEffect to rerender current value of 'renders' with no depencency
  //useEffect to rerender current value of prevName with dependency initial name,
  //store prevName value and add + 1 letter after render

  
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name
  }, [name]);

  return (
    <div className="container mt-5">
      <h1>renders: {renders.current}</h1>
      <h2>previous name state: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        //update name every keydown value
        onChange={(event) => setName(event.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefEx2;
