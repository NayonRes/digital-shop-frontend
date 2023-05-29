import React from "react";

const Test3 = () => {
  const check = (id) => {
    console.log("check");
    let data = "<p>this is my text</p>";
    let divTimeline = document.getElementById("newDiv");
    divTimeline.innerHTML = data;
  };
  return (
    <div>
      <button onClick={check}>check</button>
      Test3
      <div id="newDiv" class="newDiv"></div>
    </div>
  );
};

export default Test3;
