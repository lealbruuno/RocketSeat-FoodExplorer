import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { ProductIngredients } from "../../components/ProductIngredients";
import { FiUpload } from "react-icons/fi";

export function ProductEdit() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        const { name, image, category, price, description, ingredients } =
          response.data;

        setName(name);
        setCategory(category);
        setPrice(price);
        setDescription(description);
        setIngredients(ingredients || []);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        newIngredient.trim(),
      ]);
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  const handleUpdateProduct = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name || "");
    formData.append("price", price || "");
    formData.append("category", category || "");
    formData.append(
      "ingredients",
      JSON.stringify(
        ingredients.map((ingredient) => ingredient.name || ingredient)
      )
    );
    formData.append("description", description || "");

    api
      .put(`/products/${id}`, formData)
      .then(() => {
        alert("Produto atualizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao atualizar produto:", error.message);
        alert(
          "Não foi possível atualizar o produto. Tente novamente mais tarde."
        );
      });
  };

  const handleRemoveProduct = async () => {
    const confirm = window.confirm("Deseja realmente remover este produto?");

    if (confirm) {
      try {
        await api.delete(`/products/${id}`);
        alert("Produto removido com sucesso!");
        navigate("/");
      } catch (error) {
        console.error("Erro ao remover produto:", error.message);
        alert(
          "Não foi possível remover o produto. Tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <Container>
      <Header />
      <ButtonBack title="voltar" onClick={handleBack} />
      <main>
        <h2>Editar prato</h2>
        <form encType="multipart/form-data">
          <div>
            <section>
              <label>
                Imagem do prato
                <div>
                  <FiUpload size={22} />
                  <span>Selecione imagem</span>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </label>
            </section>

            <section>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </section>

            <section>
              <label>Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled value="">
                  Selecione a Categoria
                </option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </section>
          </div>

          <div>
            <section>
              <label>Ingredientes</label>
              <section>
                {ingredients.map((ingredient, index) => (
                  <ProductIngredients
                    key={index}
                    value={ingredient.name || ingredient}
                    onClick={() => handleRemoveIngredient(index)}
                  />
                ))}
                <ProductIngredients
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </section>
            </section>

            <section>
              <label>Preço</label>
              <input
                type="number"
                placeholder="R$0,00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </section>
          </div>

          <div>
            <section>
              <label>Descrição</label>
              <textarea
                rows="4"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </section>
          </div>
          <div>
            <Button title="Excluir" onClick={handleRemoveProduct} />
            <Button title="Salvar alterações" onClick={handleUpdateProduct} />
          </div>
        </form>
      </main>
      <Footer />
    </Container>
  );
}
