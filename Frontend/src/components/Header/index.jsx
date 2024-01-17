import React, { useState } from "react";
import { Container, Desktop, MobileClosed, MobileOpen } from "./styles";
import Polygon1 from "../../assets/logos/Polygon1.svg";
import { ButtonOrders } from "../../components/ButtonOrders";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";
import { PiReceipt } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Header({ value, onChange }) {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function alternarMenu() {
    setMenuVisivel(!menuVisivel);
  }

  return (
    <Container>
      <Desktop>
        <div>
          <img src={Polygon1} alt="Logo Food Explorer" />

          <h1>food explorer</h1>

          {USER_ROLE.ADMIN.includes(user.role) && (
            <p>{user.role.toLowerCase()}</p>
          )}
        </div>

        <div>
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={value}
            onChange={onChange}
          />
        </div>

        <div>
          {USER_ROLE.ADMIN.includes(user.role) && (
            <ButtonOrders
              size={24}
              title="Novo prato"
              onClick={() => navigate("/products")}
            />
          )}

          {USER_ROLE.CUSTOMER.includes(user.role) && (
            <ButtonOrders
              size={24}
              title="Pedidos (0)"
              onClick={() => navigate("/orders")}
            />
          )}
        </div>

        <div>
          <PiSignOut size={24} onClick={handleSignOut} />
        </div>
      </Desktop>

      <div className="mobile">
        {menuVisivel ? (
          <MobileOpen>
            <div>
              <button onClick={alternarMenu}>
                <IoMdClose size={24} />
                Menu
              </button>
            </div>

            <div>
              <CiSearch size={20} />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
                value={value}
                onChange={onChange}
              />
            </div>

            {USER_ROLE.ADMIN.includes(user.role) && (
              <h1 onClick={() => navigate("/products")}>Novo prato</h1>
            )}

            <h1 onClick={handleSignOut}>Sair</h1>
          </MobileOpen>
        ) : (
          <MobileClosed>
            <button onClick={alternarMenu}>
              <IoMenu size={24} />
            </button>
            <div>
              <img src={Polygon1} alt="Logo Food Explorer" />
              <h1>food explorer</h1>

              {USER_ROLE.ADMIN.includes(user.role) && (
                <p>{user.role.toLowerCase()}</p>
              )}
            </div>
            <PiReceipt size={24} onClick={() => navigate("/orders")}/>
          </MobileClosed>
        )}
      </div>
    </Container>
  );
}
