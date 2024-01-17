// Importe os estilos do Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { Container } from "./styles";
import { Contactor } from "../../components/Contactor";
import { Button } from "../../components/Button";
import { FaRegHeart } from "react-icons/fa";
import { PiPencilSimpleDuotone } from "react-icons/pi";

// Componentes do Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper e os módulos necessários
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function ProductCard({ products, category }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const filteredProducts = products.filter(
    (product) => product.category === category
    );
    
    if (filteredProducts.length === 0) {
      // Se não há produtos na categoria não exibe a categoria
      return <Container></Container>;

  }

  return (
    <Container>
      <main>
        <h2>{category}</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={window.innerWidth >= 700 ? 20 : 200} // Ajuste conforme necessário
          slidesPerView={window.innerWidth >= 700 ? 4.5 : 2.5} // Ajuste conforme necessário
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          >
          {filteredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <section>
                <div>
                  {user.role === USER_ROLE.ADMIN && (
                    <button
                      onClick={() =>
                        navigate(`/products/details/${product.id}`)
                      }
                    >
                      <PiPencilSimpleDuotone size={24} />
                    </button>
                  )}
                  {user.role === USER_ROLE.CUSTOMER && (
                    <button>
                      <FaRegHeart size={20} />
                    </button>
                  )}
                </div>
                <img
                  src={`${api.defaults.baseURL}/files/${product.image}`}
                  alt="foto do produto"
                />
                <h2
                  onClick={() => navigate(`/products/details/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >{`${product.name} >`}</h2>
                <span>{product.description}</span>
                <p>{`R$ ${product.price}`}</p>
                <section>
                  <Contactor />
                  <Button title="Incluir" />
                </section>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </Container>
  );
}
