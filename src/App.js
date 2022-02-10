import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import "./styles.css";
import Modal from "./components/Modal";

const ModalCep = () => {
  const [dropdown, setDropdown] = useState("");
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log("show");
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  };

  const closeDropdown = (event) => {
    event.stopPropagation(); //impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) {
      //se clicar fora do modal, ele DESaparece
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  useEffect(() => {
    toggleDropdown();
    // let text = document.getElementById("text-modal");

    // const getLocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else {
    //     text.innerHTML =
    //       "A geolocalização não é compatível com este navegador.";
    //   }
    // };

    // const showPosition = (position) => {
    //   text.innerHTML =
    //     "Latitude: " +
    //     position.coords.latitude +
    //     "<br>Longitude: " +
    //     position.coords.longitude;
    // };

    // getLocation();
  }, []);

  return (
    <div className="App">
      <Modal className={dropdown} modalRef={modalRef} />
    </div>
  );
};

export default ModalCep;
