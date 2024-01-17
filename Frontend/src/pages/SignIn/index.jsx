import { useState } from "react";
import { Container } from "./styles";
import Polygon1 from "../../assets/logos/Polygon1.svg";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <section>
        <img src={Polygon1} alt="Logo Food Explorer" />
        <h1>food explorer</h1>
      </section>

      <form action="">
        <h1>Faça login</h1>
        <label>
          Email
          <input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/users">Criar uma conta</Link>
      </form>
    </Container>
  );
}
