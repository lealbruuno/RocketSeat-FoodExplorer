import { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { ProductIngredients } from "../../components/ProductIngredients";
import { FiUpload } from "react-icons/fi";

export function ProductAdd() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === "") return;

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(removedIngredient) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== removedIngredient)
    );
  }

  function handleProductAdd() {
    if (
      !name ||
      !price ||
      !category ||
      ingredients.length === 0 ||
      !description
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("description", description);
    
    api
      .post("/products", formData)
      .then(() => {
        alert("Produto cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(`Erro ao cadastrar produto: ${error.response.data.message}`);
        } else {
          alert(
            "Não foi possível cadastrar o produto. Tente novamente mais tarde."
          );
        }
      });
  }

  return (
    <Container>
      <Header />
      <ButtonBack title="voltar" onClick={handleBack} />
      <main>
        <h2>Adicionar prato</h2>
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
                required
                onChange={(e) => setName(e.target.value)}
              />
            </section>

            <section>
              <label>Categoria</label>
              <select
                defaultValue=""
                required
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
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
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
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </section>
          </div>

          <div>
            <section>
              <label>Descrição</label>
              <textarea
                rows="4"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                required
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </section>
          </div>
          <div>
            <Button title="Adicionar" onClick={handleProductAdd} />
          </div>
        </form>
      </main>
      <Footer />
    </Container>
  );
}
