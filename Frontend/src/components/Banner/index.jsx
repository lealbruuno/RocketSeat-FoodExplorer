import { Container } from "./styles";
import BannerImg from "../../assets/banner/banner.png";

export function Banner() {
  return (
    <Container>
      <main>
        <section>
          <img src={BannerImg} alt="imagem com frutas e macarones" />
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </section>
      </main>
    </Container>
  );
}
