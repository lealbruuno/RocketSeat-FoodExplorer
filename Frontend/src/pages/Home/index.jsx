import { Container } from "./styles";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

export function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const url = search ? `/products?name=${search}` : "/products";
        const response = await api.get(url);

        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error.message);
      }
    }

    fetchProduct();
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Header value={search} onChange={handleSearchChange} />

      <Banner />

      <ProductCard products={products} category="Refeições" />
      <ProductCard products={products} category="Sobremesas" />
      <ProductCard products={products} category="Bebidas" />

      <Footer />
    </Container>
  );
}
