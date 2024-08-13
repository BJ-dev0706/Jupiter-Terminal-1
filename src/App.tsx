import React from "react";
import Header from "./Layout/Header";
import Block1 from "./Layout/Block_one";
import Block2 from "./Layout/Block_two";
import Block3 from "./Layout/Block_three";
import Footer from "./Layout/Footer";

const App: React.FC = () => {
  return(
    <div>
      <Header />
      <Block1/>
      <Block2 />
      <Block3 />
      <Footer />
    </div>
  )
}

export default App;