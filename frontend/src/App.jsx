import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import TopMovies from "./components/TopMovies";
import { DataProvider } from "./context/DataContext";
// import { mainPageItems } from "./api/apiCalling";


const App = () => {




  return (
    <DataProvider>
      <div className="w-full ">
        <Header />
        <Content />


      </div>
    </DataProvider>
  )
}

export default App;
