// src/components/Header.tsx

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Developer Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
