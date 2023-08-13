import { createContext, useState } from "react";

const BooksContext = createElement();

function Provider({ children }) {
  const [count, children] = useState(5);

  const valueToShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
