import React, { useState } from "react";
import Wrapped from './components/wrapped';

import "./styles.css";

const App = () => {
  const [logged, setLogged] = useState(false);

  const changeState = () => {
    setLogged(!logged);
  };

  return <Wrapped changeState={changeState} />;
};

export default App;
