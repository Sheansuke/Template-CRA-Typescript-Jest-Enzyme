import React from "react";

interface User {
  name?: String;
}

function App(props: User) {
  return (
    <>
      Test Template
      <div>{props.name}</div>
    </>
  );
}

export default App;
