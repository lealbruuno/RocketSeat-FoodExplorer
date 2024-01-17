import React from "react";
import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";

export function ButtonOrders({ title, onClick }) {
  return (
    <Container type="button" onClick={onClick}>
      <PiReceipt size={20} />
      {title}
    </Container>
  );
}
