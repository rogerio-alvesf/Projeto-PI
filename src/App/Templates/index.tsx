import React from "react";

import Box from "@mui/material/Box";

import Header from "./Components/Header";

type TemplateProps = {
  children: React.ReactNode;
};

const Templates = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Templates;
