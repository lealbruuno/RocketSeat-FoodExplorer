import { Container } from "./styles";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Contactor } from "../../components/Contactor";
import { Ingredients } from "../../components/Ingredients";
import { Footer } from "../../components/Footer";

export function ProductDetails() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error.message);
      }
    }
    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  function handleShowDetailsEdit() {
    navigate(`/products/edit/${id}`);
  }

  const imageUrl = `${api.defaults.baseURL}/files/${product.image}`;

  return (
    <Container>
      <Header />
      <ButtonBack title="voltar" onClick={handleBack} />

      <main className="content">
        <div>
          <img src={imageUrl} alt="foto do produto" />
        </div>

        <div className="details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          {product.ingredients && (
            <section>
              {product.ingredients.map((ingredient) => (
                <Ingredients
                  key={String(ingredient.id)}
                  title={ingredient.name}
                />
              ))}
            </section>
          )}

          {USER_ROLE.CUSTOMER.includes(user.role) && (
            <section>
              <Contactor />
              <Button title={`Incluir - R$${product.price}`} />
            </section>
          )}

          {USER_ROLE.ADMIN.includes(user.role) && (
            <section>
              <Button title={`Editar`} onClick={handleShowDetailsEdit} />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </Container>
  );
}
