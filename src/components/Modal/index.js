import React, { useState, useRef } from "react";
import InputMask from "react-input-mask";
import Cookies from "js-cookie";
import "../../styles.css";

const Modal = (props) => {
  const { className, modalRef } = props;
  const [cepInput, setCepInput] = useState("");
  const [cepCoordinates, setCepCoordinates] = useState([]);

  // useEffect(() => {
  const consultCep = () => {
    try {
      if (cepInput) {
        fetch(`https://brasilapi.com.br/api/cep/v1/${cepInput}`)
          .then((res) => res.json())
          .then((result) => {
            setCepCoordinates(result);
            console.log("Fetch realizado! ", result);
          });
      } else {
        alert("Digite um CEP!");
      }
    } catch {
      console.log("Erro ao consultar o CEP");
    }
  };
  // }, [cepInput]);

  const handleCepInput = async (event) => {
    setCepInput(event.target.value);
  };

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <div className="text-modal-header">
        <svg
          className=""
          width="20"
          height="25"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.07575 0C2.0303 0 0 2.04082 0 5C0 8.97959 3.65454 13.9286 4.61894 14.898C4.66969 14.949 4.77121 15 4.87272 15C4.97424 15 5.07575 14.949 5.12651 14.8469C5.63409 14.2857 9.99924 9.18367 9.99924 5C10.05 1.53061 7.56287 0 5.07575 0ZM4.87272 14.0306C3.7053 12.6531 0.761363 8.36735 0.761363 5C0.761363 2.39796 2.43636 0.765306 5.07575 0.765306C7.00454 0.765306 9.28863 1.88776 9.28863 5C9.28863 8.0102 6.64924 11.9898 4.87272 14.0306ZM5.025 2.95918C3.90833 2.95918 2.9947 3.87755 2.9947 5C2.9947 6.12245 3.90833 7.04082 5.025 7.04082C6.14166 7.04082 7.0553 6.12245 7.0553 5C7.0553 3.87755 6.14166 2.95918 5.025 2.95918ZM5.025 6.27551C4.31439 6.27551 3.75606 5.71429 3.75606 5C3.75606 4.28571 4.31439 3.72449 5.025 3.72449C5.7356 3.72449 6.29394 4.28571 6.29394 5C6.29394 5.71429 5.7356 6.27551 5.025 6.27551Z"
            fill="#500f0f"
          />
        </svg>
        <p className="text-modal-title">Confira se atendemos sua região</p>
        <p className="text-modal-description">
          Informe seu CEP onde deseja <b>receber</b> ou
          <b> retirar </b>sua compra
        </p>
      </div>
      <div className="container-inputs-search">
        <InputMask mask="99999-999" value={cepInput} onChange={handleCepInput}>
          {() => (
            <input
              className="input-modal-search"
              autoFocus={true}
              placeholder={"00000-000"}
            ></input>
          )}
        </InputMask>
        <input
          className="button-modal-search"
          onClick={() => consultCep()}
          type="button"
          value="Procurar"
        />
      </div>
      <div className="help-search-modal">
        <a
          className="help-search-link"
          href="http://www.buscacep.correios.com.br/sistemas/buscacep/"
          target="_blank"
          rel="noopener"
        >
          Não sei meu CEP
        </a>
      </div>
    </div>
  );
};

export default Modal;
