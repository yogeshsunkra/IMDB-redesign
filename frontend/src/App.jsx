import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from './components/Footer';
import QueryProvider from "./provider/QueryProvider.jsx";


const App = () => {

  return (
    <QueryProvider>
      <div className="w-full ">
        <Header/>
        <Content />
        <Footer/>
      </div>
    </QueryProvider>
  )
}

export default App;
