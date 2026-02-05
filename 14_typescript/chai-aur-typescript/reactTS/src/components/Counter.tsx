import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      Order: {count}
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Click</button>
      </div>
    </div>
  );
}
