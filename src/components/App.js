import React from "react";
import AppRouter from "components/Router";
import GlobalStyles from "components/GlobalStyles";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      ></link>
      <AppRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
