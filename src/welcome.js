import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/header/header";
import SideNav from "./components/sidenav/sidenav";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToNewPage = () => {
    navigate('/newpage');
  };

  return (

    <>
      <SideNav />
      <Header />

      {/* <h1>Welcome!</h1>
      <p>You have successfully logged in.</p>
       */}
      <main>
        <button onClick={goToNewPage}>New Page</button>
      </main>

    </>
  );
};

export default WelcomePage;
