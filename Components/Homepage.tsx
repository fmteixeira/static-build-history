import React from "react";
import { Container } from "@material-ui/core";
// Components
import Header from "./Header";
import PinList from "./PinList";
// Api
// Context
// Hooks
// Pages
// Resources

interface Props {}

export default function Homepage({}: Props) {
  return (
    <Container>
      <Header />
      <PinList />
    </Container>
  );
}
