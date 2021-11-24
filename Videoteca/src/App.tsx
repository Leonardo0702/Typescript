import React from "react";

import Layout from "./components/Layout";
import GlobalStyles from "./GlobalStyles";

import { VideoContextProvider } from "./contexts/VideoContext";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Layout />
      </VideoContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
