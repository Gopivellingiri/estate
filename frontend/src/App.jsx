// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import PublicRouter from "./routes/PublicRouter.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
