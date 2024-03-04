import { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);
  
    return (
      <div class="bg-blue-900 text-white p-5">
        <div>Counter Section</div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button>Count = {count}</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  };
  