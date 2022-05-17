import React from "react";

const Counter = ({initial}) => {
  const [count, setCount] = React.useState(initial);

  // const handleIncrement = () => {
  //     setCount(count + 1);
  //     // console.log(count);
  // };

  // const handleDecrement = () => {
  //     // setCount(count - 1);
  //     // console.log(count);
  //     if(count>0){
  //         setCount(count - 1)
  //     }
  // };

  return (
    <div>
      <h1>Counter App: <span style={{color: count%2===0 ? "green":"red"}}>{count}</span></h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(count*2)}>Double</button>
    </div>
  );
};

export default Counter;
