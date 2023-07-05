import React, { useEffect } from "react";
import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import CTAV1 from "./pages/CTAV1/CTAV1";
import Form from "./pages/Form/Form";
import Thankyou from "./pages/ThankYou/Thankyou";
import Plain from "./pages/Plain/Plain";
import Outbound from "./pages/Outbound/Outbound";

import ReactGA from "react-ga";
import FormStripe from "./pages/Form/FormStripe";
const TRACKING_ID = "G-VT4GYETHCK";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={CTAV1} />
        <Route path="/getstarted" exact Component={Form} />
        <Route path="/thankyou" exact Component={Thankyou} />
        <Route path="/outbound" exact Component={Outbound} />
        <Route path="/stripe" exact Component={FormStripe} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
