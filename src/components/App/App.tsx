import React, { useState } from "react";

interface Props {
  name?: string;
}

const App: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </>
  );
};

export default React.memo(App);
