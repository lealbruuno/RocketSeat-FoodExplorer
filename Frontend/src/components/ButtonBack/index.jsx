import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";

export function ButtonBack({ title, onClick }) {
  return (
    <Container onClick={onClick}>
      <IoIosArrowBack />
      {title}
    </Container>
  );
}
