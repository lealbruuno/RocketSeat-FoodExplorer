import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { Home } from "./pages/Home";
import { ProductAdd } from "./pages/ProductAdd";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductEdit } from "./pages/ProductEdit";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
