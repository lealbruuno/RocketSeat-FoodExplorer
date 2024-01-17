import { Container } from "./styles";

export function Ingredients({ title }) {
  return (
    <Container>
      <section>
        <span>{title}</span>
      </section>
    </Container>
  );
}
