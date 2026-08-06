import React, { lazy } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
const Footer = lazy(()=>import('./components/Footer'));
import QueryProvider from "./provider/QueryProvider.jsx";
const LazyComponent = lazy(()=>import("./components/LazyComponent.jsx"));


const App = () => {

  return (
    <QueryProvider>
      <div className="w-full h-full">

          <Header />

          <Content />

          <LazyComponent>
            <Footer />
          </LazyComponent>
          
      </div>
    </QueryProvider>
  )
}

export default App;
