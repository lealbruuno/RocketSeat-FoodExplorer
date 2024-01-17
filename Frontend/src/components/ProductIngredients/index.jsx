import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function ProductIngredients({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew} //Para um ingrediente já adicionado a exibição fica somente como leitura
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
