import React, { useEffect } from "react";
import {
  Landing,
  Home,
  Explore,
  HowItWorks,
  CreateYourFundraiser,
} from "Pages";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";

function App() {
  const RedirectToRoot = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="howitworks" element={<HowItWorks />} />
          <Route
            path="createyourfundraiser"
            element={<CreateYourFundraiser />}
          />
          <Route path="*" element={<RedirectToRoot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
