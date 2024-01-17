import { useState } from "react";
import { Container } from "./styles";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import Polygon1 from "../../assets/logos/Polygon1.svg";
export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
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
          Seu nome
          <input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </form>
    </Container>
  );
}
