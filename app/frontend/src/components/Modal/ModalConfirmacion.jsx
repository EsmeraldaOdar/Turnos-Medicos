import React from 'react';
import style from './Modal.module.css'; 

// Recibimos las funciones "onConfirm" y "onClose" desde el Padre (MisTurnos)
function ModalConfirmacion({ titulo, mensaje, onConfirm, onClose, isOpen }) {
    
    // 1. Early Return: Si está cerrado, no renderizamos NADA. Ahorramos recursos.
    if (!isOpen) return null;

    // 2. Componente "Tonto" (Presentational):
    // No tiene estado interno, ni lógica compleja. Solo muestra y delega clics.
    return (
        <div className={style.overlay}>
            <div className={style.modalContent}>
                
                {/* Header */}
                <h2>{titulo}</h2>
                
                {/* Body */}
                <p>{mensaje}</p>
                
                {/* Footer / Actions */}
                <div className={style.modalButtons}>
                    {/* Botón secundario: Solo cierra el modal */}
                    <button onClick={onClose} className={style.cancelButton}>
                        Cancelar
                    </button>

                    {/* Botón primario: Ejecuta la acción peligrosa */}
                    <button onClick={onConfirm} className={style.confirmButton}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalConfirmacion;