import React from "react";
import Routes from "./routes";
import { FiltredBusinessProvider } from "./contexts";
import "./styles/global.scss";
import "./styles/reset.scss";
import "./styles/fonts.scss";

export default function App() {
  return (
    <FiltredBusinessProvider>
      <Routes />
    </FiltredBusinessProvider>
  );
}
