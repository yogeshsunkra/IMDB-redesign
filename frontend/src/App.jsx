import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import QueryProvider from "./provider/QueryProvider.jsx";


const App = () => {

  return (
    <QueryProvider>
      <div className="w-full ">
        <Header/>
        <Content />
      </div>
    </QueryProvider>
  )
}

export default App;
