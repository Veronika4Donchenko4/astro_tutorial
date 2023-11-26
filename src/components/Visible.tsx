import { useState } from 'preact/hooks';

const Visible = () => {
  const [count, setCount] = useState(42);
  return (
    <div className="border p-6">
      <div className="text-lg">{count}</div>
      <button
        className="border p-4 bg-red-500"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Visible;
