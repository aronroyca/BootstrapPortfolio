import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => <p>this is my not my message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));
