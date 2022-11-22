import React from "react";

import { Box } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Box>
  );
}

export default App;
