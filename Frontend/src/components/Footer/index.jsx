import { Container } from "./styles";
import Polygon2 from "../../assets/logos/Polygon2.svg";

export function Footer() {
  return (
    <Container>
      <footer>
        <img src={Polygon2} alt="Logo Food Explorer" />
        <h1>food explorer</h1>
      </footer>
      <span>&copy; 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
