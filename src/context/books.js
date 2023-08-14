import { createContext, useState } from "react";

const BooksContext = createElement();

function Provider({ children }) {
  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
