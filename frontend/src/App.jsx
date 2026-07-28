import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from './components/Footer';
import QueryProvider from "./provider/QueryProvider.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import LazyComponent from "./components/LazyComponent.jsx";


const App = () => {

  return (
    <QueryProvider>
      <div className="w-full ">


        <DataProvider>

          <Header />
          <Content />
          <LazyComponent>
            <Footer />
          </LazyComponent>
          

        </DataProvider>
      </div>
    </QueryProvider>
  )
}

export default App;
