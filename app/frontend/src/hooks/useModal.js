import { useState } from "react";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null); // aca se guarda el ID del turno a eliminar o cualquier otro dato que se quiera pasar al modal

    const openModal = (modalData = null) => {
        setIsOpen(true);
        setData(modalData);
    };
    const closeModal = () => {
        setIsOpen(false);
        setData(null);
    };

    return {
        isOpen,
        data,
        openModal,
        closeModal
    };
}

