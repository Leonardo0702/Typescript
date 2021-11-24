import React from "react";

import { Container } from "./styles";

import Header from "../Header";
import VideoList from "../Videolist";
import Footer from "../Footer";

function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}

export default Layout;
